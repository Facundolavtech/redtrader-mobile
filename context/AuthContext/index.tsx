import React, { createContext, useReducer } from "react";
import { AuthService, LoginService } from "../../services/Auth";
import deviceStorage from "../../services/deviceStorage";
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

  const signInLoading = () => {
    dispatch({ type: "SIGN_IN" });
  };

  const signIn = (payload: string | null) => {
    if (!payload) {
      dispatch({ type: "SIGN_IN_ERROR" });
    } else {
      deviceStorage.saveItem("authToken", payload);
      auth(payload);
    }
  };

  const auth = async (token: string) => {
    const response: any = await AuthService(token);

    if (response.status === 200) {
      dispatch({ type: "SIGN_IN_SUCCESS", payload: response.user });
    } else {
      dispatch({ type: "SIGN_IN_ERROR" });
    }
  };

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
  };

  return (
    <AuthContext.Provider
      value={{ authState, signIn, auth, signInLoading, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
