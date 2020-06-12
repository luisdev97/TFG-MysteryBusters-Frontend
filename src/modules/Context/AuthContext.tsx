import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { Researcher } from "../Researchers/models/entities/Researcher";
//import { useHistory } from "react-router-dom";

export interface AuthContext {
  loggedIn: boolean;
  researcherId: string | null;
  me: Researcher | null;
  token: string | null;
  type: string | null;
  login: (token: string, me: Researcher | null) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContext>({
  loggedIn: false,
  researcherId: null,
  token: null,
  type: null,
  me: null,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export function useAuth() {
  return useContext(AuthContext);
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AUTH_TOKEN_KEY = "auth_token";
export const AUTH_RESEARCHERID_KEY = "researcherId";
export const AUTH_ROL_KEY = "rol";

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<
    Pick<AuthContext, "loggedIn" | "token" | "researcherId" | "type" | "me">
  >(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const loggedIn = token ? true : false;
    const researcherId = localStorage.getItem(AUTH_RESEARCHERID_KEY);
    const type = localStorage.getItem(AUTH_ROL_KEY);
    const researcher = localStorage.getItem("me");
    const me = researcher ? JSON.parse(researcher) as Researcher : null;

    return {
      loggedIn,
      token,
      researcherId,
      type,
      me
    };
  });

  useEffect(() => {
    if (state.token) {
      localStorage.setItem(AUTH_TOKEN_KEY, state.token);
    } else {
      localStorage.removeItem(AUTH_TOKEN_KEY);
    }

    if (state.researcherId) {
      localStorage.setItem(AUTH_RESEARCHERID_KEY, state.researcherId);
    } else {
      localStorage.removeItem(AUTH_RESEARCHERID_KEY);
    }

    if (state.type) {
      localStorage.setItem(AUTH_ROL_KEY, state.type);
    } else {
      localStorage.removeItem(AUTH_ROL_KEY);
    }
  }, [state]);

  const login = useCallback(
    async (
      token = state.token,
      me = state.me
    ) => {
      console.log('login')
      setState((current) => ({
        ...current,
        loggedIn: true,
        token,
        me
      }));
    },
    []
  );

  const logout = useCallback(async () => {
    setState((current) => ({
      ...current,
      loggedIn: false,
      token: null,
      researcherId: null,
      type: null,
    }));
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, ...state }}>
      {children}
    </AuthContext.Provider>
  );
}

window.addEventListener("beforeunload", (ev) => {
  ev.preventDefault();
  localStorage.removeItem(AUTH_ROL_KEY);
  localStorage.removeItem(AUTH_RESEARCHERID_KEY);
  localStorage.removeItem(AUTH_TOKEN_KEY);
});

export default AuthProvider;