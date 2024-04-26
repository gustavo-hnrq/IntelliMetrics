import Menu from "@/components/layout/menu";
import { Tabs , TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResulMicrometro from "@/components/certificados/micrometro/resultadoMicrometro";
import IncertMicrometro from "@/components/certificados/micrometro/incertezaMicrometro";
import CertMicrometro from "@/components/certificados/micrometro/certificadoMicrometro";


export default function AddCertificadoMicro() {

  return (
    <div className="flex">
      <Menu />

      <div className="flex flex-col ml-80 pl-10 bg-backgroundcinza pt-20 items-center  w-screen gap-5 ">


        <Tabs defaultValue="Calc" >
             
        <div className="flex flex-row justify-between w-[90%] px-20">
            <TabsList>
                <TabsTrigger  value="Calc">Resultado</TabsTrigger>
                <TabsTrigger  value="Incert">Incerteza</TabsTrigger>
                <TabsTrigger  value="Certif">Certificado</TabsTrigger>
            </TabsList>
            
            <span className="text-primary font-bold text-xl">n° rem...</span>
        </div>
 
          <TabsContent  value="Calc">
            <ResulMicrometro/>
          </TabsContent>
          <TabsContent  value="Incert">
            <IncertMicrometro/>
          </TabsContent>
          <TabsContent value="Certif">
            <CertMicrometro/>
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
}
