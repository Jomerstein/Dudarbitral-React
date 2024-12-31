import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";

import { LoginUser } from "../AuthModels";
import { AuthService } from "../AuthService";
import { z } from "zod";
import { useAuth } from "../AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";



const Login = () =>{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const {login} = useAuth();
      
     const formSchema = z.object({
      email: z.string().email("No es un mail válido"),
      contraseña: z.string().min(2).max(50),
    });

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        contraseña: "",
      }
    })


    const handleSubmit =async (values: z.infer<typeof formSchema>)=>{  
        
        const user: LoginUser ={
            email: values.email,
            password: values.contraseña
        };
        const response = await login(user);
        if(response){
        const hola= localStorage.getItem("jwt")?.toString()
        console.log(hola)
         
        }else{
          console.log("tumama")
        }
    }
    

    return(
     <>
     <div className="p-12">
     <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>
          Login
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField control={form.control} name="email" render={({field})=>(
            <FormItem className="p-2">
              <FormLabel>Ingrese su email </FormLabel>
              <FormControl>
                <Input placeholder="chiquitapia@gmail.com" {...field}/>
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}>

          </FormField>
          <FormField control={form.control} name="contraseña" render={({field})=>(
            <FormItem className="p-2">
              <FormLabel>Ingrese su contraseña </FormLabel>
              <FormControl>
                <Input placeholder="**********" type="password"  {...field}/>
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}>

          </FormField>
          <Button type="submit">Ingresar</Button>
          </form>
          
        </Form>
        
      </CardContent>
     </Card>
     </div>
     </>
  
    );
};

export default Login