import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {z} from 'zod'
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { AdminService } from "../AdminService";
import { postEquipo } from "../../../equipos/models/Equipo";

import { Form,FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { AuthService } from "@/pages/auth/AuthService";
import { useState } from "react";


const formSchema = z.object({
  nombre: z.string().min(2, "El nombre es muy corto").max(50, "El nombre es muy largo"),
  escudo: z.string().min(2).max(300),
  color: z.string().min(2).max(50),
});
const EquipoCard = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const form = useForm<postEquipo>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      escudo: "",
      color: "",
    }
  })

  const onSubmit = async (equipo: postEquipo, ) =>{
    
 
      const token = await AuthService.getAccessToken();
      if(!token){
        
        console.log("token no disponible")
        
      }else{
      const service = new AdminService(token!);
      const suc=await service.postEquipo(equipo);
      setSuccess(suc.success);
      console.log(equipo);
      console.log(suc.success)
      }
    
        
      //}
  }





  return (
    <>
      <div className="p-4 ">
        <Card className="w-[380px] border-2 border-blue-200">
          <CardHeader>
            <CardTitle>Equipo</CardTitle>
            <CardDescription>Ingresa un equipo</CardDescription>
          </CardHeader>
          <CardContent>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del equipo</FormLabel>
              <FormControl>
                <Input placeholder="Platense" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
            <FormField
          control={form.control}
          name="escudo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Escudo</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
              <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <FormControl>
                <Input placeholder="color" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
    {
          success? <div>Seeeeeee</div>: <div>noooooo</div>
        }
          </CardContent>
          
        </Card>
      
      </div>
    </>
  );
};

export default EquipoCard;
