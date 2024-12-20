import { Button } from "@/components/ui/button";
import { useState } from "react";



const Login = () =>{
    const [email, setEmail] = useState<string>("");
    
    const handleSubmit = ()=>{
       const emailll = "hola"; 
        setEmail(emailll);
        console.log(emailll)
    }

    return(
            <>
            <div className="flex justify-center items-center">
            <Button onClick={handleSubmit}>Clickea maquina</Button>
            </div>
            </>
  
    );
};

export default Login