import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AuthService } from "./AuthService";
import { LoginUser } from "./AuthModels";


interface AuthContextType {
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: (user: LoginUser) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(AuthService.getIsAdmin());

  const checkIsLogedIn = async () =>{
    const token = await AuthService.checkIsLogedIn();
    if (token) {
      setIsLoggedIn(true);
      setIsAdmin(AuthService.getIsAdmin());
    }
  } 

  useEffect(() => {
    checkIsLogedIn();
  }, []);

  const login = async (user: LoginUser): Promise<boolean> => {
    try {
      
      const response = await AuthService.login(user);
      if(response.success){
        setIsLoggedIn(true);
        setIsAdmin(response.isAdmin);
        return response.success;
      }
      
      return response.success;
    } catch (error) {
      throw new Error("Usuario o contraseña inválido");
    }
  
  };

  const logout =  () => {
 
    
      setIsLoggedIn(false);
      setIsAdmin(false);
      AuthService.logout();
    
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
