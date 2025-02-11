
import Navbar from "./Navbar";

import Sidebar from "./Sidebar";

const Layout = ({children}:{children:React.ReactNode}) =>{


    return (
        <div className="flex h-screen">
          {/* Sidebar */}
   <Sidebar></Sidebar>
    
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Navbar */}
           <Navbar></Navbar>
    
            {/* Content */}
            <main className="flex-1 bg-gray-100 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      );
    };
    

export default Layout;