import Menu from "./components/layout/menu";
import ModalCliente from "./components/modals/cliente";
import ModalMembro from "./components/modals/membro";
import ModalPeca from "./components/modals/peca";
import ModalInstrumento from "./components/modals/instrumento";
import ModalOrdem from "./components/modals/ordem";
import LoginPage from "./pages/login";
import ForgotPage from "./pages/forgot-password";
import { CardGestor } from "./components/cards/cards";
import SideBarMobile from "./components/layout/sidebar-mobile";
import AddRelatorio from "./pages/add-relatorio";
import TelaRelatorios from "./pages/Tela-relatorios";
import TelaCertificados from "./pages/Tela-certificado";
import TelaOrdenseRecebidos from "./pages/Tela-ordemerecebido";
import AddCertificadoPaqui from "./pages/add-certificado_paqui";
import AddCertificadoMicro from "./pages/add-certificado_micro";
import TelaGestor from "./pages/gestor";

export function App() {
  return (
    <div>
      <TelaGestor />
    </div>
  )
}
