import { Backend_URL } from "@/lib/Constants";
import axios from "axios";
import { Equipo } from "../models/Equipo";

export class EquipoService{
    async getEquipos (){
        try{
            
        const response = await axios.get(`${Backend_URL}/api/Equipos`);
        const equipos: Equipo[] = response.data;
        return {
            equipos: equipos,
            success: true,
        }
        }catch(e){
            return{
                success: false
            }
        }
        
    }
}