import { Button } from "@/components/ui/button"
import type { LoginUser } from "../AuthModels"
import { z } from "zod"
import { useAuth } from "../AuthContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState<string | null>(null)

  const formSchema = z.object({
    email: z.string().email("No es un mail válido"),
    contraseña: z.string().min(2).max(50),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      contraseña: "",
    },
  })

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const user: LoginUser = {
      email: values.email,
      password: values.contraseña,
    }
    try {
      const response = await login(user)
      if (response) {
        navigate("/")
      } else {
        setLoginError("Credenciales inválidas")
      }
    } catch (e) {
      console.log(e)
      setLoginError("Error al iniciar sesión")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800">Iniciar Sesión</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="tu@email.com"
                        {...field}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contraseña"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              {loginError && (
                <div className="text-red-500 text-sm text-center bg-red-100 p-2 rounded">{loginError}</div>
              )}
              <Button
                type="submit"
                className="w-full bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Ingresar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login

