import React, {
  useEffect,
  useReducer,
  createContext,
  useContext,
} from "react";
// @ts-ignore
import Cookies from "js-cookie";
import { ILoggedUser, ILoginResponse } from "../services/auth/interface";


interface IAuthState {
  authenticated: boolean;
}

interface IAuthContext extends IAuthState {
  logout: () => void;
  login: (data: ILoginResponse) => void;

}

const defaultState: IAuthState = {
  authenticated: false,
};

const defaultContext: IAuthContext = {
  ...defaultState,
  logout: () => { },
  login: () => { },
};

export const AuthContext = createContext<IAuthContext>(defaultContext);

type ActionPayload =
  | { type: "login" }
  | { type: "logout" }

const reducer = (state: IAuthState, action: ActionPayload) => {
  if (action.type === "login") {
    return {
      ...state,
      authenticated: true,
    };
  }

  if (action.type === "logout") {
    return {
      ...state,
      authenticated: false,
    };
  }
  return state;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const [values, dispatch] = useReducer(reducer, defaultState);

  const login = (data: ILoginResponse) => {
    Cookies.set("user", data.userId);
    Cookies.set("userFullName", data.fullName);
    Cookies.set("accessToken", data.token);
  };

  const logout = () => {
    Cookies.remove("accessToken");
    dispatch({ type: "logout" });
  };

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      return;
    }
    dispatch({ type: "login" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...values,
        logout,
        login
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};