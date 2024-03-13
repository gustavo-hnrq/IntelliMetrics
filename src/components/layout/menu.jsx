import logo from "../../assets/logo.svg";
import SideBarMobile from "./sidebarmenu";


export default function Menu() {
  return (
    <div className="bg-white text-azul">
      {/* INICIO HEADER */}
      <nav className="fixed top-0 z-50 w-full bg-white border-gray-200">
        <div className="flex justify-between items-center p-3 px-6 border-b border-slate-200">
          
          {/* SIDEBAR MENU QUE APARECE EM TELAS MENOR DO QUE 640PX */}
          <div className="hidden max-sm:block items-center">
            <SideBarMobile />
          </div>
          {/* FIM */}
          
          <img className="w-8 h-8" src={logo} alt="logo" />
          <img
            className="rounded-full w-10 h-10"
            src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-03.jpg"
            alt="profile-icon"
          />
        </div>
      </nav>
      {/* FIM HEADER */}

      {/* INICIO MENU LATERAL */}
      <aside className="fixed left-0 top-16 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white border-r border-slate-200">
        <div className="h-full px-4 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-200 hover:text-blue-600 group"
              >
                <span className="ms-3">Início</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Certificados
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Relatórios
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Instrumentos
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Peças</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Ordens de Serviço
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Clientes</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* FIM MENU LATERAL */}
    </div>
  );
}
