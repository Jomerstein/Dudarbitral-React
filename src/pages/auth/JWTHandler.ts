import { AuthResponse, DecodedToken } from "./AuthModels"
import {jwtDecode} from "jwt-decode"
const tokenKey: string = "accessToken"
const expirationKey: string = "tokenExpiration"

export class JWTHandler{
    static  saveTokenLocalStorage(token: string){
        const decodedToken: DecodedToken = jwtDecode(token);
     
        
        localStorage.setItem(tokenKey, token);
        localStorage.setItem(expirationKey, decodedToken.exp.toString());
    }
    static  getAccessToken(): string | null{
        const expiration = localStorage.getItem('tokenExpiration')!;
const dateExpiration = new Date(Number(expiration) * 1000);
console.log(dateExpiration);
          if(dateExpiration <= new Date() || expiration === null){
            console.log("retorno null")

            return null;
          }
          return localStorage.getItem(tokenKey);
      
    
      }
        static removeTokenLocalStorage(){
        localStorage.removeItem(tokenKey);
        localStorage.removeItem(expirationKey);
    }
    
    
}


