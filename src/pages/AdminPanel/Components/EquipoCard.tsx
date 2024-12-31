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
import { Equipo } from "../Models/Equipo";

import { Form,FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";


const formSchema = z.object({
  nombre: z.string().min(2, "El nombre es muy corto").max(50, "El nombre es muy largo"),
  escudo: z.string().min(2).max(50),
});
const EquipoCard = () => {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      escudo: "",
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) =>{
    
      // const e: Equipo = {
      //   nombre: values.nombre,
      //   escudo: values.escudo,
      // }
      // if(localStorage.getItem("jwt") === null){
      //   return
      // }else{
        
      // await AdminService.postEquipo(e, localStorage.getItem("jwt")!);
      console.log(values);
      //}
  }





  return (
    <>
      <div className="p-4">
        <Card className="w-[380px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
            <FormField
          control={form.control}
          name="escudo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>escudo</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
               Escudooo
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default EquipoCard;
