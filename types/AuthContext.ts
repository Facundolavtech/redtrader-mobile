export interface AuthState {
  isLoggedIn: boolean;
  userInfo?: null;
  loading: boolean;
  signIn?: () => void;
}

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}
