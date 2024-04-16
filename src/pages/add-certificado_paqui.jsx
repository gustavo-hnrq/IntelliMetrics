import Menu from "@/components/layout/menu";
import { Tabs , TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResulPaquimetro from "@/components/paquimetro/resultadoPaquimetro";
import IncertPaquimetro from "@/components/paquimetro/incertezaPaquimetro";
import CertPaquimetro from "@/components/paquimetro/certificadoPaquimetro";

export default function AddCertificadoPaqui() {

  return (
    <div className="flex">
      <Menu />

      <div className="flex flex-col bg-[#E5F1FF] pt-20 items-center  w-screen gap-5 ">


        <Tabs defaultValue="Calc" >
             
        <div className="flex flex-row justify-between px-20 ">
            <TabsList>
                <TabsTrigger  value="Calc">Resultado</TabsTrigger>
                <TabsTrigger  value="Incert">Incerteza</TabsTrigger>
                <TabsTrigger  value="Certif">Certificado</TabsTrigger>
            </TabsList>
            
            <span className="text-primary font-bold text-xl">n° rem...</span>
        </div>
 
          <TabsContent value="Calc">
            <ResulPaquimetro/>
          </TabsContent>
          <TabsContent  value="Incert">
            <IncertPaquimetro/>
          </TabsContent>
          <TabsContent value="Certif">
            <CertPaquimetro/>
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
}
