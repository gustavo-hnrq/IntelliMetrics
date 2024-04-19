import Menu from "./components/layout/menu";
import ModalCliente from "./components/modals/cliente";
import ModalMembro from "./components/modals/membro";
import ModalPeca from "./components/modals/peca";
import ModalInstrumento from "./components/modals/instrumento";
import ModalOrdemRelatorio from "./components/modals/ordem-relatorio"
import ModalOrdemCertificado from "./components/modals/ordem-certificado";
import LoginPage from "./pages/login";
import ForgotPage from "./pages/forgot-password";
import { CardGestor } from "./components/cards/cards";
import SideBarMobile from "./components/layout/sidebar-mobile";
import AddRelatorio from "./pages/add-relatorio";
import TelaInstrumento from "@/pages/add-instrumento"
import TelaGestor from "@/pages/gestor";

export function App() {
  return (
    <div>
      <TelaGestor />
    </div>
  )
}