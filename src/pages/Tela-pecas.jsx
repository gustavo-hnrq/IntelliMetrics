import Menu from "@/components/layout/menu";
import TabelaPecas from "@/components/tables/table-pecas";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TelaInstrumentos() {
  const navigate = useNavigate();
  function validateToken() {
    const token = Cookies.get("token");
    if (!token) navigate("/");
  }
  
  useEffect(() => {
    validateToken();
  }, []);

  return (
    <div>
      <Menu />
      <div className="h-screen bg-backgroundcinza pt-10">
        <TabelaPecas />
      </div>
    </div>
  );
}