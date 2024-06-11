import Menu from "@/components/layout/menu";
import ModalCategoria from "@/components/modals/categoria";
import TabelaInstrumentos from "@/components/tables/table-instrumentos";
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
         <div className="float-right mr-10"><ModalCategoria/></div>
        <TabelaInstrumentos />
        
      </div>
    </div>
  );
}

