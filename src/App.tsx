import { Button } from "./components/ui/button"
import Navbar from "./components/Navbar"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./auth/Login"
import { Home } from "lucide-react"



function App() {


  return (
    <> 

      
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
          
        
      </Routes>
      </BrowserRouter>



     
    </>
  )
}

export default App
