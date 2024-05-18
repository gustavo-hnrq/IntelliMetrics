import Menu from "@/components/layout/menu";
import { CardGestor } from "@/components/cards/cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabelaFlex } from "@/components/tables/table-flex";

import proposta from "@/assets/proposta.svg"
import relatorio from "@/assets/relatorios.svg"
import certificado from "@/assets/certificados.svg"

import TabelaMembros from "@/components/tables/table-membros";
import TabelaClientes from "@/components/tables/table-cliente";

export default function TelaGestor() {
  return (
    <div>
      <Menu />
      <div className="max-md:ml-0 p-10 bg-backgroundcinza">
        <div className="ml-80 px-10">
          <h1 className="text-3xl font-bold mb-4">Seja bem-vindo</h1>

        </div>
        <div>
          <Tabs defaultValue="tabela-membro">
            <TabsList className="ml-80 pl-10">
              <TabsTrigger value="tabela-membro">Membros</TabsTrigger>
              <TabsTrigger value="tabela-clientes">Clientes</TabsTrigger>
            </TabsList>

            {/* TABELA DE MEMBRO */}
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
