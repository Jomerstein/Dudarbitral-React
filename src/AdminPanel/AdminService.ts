import axios from "axios";
import { Equipo } from "./Models/Equipo";
import { Backend_URL } from "@/lib/Constants";

export class AdminService {
    async postEquipo(equipo: Equipo, jwtToken: string){
        try{
            const response = await axios.post(`${Backend_URL}/api/Equipos`,{
                nombre: equipo.nombre,
                escudo: equipo.escudo,
            },{
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            } )
            if(response.status === 200){
                return{
                    success: true
                }
            }else{
                return{
                    success: false
                }
       
            }
        }catch(e){
            return{
                success: false
            }
        }
       


    }
}