import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get('/user/loginData');
        if(response.status === 200){
            setUser(response.data.user);
            if(user){
                console.log("Got user : ", user);
            }
            else{
                console.log("Could not get user");
            }
        }
        else{
            console.log("Some error occurred, didn't get status 200 for login data");
        }
      } catch (err) {
        console.log("error in getting user for Login Data : ", err);
      }
    }
    getUser();
    // below comment line is to disable a warning which says using 'user' in dependency array.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
