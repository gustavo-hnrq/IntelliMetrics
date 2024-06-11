import Menu from "@/components/layout/menu";
import { Tabs , TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResulPaquimetro from "@/components/certificados/paquimetro/resultadoPaquimetro";
import IncertPaquimetro from "@/components/certificados/paquimetro/incertezaPaquimetro";
import CertPaquimetro from "@/components/certificados/paquimetro/certificadoPaquimetro";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function AddCertificadoPaqui() {
  const navigate = useNavigate();
  function validateToken() {
    const token = Cookies.get("token");
    if (!token) navigate("/");
  }
  
  useEffect(() => {
    validateToken();
  }, []);


  return (
    <div className="flex">
      <Menu />

      <div className="flex flex-col ml-80 pl-10 h-full bg-backgroundcinza pt-20 items-center  w-screen gap-5 ">

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
