import Menu from "@/components/layout/menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardGestor } from "@/components/cards/cards";

import TabelaMembros from "@/components/tables/table-membros";
import TabelaClientes from "@/components/tables/table-cliente";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function TelaGestor() {
  function validateToken() {
    const token = Cookies.get("token");
    if (!token) navigate("/");
  }
  const navigate = useNavigate();
  useEffect(() => {
    validateToken();
  }, []);

  return (
    <div>
      <Menu />
      <div className="max-md:ml-0 pt-10 bg-backgroundcinza">
        <div className="ml-80 max-md:ml-0 px-10 max-md:pt-10">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <div className="flex gap-2">
            <CardGestor />
          </div>
        </div>
        <div className="py-3">
          <Tabs defaultValue="tabela-membro">
            <TabsList className="ml-80 max-md:ml-0 pl-10">
              <TabsTrigger value="tabela-membro">Membros</TabsTrigger>
              <TabsTrigger value="tabela-clientes">Clientes</TabsTrigger>
            </TabsList>

            <TabsContent value="tabela-membro">
              <TabelaMembros />
            </TabsContent>

            <TabsContent value="tabela-clientes">
              <TabelaClientes />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
