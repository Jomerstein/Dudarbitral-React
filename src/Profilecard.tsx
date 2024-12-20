

const ProfileCard = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full relative overflow-hidden">
            {/* Fondo con el efecto de curva */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-2xl"></div>
    
            {/* Imagen de perfil */}
            <div className="relative z-10 flex justify-center -mt-20">
              <img
                src="https://source.unsplash.com/160x160/?portrait"
                alt="Perfil"
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
    
            {/* Información del perfil */}
            <div className="text-center mt-6">
              <h2 className="text-3xl font-semibold text-gray-900">Juan Pérez</h2>
              <p className="text-lg text-gray-600 mt-2">Desarrollador Fullstack | Creativo | Apasionado por la tecnología</p>
    
              {/* Redes sociales */}
              <div className="mt-4 flex justify-center gap-4">
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
    
              {/* Descripción */}
              <p className="text-gray-700 mt-6">
                Me encanta construir soluciones que mejoren la experiencia de los usuarios. Siempre en busca de nuevos retos y herramientas que me permitan crecer.
              </p>
            </div>
    
            {/* Botones de acción */}
            <div className="mt-8 flex justify-center gap-6">
            <button className="px-8 py-4 text-lg bg-blue-500 text-white rounded-full shadow-lg hover:bg-black-300 transition-colors">
  Conectar
</button>
<button className="px-8 py-4 text-lg bg-gray-200 text-gray-800 rounded-full shadow-lg hover:bg-gray-300 transition-colors">
  Mensaje
</button>
            </div>
          </div>
        </div>
      );
    };

export default ProfileCard;