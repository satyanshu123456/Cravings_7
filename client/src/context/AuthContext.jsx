import React, { useState } from "react";

const AuthContext = React.createContext;

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // if (user) {
    //   setIsLogin(true);
    // } else {
    //   setIsLogin(false);
    // }
    setIsLogin(!!user);
  }, [user]);

  const value = {
    user,
    setUser,
    isLogin,
    setIsLogin,
  };

  return <AuthContext.provider value={value}>{children}</AuthContext.provider>
};


export const useAuth = () =>  useContext(AuthContext);

