import { createContext, useState, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const userLogin = (token) => {
    setAccessToken(token);
  };

  const userLogout = () => {
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, userLogin, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
