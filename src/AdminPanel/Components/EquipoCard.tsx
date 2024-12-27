import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EquipoCard = () => {
  return (
    <>
      <div className="p-4">
        <Card className="w-[380px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">

           
            <Label className="border-b-2 border-green-500">Hola</Label>
           <Input className="">
           </Input>
           </div>
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
