import { AuthState } from "../../types/AuthContext";

type AuthAction = {
  type: "SIGN_IN";
};

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        loading: true,
        isLoggedIn: true,
        userInfo: null,
      };
    // case "SIGN_IN_SUCCESS":
    //   return {
    //     ...state,
    //     loading: false,
    //     isLoggedIn: true,
    //     userInfo: action.payload,
    //   };
    // case "SIGN_IN_ERROR":
    //   return { ...state, loading: false, userInfo: null, isLoggedIn: false };

    default:
      return state;
  }
};
