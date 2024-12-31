import { createContext, useContext, useState, ReactNode } from "react";
import { AuthService } from "./AuthService";
import { LoginUser } from "./AuthModels";


interface AuthContextType {
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: (user: LoginUser) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = async (user: LoginUser): Promise<boolean> => {
    try {
      
      const data = await AuthService.login(user);
      if(data.success === false){
        return data.success;
      }
      if(data.jwt != null && data.isAdmin != null){
        setIsLoggedIn(true);
        setIsAdmin(data.isAdmin);
        localStorage.setItem("jwt", data.jwt);
        return data.success;
      }
      return data.success;
    } catch (error) {
      throw new Error("Invalid username or password");
    }
  
  };

  const logout = async () => {
 
    
      setIsLoggedIn(false);
      setIsAdmin(false);
      localStorage.removeItem("jwt"); 
    
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
