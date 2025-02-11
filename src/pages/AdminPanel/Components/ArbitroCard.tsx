import {  useForm } from "react-hook-form";
import { postArbitro } from "../../../Arbitro";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthService } from "@/pages/auth/AuthService";
import { AdminService } from "../AdminService";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre es muy corto").max(50, "El nombre es muy largo"),
  apellido: z.string().min(2, "El apellido es my corto").max(50),
  foto: z.string().min(2).max(50),
});
const AribitroCard = ()=>{
    const form = useForm<postArbitro>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            nombre: "",
            apellido: "",
            foto: "",
        }
    })

    const onSubmit = async (arbitro: postArbitro) => {
        const token = await AuthService.getAccessToken();
        if(!token){
            console.log("token no disponible")
        }else{
            const service = new AdminService(token!);
            service.postArbitro(arbitro);


        }

    }

    return(
        <>
           <div className="p-4 ">
        <Card className="w-[380px] border-2 border-blue-200">
          <CardHeader>
            <CardTitle>Equipo</CardTitle>
            <CardDescription>Ingresa un Arbitro</CardDescription>
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
                <Input placeholder="Darío" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
            <FormField
          control={form.control}
          name="apellido"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input placeholder="Herrera" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
              <FormField
          control={form.control}
          name="foto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Foto</FormLabel>
              <FormControl>
                <Input placeholder="Chiquitapiaboton" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
   
          </CardContent>
          
        </Card>
      
      </div>
        </>
    )
}
export default AribitroCard;