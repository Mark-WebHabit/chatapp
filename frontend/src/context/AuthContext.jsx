import React, { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../api/instance";

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSingleUSer = async () => {
      try {
        const response = await instance.get("/user");
        setUser(response.data.data);
      } catch (error) {
        setUser(null);
      }
    };
    getSingleUSer();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
