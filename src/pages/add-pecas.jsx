import Menu from "@/components/layout/menu";
import { TabelaFlex } from "@/components/tables/table-flex";
// ALTERAR O DATABASE
import clientes from "@/components/tables/data";
import ModalPeca from "@/components/modals/peca";

// ALTERAR PARA AS COLUNAS NECESSARIAS PARA TELA DE INSTRUMENTOS
const columns = [
  { key: "name", label: "Nome" },
  { key: "email", label: "Email" },
  { key: "cargo", label: "Cargo" },
];

export default function TelaPecas() {
  return (
    <div>
      <Menu />
      <div className="h-screen bg-backgroundcinza pt-10">
        <TabelaFlex
          nome={"Adicionar Peça"}
          data={clientes}
          columns={columns}
          button={<ModalPeca />}
        />
      </div>
    </div>
  );
}
