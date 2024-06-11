import logo1 from "@/assets/logo1.svg";
import SideBarMobile from "@/components/layout/sidebar-mobile";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <SideBarMobile />
      {/* INICIO MENU LATERAL */}
      <div className="fixed top-0 left-0 bottom-0 w-80 text-azul transition-transform -translate-x-full md:translate-x-0 bg-white border-r-2 border-slate-200">
        <div className="p-4">
          <ul className="space-y-2 font-medium">
            <div className="m-5">
              <Link to="/gestor">
                <img src={logo1} alt="logo" />
              </Link>
            </div>
            <li>
              <Link to="/gestor"
                className="flex items-center p-2 transition-all	ease-in	text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="ms-3">Início</span>
              </Link>
            </li>
            <li>
              <Link
                to="/relatorios"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Relatórios
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/instrumentos"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Instrumentos
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/pecas"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Peças</span>
              </Link>
            </li>
            <li>
              <Link
                to="/ordenserecebidos"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Ordens e Recebidos
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/paquimetro"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Certificado Paquímetro
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/micrometro"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Certificado Micrômetro
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center p-2 rounded-lg m-5 fixed bottom-0 space-x-2">
          <img
            className="rounded-full w-12 h-12"
            src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-03.jpg"
            alt="profile-icon"
          />
          <div className="flex flex-col">
            <p className="font-bold">Ronaldo Freitas</p>
            <p className="text-sm	">ronaldofreitas@gmail.com</p>
          </div>
        </div>
      </div>
      {/* FIM MENU LATERAL */}
    </div>
  );
}
