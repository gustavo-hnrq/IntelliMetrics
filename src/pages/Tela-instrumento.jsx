import Menu from "@/components/layout/menu";
import TabelaInstrumentos from "@/components/tables/table-instrumentos";

export default function TelaInstrumentos() {
  return (
    <div>
      <Menu />
      <div className="h-screen bg-backgroundcinza pt-10">
        <TabelaInstrumentos />
      </div>
    </div>
  );
}

