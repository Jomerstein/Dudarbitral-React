import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {

  return (
    <nav className="w-full bg-gray-200 dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-200 font-semibold text-lg hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            Dudarbitral
          </Link>
          <div className="flex items-center space-x-4 justify-center flex-grow">
            <Link
              to="/adminPanel"
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
            >
              Ranking dudoso
            </Link>
            <Link
              to="/contacto"
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
            >
              Ranking gracioso
            </Link>
          </div>
          <Button
            variant="outline"
          >
            <Link to="/login">Iniciar sesión</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
