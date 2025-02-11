import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import claudo from "../public/assets/Dudarbitralarda.png"
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const noneSideBarRoutes: string[] = [
    '/login'
  ]
  
  const items = [
    {
      nombre: "Tabla anual",
      path: "/adminPanel",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-trophy"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 21l8 0" />
          <path d="M12 17l0 4" />
          <path d="M7 4l10 0" />
          <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
          <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        </svg>
      ),
    },
    {
      nombre: "Historial equipos",
      path: "",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-shield"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
        </svg>
      ),
    },
    {
      nombre: "Dudas destacadas",
      path: "",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-question-mark"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
          <path d="M12 19l0 .01" />
        </svg>
      ),
    },
    {
      nombre: "Árbitros",
      path: "",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 471 511.77"
          className="w-5 h-5"
        >
          <path
            d="M235.51 433.34c5 0 9.05 4.05 9.05 9.05 0 5-4.05 9.05-9.05 9.05-5 0-9.05-4.05-9.05-9.05 0-5 4.05-9.05 9.05-9.05zm92.93-249.19-4.69-33.93c-31.46-13.57-61.81-19.16-91.19-18.53-29.22.62-57.61 7.42-85.27 18.62l-4.7 33.78c24.62-13.39 58.71-20.11 92.75-20.11 34.01 0 68.21 6.71 93.1 20.17zm-92.93-123.5c12.47 0 22.58 10.12 22.58 22.59s-10.11 22.59-22.58 22.59c-12.48 0-22.59-10.12-22.59-22.59s10.11-22.59 22.59-22.59zM237.99 0c7.09 0 12.89 5.8 12.89 12.89v4.36c21.53 3.12 41.04 13.08 55.86 27.59 17.54 17.2 28.53 40.79 28.53 67.02l-.87 33.79 8.48 61.43-3.17-2.23c-.79 3.41-1.8 6.58-2.82 9.17l-.03.11c-2.05 5.23-4.79 9.99-7.98 13.5-2.67 2.85-5.67 4.9-8.92 5.7-.63 2.01-1.32 4.1-1.83 6.15-3.62 12.21-6.47 21.83-14.01 31.38-1.64 2.08-3.4 4.09-5.26 5.99-1.29 1.36-2.6 2.64-3.96 3.85.18 1.88.2 15.61.18 23.83 7.51 1.31 13.54 2.28 19.52 3.25 62.65 10.09 122.09 19.67 137.97 98.13l18.34 99.26a5.583 5.583 0 0 1-5.49 6.58l-114.17.01-.39.01-.4-.01-230.65.01H5.6c-3.09 0-5.6-2.51-5.6-5.6 0-.46.06-.9.16-1.32l13.58-82.79c18.25-92.87 65.89-102.15 136.01-115.8 8.1-1.58 16.5-3.22 24.79-4.96.49-.11.98-.14 1.46-.11v-20.38l.05-2.73c-6.95-6.28-12.65-14.63-16.47-23.13-2.67-5.93-4.79-12.33-7.25-19.57l-1.27-3.77c-2.79-.36-5.38-1.65-7.72-3.55-2.93-2.41-5.45-5.92-7.5-9.98-1.6-3.15-3.34-7.91-4.54-13.17l-3.19 2.28 8.52-61.38-1.9-29.83a87.52 87.52 0 0 1-.19-5.64c0-25.31 10.9-48.04 28.14-64.83 16.37-15.94 38.49-26.52 62.41-28.83v-3.79C225.09 5.8 230.9 0 237.99 0zm55.48 315.6c-4.4 13.43-15.09 22.77-28.38 28.13-8.93 3.59-19.07 5.36-29.18 5.32-10.12-.04-20.25-1.89-29.16-5.5-14.49-5.89-25.9-16.4-29.41-31.46-.17.06-.34.1-.52.14-6.65 1.4-12.91 2.65-18.94 3.83.37 24.37 3.27 43.16 14.03 60.26 8.86 14.07 23.14 27.32 45.79 41.95 5.02-3.59 11.17-5.7 17.81-5.7 6.14 0 11.87 1.82 16.68 4.96 16.59-11.04 29.22-22.22 38.57-35.16 12.09-16.74 18.9-36.73 21.93-63.6-6.85-1.11-13.74-2.21-19.22-3.17zm29.96-177.31.64-24.25v-2.18c0-23.1-9.69-43.89-25.16-59.06-15.54-15.22-36.88-24.8-60.12-25.4l-3.82-.01c-2.06 0-4.02.06-5.84.18-22.49 1.43-43.39 11.07-58.66 25.95-15.16 14.75-24.74 34.68-24.74 56.82 0 1.75.05 3.39.15 4.94l1.49 23.28c27.49-10.67 55.76-17.11 84.98-17.73 29.44-.63 59.76 4.65 91.08 17.46zm-182.76 59.98c1.21 5.72 3.53 11.66 5.08 14.8 1.39 2.74 2.96 5.01 4.61 6.36 3 2.38 3.99-.29 7.2 1.43 2.75 1.5 3.37 5.19 4.32 7.94l1.13 3.36c2.2 6.58 4.21 12.44 6.55 17.74 4.87 10.86 11.38 18.62 20.78 25.79 28.09 21.33 65.27 22.24 93.19.07 4.36-3.44 8.34-7.35 11.85-11.82 3.08-3.83 5.27-7.93 7.06-12.43 1.86-4.61 3.37-9.58 5.01-15.18.95-3.21 1.91-6.44 2.93-9.66 1.57-6.1 6.33-2.01 10.46-6.54 2.08-2.38 4.06-6.04 5.66-10.13.63-1.69 1.08-3.45 1.59-5.21 5.22-6.57 6.83-14.56 12.33-22.21 17.11zm112.95 177.35c9.87 10.92 13.46 26.76 8.02 40.72-3.99 8.17-11.61 13.52-20.06 14.94-17.15 2.37-35.75-8.07-52.69-15.79-11.13-4.54-25.02-6.43-37.56-3.12 10.96 2.91 22.98 3.65 34.89 7.99 3.24 1.53 5.75 3.79 7.76 6.67 4.75 9.14 9.98 18.56 18.73 26.31 7.92 7.81 17.77 12.58 28.19 12.58 8.03 0 15.56-2.48 22.65-6.95 6.46-3.87 11.44-8.83 16.67-14.51 13.73-14.96 19.03-39.56 4.28-59.88l-19.1-20.86 15.98-1.6 3.99-22.18z"
            fill="#222"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      nombre: "Reglamento AFA",
      path: "https://www.ligaprofesional.ar/wp-content/uploads/2025/01/Reglamento-Torneos-LPF-2025.pdf?download=1",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-question-mark"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
          <path d="M12 19l0 .01" />
        </svg>
      ),
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  if(noneSideBarRoutes.includes(location.pathname)){
    return null;
  }

  return (
    <>
      <button
        className="fixed top-4 left-4 z-20 md:hidden bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-gray-100 text-white p-5 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 overflow-y-auto shadow-lg`}
      >



        <nav>
      
  <img src={claudo} className="mt-0" alt="Logo" />
          <ul className="space-y-2 mt-8">
            {items.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="block" 
  target={item.nombre === "Reglamento AFA" ? "_blank" : undefined}>
                  <button className="flex w-full items-center  text-black py-3 px-4 rounded-md text-left hover:bg-gray-200 transition-colors duration-300 group">
                    
                    <div className="mr-3 text-blue-400 group-hover:text-yellow-500 transition-colors duration-300">
                      {item.icono}
                    
                    </div>
                    
                    <span className="font-medium">{item.nombre}</span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  ) 
};

export default Sidebar;
