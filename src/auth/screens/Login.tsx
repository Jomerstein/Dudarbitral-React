import { Button } from "@/components/ui/button";
import { useState } from "react";

import { LoginUser } from "../AuthModels";
import { AuthService } from "../AuthService";



const Login = () =>{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [maquinola, setMaquinola] = useState<boolean>(false);

    const handleSubmit =async (e: React.FormEvent)=>{
        e.preventDefault();
        const user: LoginUser ={
            email,
            password
        };
        const response = await AuthService.login(user)
        if(response.success){
            setMaquinola(true);
            console.log(response.jwt)
        }else{
            console.log("Que tristeza loco")
        }
    }
    

    return(
     <>
        {maquinola?(
            <p>Estas logueado papu</p>
        ) : (
            <p>no estas logeado SAJ</p>
        )

        }
        
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
     </>
  
    );
};

export default Login