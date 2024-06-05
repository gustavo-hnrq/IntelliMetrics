import './globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import statement
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// COMPONENTES
import LoginPage from "./pages/login";
import ForgotPage from "./pages/forgot-password";
import AddRelatorio from "./pages/add-relatorio";
import TelaRelatorios from "./pages/Tela-relatorios";
import TelaOrdenseRecebidos from "./pages/Tela-ordemerecebido";
import AddCertificadoPaqui from "./pages/add-certificado_paqui";
import AddCertificadoMicro from "./pages/add-certificado_micro";
import AddRecebimento from './pages/add-recebimento';
import TelaGestor from "./pages/gestor";  
import { App } from './App.jsx';
import TelaInstrumentos from './pages/Tela-instrumento';
import TelaPecas from './pages/Tela-pecas';
import ModalCategoria from './components/modals/categoria';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/forgot",
        element: <ForgotPage />
      },
      {
        path: "/gestor",
        element: <TelaGestor />
      },
      {
        path: "/instrumentos",
        element: <TelaInstrumentos />
      },
      {
        path: "/pecas",
        element: <TelaPecas />
      },
      {
        path: "/relatorios",
        element: <TelaRelatorios />
      },
      {
        path: "/ordenserecebidos",
        element: <TelaOrdenseRecebidos />
      },
      {
        path: "/paquimetro",
        element: <AddCertificadoPaqui />
      },
      {
        path: "/micrometro",
        element: <AddCertificadoMicro />
      },
      {
        path: "/recebimento",
        element: <AddRecebimento/>
      },
      {
        path: "/relatorioadd",
        element: <AddRelatorio/>
      },
      {
        path: "/categoriaadd",
        element: <ModalCategoria/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
