import Menu from "@/components/layout/menu";
import { TabelaFlex } from "@/components/tables/table-flex";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ModalRecebimento from "@/components/modals/recebimento";
import ModalOrdem from "@/components/modals/ordem";

// ALTERAR O DATABASE
import clientes from "@/components/tables/data";

// ALTERAR PARA AS COLUNAS NECESSARIAS PARA TELA DE INSTRUMENTOS
const columns = [
  { key: "name", label: "Nome" },
  { key: "email", label: "Email" },
  { key: "cargo", label: "Cargo" },
  { key: "status", label: "Status"}
];

export default function TelaOrdenseRecebidos() {
  return (
    <div>
      <Menu />
      <div className=" h-full bg-backgroundcinza pt-10">
        <Tabs defaultValue="Ordem">
            <TabsList className="ml-80 pl-10" >
                <TabsTrigger  value="Ordem">Ordens de Serviço</TabsTrigger>
                <TabsTrigger  value="Recebido">Itens Recebidos</TabsTrigger>
            </TabsList>

            <TabsContent  value="Ordem">
                <TabelaFlex
                nome={"Ordem de Serviço"}
                data={clientes}
                columns={columns}
                button={<ModalOrdem/>}
                />          
            </TabsContent>
            <TabsContent  value="Recebido">
                <TabelaFlex
                nome={"Itens Recebidos"}
                data={clientes}
                columns={columns}
                button={<ModalRecebimento/>}
                />         
            </TabsContent>
        </Tabs>
        
      </div>
    </div>
  );
}