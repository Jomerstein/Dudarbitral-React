import { useEffect, useState } from "react";
import { Equipo } from "./models/Equipo";
import { EquipoService } from "./services/equipo-service";
import EquipoCard from "@/equipos/components/EquipoCard";



const ProfileCard = () => {

  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(()=>{
    const fetchEquipos = async ()=>{
      const service = new EquipoService();
      const response =await service.getEquipos();
      if(response.success){
        setEquipos(response.equipos!);
        setLoading(false);
      }

    }
    fetchEquipos();
  }, [])


  if(loading) return <div>No cargo maquina</div> // HACER LA CARGA
  return (
    <>
    <h2>Equipos</h2>
<ul className="flex flex-wrap gap-4 justify-center items-center">
  {equipos.map((equipo, index) => (
    <li className="p-4 flex-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4" key={index}>
      <EquipoCard nombre={equipo.nombre} escudo={equipo.escudo} color={equipo.color}></EquipoCard>
    </li>
  ))}
</ul>

    </>
  );
};



export default ProfileCard;