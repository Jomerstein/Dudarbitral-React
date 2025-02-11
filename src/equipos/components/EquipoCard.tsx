import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { useEffect } from "react";
interface EquipoCardProps {
  nombre: string;
  escudo: string;
  color: string;
}

export const EquipoCard = ({ nombre, escudo, color }: EquipoCardProps) => {
  const path = nombre.split(' ').join('');
  
  const colorStyles = {
    white: 'hover:bg-gray-50 border-gray-200',
    black: 'hover:bg-gray-100 border-gray-200',
    red: 'hover:bg-red-50 border-red-200',
    green: 'hover:bg-green-50 border-green-200',
    blue: 'hover:bg-blue-50 border-blue-200',
    yellow: 'hover:bg-yellow-50 border-yellow-200',
    brown: 'hover:bg-yellow-800/10 border-yellow-900',
  }[color] || 'hover:bg-gray-50 border-gray-200';

  return (
    <Link to={`/equipos/${path}`} className="block transform transition-all duration-200 hover:scale-105">
      <div className={`bg-white rounded-xl shadow-sm border ${colorStyles} p-6 h-full transition-all duration-200`}>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 flex items-center justify-center">
            <img 
              src={escudo} 
              alt={`Escudo de ${nombre}`} 
              className="max-w-full max-h-full object-contain"
            
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            {nombre}
          </h3>
        </div>
      </div>
    </Link>
  );
};
export default EquipoCard;


