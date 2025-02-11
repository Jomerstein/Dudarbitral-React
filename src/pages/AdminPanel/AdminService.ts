import axios from "axios";
import { postEquipo } from "../../equipos/models/Equipo";
import { Backend_URL } from "@/lib/Constants";
import { postArbitro } from "../../Arbitro";

export class AdminService {
    private jwt: string ;

    constructor(jwt:string){
        this.jwt = jwt;
    }
    async postEquipo(equipo: postEquipo){
        try{
            const response = await axios.post(`${Backend_URL}/api/Equipos`,{
                nombre: equipo.nombre,
                escudo: equipo.escudo,
                color: equipo.color,
            },{
                headers: {
                    Authorization: `Bearer ${this.jwt}`
                }
            } )
            if(response.status === 201){
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
    async postArbitro(arbitro : postArbitro){
        try{
            const response = await axios.post(`${Backend_URL}/api/Arbitros`,{
                nombre: arbitro.nombre,
                apellido: arbitro.apellido,
                foto: arbitro.foto
        
        },{
            headers: {
                Authorization: `Bearer ${this.jwt}`
            }
        })
        if(response.status === 201){
            return{
                success: true
            }
        }
        return{
            success: false
        }

       }catch(e){
            return {
                success: false
            }
        }

    }
}