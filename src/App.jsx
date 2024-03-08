import Menu from "./components/layout/menu";
import ModalCliente from "./components/modals/cliente";
import ModalMembro from "./components/modals/membro";
import ModalPeca from "./components/modals/peca";
import ModalInstrumento from "./components/modals/instrumento";
import ModalOrdemRelatorio from "./components/modals/ordem-relatorio"
import ModalOrdemCertificado from "./components/modals/ordem-certificado";
import LoginPage from "./components/layout/login";
import ForgetPage from "./components/layout/forget-senha";

export function App() {
  return (
    <div>
      <ForgetPage />
    </div>
  )
}