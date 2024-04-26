import Menu from "@/components/layout/menu";
import { TabelaFlex } from "@/components/tables/table-flex";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


// ALTERAR O DATABASE
import clientes from "@/components/tables/data";

// ALTERAR PARA AS COLUNAS NECESSARIAS PARA TELA DE INSTRUMENTOS
const columns = [
  { key: "name", label: "Nome" },
  { key: "email", label: "Email" },
  { key: "cargo", label: "Cargo" },
  { key: "status", label: "Status"}
];

export default function TelaCertificados() {
  return (
    <div>
      <Menu />
      <div className=" h-full bg-backgroundcinza pt-10">
        <Tabs defaultValue="Paqui">
            <TabsList className="ml-80 pl-10" >
                <TabsTrigger  value="Paqui">Paquímetro</TabsTrigger>
                <TabsTrigger  value="Micro">Micrômetro</TabsTrigger>
            </TabsList>

            <TabsContent  value="Paqui">
                <TabelaFlex
                nome={"Adicionar Certificado"}
                data={clientes}
                columns={columns}
                />          
            </TabsContent>
            <TabsContent  value="Micro">
                <TabelaFlex
                nome={"Adicionar Certificado"}
                data={clientes}
                columns={columns}
                />         
            </TabsContent>
        </Tabs>
        
      </div>
    </div>
  );
}