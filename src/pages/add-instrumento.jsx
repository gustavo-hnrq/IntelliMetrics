import Menu from "@/components/layout/menu";
import { TabelaFlex } from "@/components/tables/table-flex";
// ALTERAR O DATABASE
import clientes from "@/components/tables/data";
import ModalInstrumento from "@/components/modals/instrumento";

// ALTERAR PARA AS COLUNAS NECESSARIAS PARA TELA DE INSTRUMENTOS
const columns = [
  { key: "name", label: "Nome" },
  { key: "email", label: "Email" },
  { key: "cargo", label: "Cargo" },
];

export default function TelaInstrumentos() {
  return (
    <div>
      <Menu />
      <div className="h-max	 bg-backgroundcinza pt-10">
        <TabelaFlex
          nome={"Adicionar Instrumentos"}
          data={clientes}
          columns={columns}
          button={<ModalInstrumento />}
        />
      </div>
    </div>
  );
}
