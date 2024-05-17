import Menu from "@/components/layout/menu";
import { TabelaFlex } from "@/components/tables/table-flex";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TabelaOrdens from "@/components/tables/table-ordem";


export default function TelaOrdenseRecebidos() {
  return (
    <div>
      <Menu />
      <div className=" h-full bg-backgroundcinza pt-10">
        <Tabs defaultValue="Ordem">
          <TabsList className="ml-80 pl-10">
            <TabsTrigger value="Ordem">Ordens de Serviço</TabsTrigger>
            <TabsTrigger value="Recebido">Itens Recebidos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="Ordem">
            <TabelaOrdens />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
