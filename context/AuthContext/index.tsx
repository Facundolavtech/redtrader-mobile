import React, { createContext, useReducer } from "react";
import { AuthContextProps, AuthState } from "../../types/AuthContext";
import { authReducer } from "./authReducer";

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  userInfo: null,
  loading: false,
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const signIn = () => {
    dispatch({ type: "SIGN_IN" });
  };

  return (
    <AuthContext.Provider value={{ authState, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
