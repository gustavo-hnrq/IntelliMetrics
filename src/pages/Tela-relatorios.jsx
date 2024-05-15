import Menu from "@/components/layout/menu";
import { TabelaFlex } from "@/components/tables/table-flex";
// ALTERAR O DATABASE
import clientes from "@/components/tables/data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// ALTERAR PARA AS COLUNAS NECESSARIAS PARA TELA DE INSTRUMENTOS
const columns = [
  { key: "name", label: "Nome" },
  { key: "email", label: "Email" },
  { key: "cargo", label: "Cargo" },
  { key: "status", label: "Status"}
];

export default function TelaRelatorios() {
  return (
    <div>
      <Menu />
      <div className=" h-full bg-backgroundcinza pt-10">
        <TabelaFlex
          nome={"Adicionar Relatorios"}
          data={clientes}
          columns={columns}
          button={<Link to="/relatorioadd"><Button>Adicionar Relatório</Button></Link>}
        />
      </div>
    </div>
  );
}
