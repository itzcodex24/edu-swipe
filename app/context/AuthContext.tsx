import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

interface AuthContextProps {
  state?: { token: string | null; authenticated: boolean };
  onRegister?: (
    username: string,
    email: string,
    password: string,
  ) => Promise<any>;
  onLogin?: (usernameOrEmail: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "token";
export const API_URL = "";
const AuthContext = createContext<AuthContextProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authState, setAuthState] = useState<AuthContextProps["state"]>({
    token: null,
    authenticated: false,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      if (token) {
        setAuthState({ token, authenticated: true });
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
    };

    loadToken();
  }, []);

  const register = async (
    username: string,
    email: string,
    password: string,
  ) => {
    try {
      return await axios.post(`${API_URL}/auth/register`, {
        username,
        email,
        password,
      });
    } catch (error: any) {
      console.log(error);
      return { error: true, msg: error.response.data.message };
    }
  };

  const login = async (usernameOrEmail: string, password: string) => {
    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        usernameOrEmail,
        password,
      });

      setAuthState({ token: res.data.token, authenticated: true });
      axios.defaults.headers.common["Authorization"] =
        `Bearer ${res.data.token}`;
      await SecureStore.setItemAsync(TOKEN_KEY, res.data.token);

      return res;
    } catch (error: any) {
      console.log(error);
      return { error: true, msg: error.response.data.message };
    }
  };

  const logout = async () => {
    setAuthState({ token: null, authenticated: false });
    axios.defaults.headers.common["Authorization"] = "";
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  };
  return (
    <AuthContext.Provider
      value={{
        onLogin: login,
        onLogout: logout,
        onRegister: register,
        state: authState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
