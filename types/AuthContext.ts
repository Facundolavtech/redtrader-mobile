export interface AuthState {
  isLoggedIn: boolean;
  userInfo?: object | null;
  loading: boolean;
  signIn?: (payload: string) => void;
}

export interface AuthContextProps {
  authState: AuthState;
  signIn: (payload: string | null) => void;
  auth: (token: string) => void;
  signInLoading: () => void;
  signOut: () => void;
}
