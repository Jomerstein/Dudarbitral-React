import axios from "axios";
import { DecodedToken, LoginUser, LoginUserResponse, RegisterUser } from "./AuthModels";
import { Backend_URL } from "@/lib/Constants";
import {jwtDecode} from "jwt-decode"
import { JWTHandler } from "./JWTHandler";



export class AuthService{


    async register(user: RegisterUser){
        try{
            const response = axios.post(`${Backend_URL}/api/Users/register`,{
                email: user.email,
                username: user.username,
                password: user.password
                

            })
            if((await response).status === 200){
                return {
                    success: true,
                    jwt: (await response).data
                }
            }else{
                return {
                    success: false
                   
                }
            }

        }catch(e){
            console.log(e)
            return{
                success: false
            }
        }

    }
    static async logout(){
        JWTHandler.removeTokenLocalStorage();
    }

    static async login(user: LoginUser): Promise<LoginUserResponse>{
        try{
            const response = axios.post(`${Backend_URL}/api/Users/login`,{
                email: user.email,
                password: user.password,
            },{
                withCredentials: true, 
              })
            if((await response).status === 200){
                const { token} = (await response).data;
                JWTHandler.saveTokenLocalStorage(token);
                const decodedToken: DecodedToken = jwtDecode(token);
   
                const role = decodedToken.role;  // Aquí accedemos al rol
                const isAdmin = role === "admin"; 
                console.log(decodedToken.role);
             return { isAdmin, accessToken: token, success: true };
            }else{
                return {
                    success: false,
                    isAdmin: false,
                   
                }
            }
          
        }catch(e){
            console.log(e)
            return{
                success:false,
                isAdmin: false
            }
        }
        
    }
    static async getAccessToken(): Promise<string | null> {
        const token: string | null =  JWTHandler.getAccessToken();
        if(!token){
            console.log("Entre al refresco")
            return await this.refreshToken();
        }
        console.log("El token ta bien")
        return token;
      }

      static  checkIsLogedIn(): boolean {
        const token: string | null = JWTHandler.getAccessToken();
        if(token){
            return true
        }
        return false
      }
      

      static getIsAdmin(): boolean {
        const token = JWTHandler.getAccessToken();
        if (!token) return false;
    
        try {
          const decodedToken: DecodedToken = jwtDecode(token);
          return decodedToken.role === "admin";
        } catch (e) {
          console.error("Error con el token:", e);
          return false;
        }
      }
    static async refreshToken():Promise<string | null> {
        try{
            
            const response = await axios.post(`${Backend_URL}/api/Users/refresh`, {
                
            },{
                withCredentials: true
            });
            console.log(this.getCookie('RefreshToken'))
            if(response.status === 401 || response.status === 400){
                console.log("no refresque")
                return null;
            }
            const { token } =  response.data;
            console.log("Estoy refrescando");
            JWTHandler.saveTokenLocalStorage(token);
            return JWTHandler.getAccessToken();

        }catch(e){
            JWTHandler.removeTokenLocalStorage();
            return null;
        }
     


   
    }

      static getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        const cookieValue = parts.length === 2 ? parts.pop() : undefined;
        if (cookieValue !== undefined) {
          return cookieValue.split(';').shift() || null;
        }
        return null;
      };
    

}

