import axios from "axios";
import { LoginUser, LoginUserResponse, RegisterUser } from "./AuthModels";
import { Backend_URL } from "@/lib/Constants";


export class AuthService{

    async register(user: RegisterUser){
        try{
            const response = axios.post(`${Backend_URL}/api/Users/Register`,{
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
    static async login(user: LoginUser): Promise<LoginUserResponse>{
        try{
            const response = axios.post(`${Backend_URL}/api/Users/Login`,{
                email: user.email,
                password: user.password,
            })
            if((await response).status === 200){
                return {
                    isAdmin: (await response).data.isAdmin,
                    jwt: (await response).data.token, 
                    success: true
                }
            }else{
                return {
                    success: false
                   
                }
            }
          
        }catch(e){
            console.log(e)
            return{
                success:false
            }
        }
        
    }

}

