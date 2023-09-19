import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// utilities
import { isStateEmpty, isLengthValid } from "../utilities/stateValidator.js";

// model
import { Users } from "../Model/Users.js";

// init env
dotenv.config();

// REGISTER - POST
// ENDPOINT: /user/register
// @private-access
const register = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // check if none of the state is empty
  await isStateEmpty(username, password);

  // check if the given length correspond to the state
  await isLengthValid("Username", username, 2);
  await isLengthValid("Password", password, 6);

  // check if username already exists
  const existingUser = await Users.find({ username });

  if (existingUser.length) {
    //if a user has been found with the same username
    return res.status(409).json({ message: "Username already exists" });
  }

  // if there is no existing user then:
  // hash password
  const hashedpass = await bcrypt.hash(password, 10);

  // create new user using the Users model
  const newUser = new Users({
    username,
    password: hashedpass,
  });

  // save the created user
  await newUser.save();

  // save the data to a new variable and convert to object the delete the password
  let responseData = newUser.toObject();
  delete responseData.password;

  return res.status(201).json({ data: responseData });
});

// LOGIN - POST
// ENDPOINT: /user/login
// @private-access
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // check if none of the state is empty
  await isStateEmpty(username, password);

  // check if the username matches any user from the db
  const existingUser = await Users.findOne({ username });
  console.log(existingUser);

  if (!existingUser) {
    //if there is no user found
    return res.status(404).json({ message: "Account does not exist" });
  }

  //if there is an exisiting user with the given username then:
  // check if the given password is equal to the found user's password from db
  const isMatch = await bcrypt.compare(password, existingUser.password);

  if (!isMatch) {
    //if passwords not matched
    return res.status(409).json({ message: "Wrong username or password" });
  }

  // if passwords macthed then:

  // implement jwt
  const accessToken = jwt.sign(
    { user: existingUser._id },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    }
  );

  const refreshToken = jwt.sign(
    { user: existingUser._id },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  // store access token to http only cookie
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "Lax",
  });

  // save the refresh token to db that correspond to the user
  await Users.findByIdAndUpdate(existingUser._id, {
    refreshToken,
  });

  return res.json({ accessToken });
});

export { register, login };
