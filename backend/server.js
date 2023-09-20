import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";

// config
import { corsOption } from "./config/corsOption.js";

// routers
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import tokenRouter from "./routes/token.js";

// custom middleware
import { errorLog } from "./middlewares/errorLogger.js";
import { verifyToken } from "./middlewares/verifyToken.js";

const app = express();
const port = process.env.PORT || 8081;

// allow app to communicate to environment variables
dotenv.config();

// middleware - allow cross origin resource sharing to specific url
app.use(cors(corsOption));

// middleware - allow cookie passing
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    },
  })
);

// middleware - parse form data
app.use(express.urlencoded({ extended: true }));

// middleware - parse JSON body
app.use(express.json()); // This line enables JSON request body parsing

// auth end point
app.use("/auth", authRouter);
app.use("/token", tokenRouter);

// make the end point below private by injecting middleware tha check for token
app.use(verifyToken);

// get user endpoint - READ
app.use("/user", userRouter);

// custom middleware - catch all request error and save it to a flat file
app.use(errorLog);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(`Error connecting to mongodb: ${error.message}`);
  });
