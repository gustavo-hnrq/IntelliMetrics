import './globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import statement
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// COMPONENTES
import LoginPage from "./pages/login";
import ForgotPage from "./pages/forgot-password";
import AddCertificadoPaqui from "./pages/add-certificado_paqui";
import AddCertificadoMicro from "./pages/add-certificado_micro";
import TelaGestor from "./pages/gestor";  
import { App } from './App.jsx';
import TelaInstrumentos from './pages/Tela-instrumento';
import TelaOrdens from './pages/tela-ordens';
import TelaRecebidos from './pages/tela-recebido';

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
        path: "/ordens", 
        element: <TelaOrdens />
      },
      {
        path: "/instrumentos",
        element: <TelaInstrumentos />
      },
      {
        path: "/recebidos",
        element: <TelaRecebidos />
      },
      {
        path: "/paquimetro",
        element: <AddCertificadoPaqui />
      },
      {
        path: "/micrometro",
        element: <AddCertificadoMicro />
      },
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
