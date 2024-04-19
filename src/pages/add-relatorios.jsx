import Menu from "@/components/layout/menu";
import { TabelaFlex } from "@/components/tables/table-flex";
// ALTERAR O DATABASE
import clientes from "@/components/tables/data";

// ALTERAR PARA AS COLUNAS NECESSARIAS PARA TELA DE INSTRUMENTOS
const columns = [
  { key: "name", label: "Nome" },
  { key: "email", label: "Email" },
  { key: "cargo", label: "Cargo" },
];

export default function TelaRelatorios() {
  return (
    <div>
      <Menu />
      <div className="h-full h-screen bg-backgroundcinza pt-10">
        <TabelaFlex
          nome={"Adicionar Relatorios"}
          data={clientes}
          columns={columns}
        />
      </div>
    </div>
  );
}
