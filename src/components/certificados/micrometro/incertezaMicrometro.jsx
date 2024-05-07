import Menu from "@/components/layout/menu";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function IncertMicrometro() {
  return (
    <div>
      {/* ------------------ MENU ------------------ */}
      <Menu />

      {/* ------------------ DIV COM O CONTEÚDO ------------------ */}
      <div className="max-md:ml-0 bg-[#E5F1FF] ml-80 h-full flex flex-col pt-20 px-5">
        {/* ------------------ PARTE DO MENU DE CIMA ------------------ */}
        <div> menuzim brabo</div>

        {/* ------------------ FORMULÁRIO ------------------ */}
        <div className="flex flex-col justify-between w-full">
          <form className="flex flex-col w-full items-center">
            {/* ------------------ DIV PARA COLOCAR A BORDA E  OS BOTÕES FICAREM PARA FORA ------------------ */}
            <div className="w-full flex flex-col justify-between rounded-xl bg-white shadow-xl box-shadow border-primary border ">
              {/* DIV PARA A PARTE DE CIMA, COM O TITULO E OS NUMERO DE CERTIFICADO */}
              <div className="flex flex-col items-center py-5 px-4 justify-between sm:flex-row lg:flex-row xl:flex-row 2xl:flex-row md:gap-5">
                <h1 className="font-bold text-3xl">
                  Incerteza De Medição De Micrômetros
                </h1>
                <h4 className="flex flex-col rounded-md border-2 w-full border-black p-4 lg:w-[20%] xl-w-[20%] 2xl:w-[20%] text-[#5A5A5A] font-bold text-base">
                  <span className="w-full flex justify-between">
                    NR. OS: <span className="text-right">0</span>
                  </span>
                  <span className="w-full flex justify-between">
                    NR. Certif. <span className="text-right">0</span>
                  </span>
                </h4>
              </div>
              {/* ------------- COMEÇO DAS TABELAS  ------------------ */}

              {/* DADOS GERAIS DOS PADROES */}
              <h4 className="text-black font-extrabold uppercase text-base w-full py-3 px-4 bg-[#DBDBDB] mt-10">
                dados gerais dos padrões
              </h4>

              {/* ------------------ COMEÇO DA TABELA COM OS BLOCOS PADRÕES ------------------ */}
              <p className="px-10 font-semibold text-xl mt-10 mb-2">
                Blocos padrão
              </p>

              {/* ------------------ DIV PARA AS 3 TABELSA ------------------ */}
              <div className="flex flex-col px-5 md:flex-col sm:flex-col lg:flex-col xl:flex-row 2xl:flex-row">
                {/* ------------------ DIV COM 2 TABELAS ------------------ */}
                <div className="w-full h-auto px-5 mb-10 flex flex-col justify-center items-center md:w-full sm:w-full lg:w-full xl:w-2/4  2xl:w-2/4 ">
                  {/* ------------------ DIV COM TABELA DO 0-25mm ------------------ */}
                  <div className="relative shadow-md  z-10 mb-5 w-full border ">
                    {/* ------------------ TABELA DO 0-25mm ------------------ */}
                    <Table className="w-full text-sm text-center">
                      {/* ------------------ INFORMAÇÕES DA ESQUEDA ------------------ */}
                      <TableHeader className="">
                        <TableRow className="border-none bg-zinc-100">
                          <TableHead
                            className="px-6 text-zinc-600 text-center border-b font-bold"
                            colSpan="6"
                          >
                            0 - 25mm
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {/* ------------------ (CONTEÚDO) INFORMAÇÕES DO CENTRO E DIREITA ------------------ */}
                        <TableRow className="border-b ">
                          <TableHead className="px-6 py-3 rounded-t-xl text-left">
                            Identificação
                          </TableHead>
                          <TableCell className="text-right">SUI-048</TableCell>
                        </TableRow>
                        <TableRow className="border-b">
                          <TableHead className="px-6 py-3  text-left">
                            Certificado
                          </TableHead>
                          <TableCell className="text-right">722/22</TableCell>
                        </TableRow>
                        <TableRow className="border-b">
                          <TableHead className="px-6 py-3  text-left">
                            Validade
                          </TableHead>
                          <TableCell className="text-right">Fev/24</TableCell>
                        </TableRow>
                        <TableRow className="border-b">
                          <TableHead className="px-6 py-3 text-left">
                            Incerteza
                          </TableHead>
                          <TableCell className="text-right">
                            0,08 + L/1500
                          </TableCell>
                        </TableRow>
                        <TableRow className="border-none">
                          <TableHead className="px-6 py-3   text-left">
                            Rastreabilidade
                          </TableHead>
                          <TableCell className="text-right">CAL-1058</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div className="relative shadow-md  z-10 w-full">
                    {/* ------------------ TABELA DO 25-50mm ------------------ */}
                    <Table className="w-full text-sm text-center">
                      {/* ------------------ INFORMAÇÕES DA ESQUEDA ------------------ */}
                      <TableHeader className="text-zinc-600">
                        <TableRow className="border-none bg-zinc-100 ">
                          <TableHead
                            className="px-6 text-zinc-600 text-center border-b font-bold"
                            colSpan="6"
                          >
                            25 - 50mm
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {/* ------------------ (CONTEÚDO) INFORMAÇÕES DO CENTRO E DIREITA ------------------ */}
                        <TableRow className="border-b ">
                          <TableHead className="px-6 py-3 rounded-t-xl text-left">
                            Identificação
                          </TableHead>
                          <TableCell className="text-right">SUI-048</TableCell>
                        </TableRow>
                        <TableRow className="border-b">
                          <TableHead className="px-6 py-3  text-left">
                            Certificado
                          </TableHead>
                          <TableCell className="text-right">722/22</TableCell>
                        </TableRow>
                        <TableRow className="border-b">
                          <TableHead className="px-6 py-3  text-left">
                            Validade
                          </TableHead>
                          <TableCell className="text-right">Fev/24</TableCell>
                        </TableRow>
                        <TableRow className="border-b">
                          <TableHead className="px-6 py-3 text-left">
                            Incerteza
                          </TableHead>
                          <TableCell className="text-right">
                            0,08 + L/1500
                          </TableCell>
                        </TableRow>
                        <TableRow className="border-none">
                          <TableHead className="px-6 py-3   text-left">
                            Rastreabilidade
                          </TableHead>
                          <TableCell className="text-right">CAL-1058</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                {/* ------------ LADO DIREITO COM UMA TABELA ----------- */}
                <div className="w-full h-auto px-5 mb-10 flex flex-col justify-center items-center md:w-full sm:w-full lg:w-full xl:w-2/4  2xl:w-2/4 ">
                  {/* DIV PARA COLOCAR SOMBRA */}
                  <div className="w-full h-auto shadow-md">
                    {/* ------- TABELA ------- */}
                    <Table className="border ">
                      {/* ------- CABEÇA DA TABELA ------- */}
                      <TableHeader>
                        <TableRow className="bg-zinc-100">
                          {/* ---------------- TITULO ----------------*/}
                          <TableHead
                            className="text-center text-zinc-600 font-bold"
                            colSpan="3"
                          >
                            Erro devido a montagem de blocos (mm)
                          </TableHead>
                        </TableRow>
                        {/* ---------------- SUBTITULOS ----------------*/}
                        <TableRow className="uppercase">
                          <TableHead className="text-left font-bold text-zinc-600">
                            Faixa
                          </TableHead>
                          <TableHead className="text-center font-bold text-zinc-600">
                            montagem
                          </TableHead>
                          <TableHead className="text-right font-bold text-zinc-600">
                            erro
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      {/* ------- CORPO DA TABELA ------- */}
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-left">25 - 50</TableCell>
                          <TableCell className="text-center">
                            25 + 22,8
                          </TableCell>
                          <TableCell className="text-right">0.00019</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-left">50 - 75</TableCell>
                          <TableCell className="text-center">
                            50 + 22,8
                          </TableCell>
                          <TableCell className="text-right">0.00019</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-left">75 - 100</TableCell>
                          <TableCell className="text-center">
                            75 + 22,8
                          </TableCell>
                          <TableCell className="text-right">0.00019</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-left">100 - 125</TableCell>
                          <TableCell className="text-center">
                            100 + 25
                          </TableCell>
                          <TableCell className="text-right">0.00019</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-left">125 - 150</TableCell>
                          <TableCell className="text-center">
                            100 + 25 + 22,8
                          </TableCell>
                          <TableCell className="text-right">0.00019</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-left">150 - 175</TableCell>
                          <TableCell className="text-center">
                            100 + 50 + 22,8
                          </TableCell>
                          <TableCell className="text-right">0.00019</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-left">175 - 200</TableCell>
                          <TableCell className="text-center">
                            100 + 75 + 22,8
                          </TableCell>
                          <TableCell className="text-right">0.00019</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              {/* --------------- DIV COM A TABELA DE TERMOMETRO ---------------- */}
              <div className="px-10 py-5 ">
                <div className="w-full h-auto shadow-md">
                  {/* ---------------- TABELA ---------------- */}
                  <Table className="border ">
                    {/* ---------------- TITULO DA TABELA ---------------- */}
                    <TableHeader className="bg-zinc-100">
                      <TableRow>
                        <TableHead
                          colSpan={2}
                          className="text-center text-zinc-600 font-bold text-xl"
                        >
                          Termômetro
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    {/* ---------------- CONTEUDO DA TABELA ---------------- */}
                    <TableBody>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Identificação
                        </TableHead>
                        <TableCell className="text-right">
                          1017709 / SUI-119
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Correção
                        </TableHead>
                        <TableCell className="text-right">0,5 °C</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Rastreabilidade
                        </TableHead>
                        <TableCell className="text-right">Cal-0127</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Certificado
                        </TableHead>
                        <TableCell className="text-right">
                          LV01750-39766-22-R0
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Validade
                        </TableHead>
                        <TableCell className="text-right">
                          Novembro de 2024
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              {/* ------------ DVI PARA OUTRAS DUAS TABELAS DE PLANO/PARALELO --------------- */}
              <div className="flex xl:flex-row 2xl:flex-row w-full gap-5 px-10 py-5 flex-col ">
                {/* DIV PARA COLOCAR SOMBRA */}
                <div className="w-full h-auto xl:w-2/4 2xl:w-2/4 shadow-md">
                  {/* ---------------- TABELA DE 12mm ---------------- */}
                  <Table className="border w-full">
                    {/* ---------------- TITUL DA TABELA ---------------- */}
                    <TableHeader className="bg-zinc-100">
                      <TableRow>
                        <TableHead
                          colSpan={2}
                          className="text-center text-zinc-600 font-bold text-xl"
                        >
                          Plano/Paralelo óptico (12mm)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    {/* ---------------- CONTEÚDO DA TABELA ---------------- */}
                    <TableBody>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Identificação
                        </TableHead>
                        <TableCell className="text-right">SUI-087</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Certificado
                        </TableHead>
                        <TableCell className="text-right">04614/22</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Validade
                        </TableHead>
                        <TableCell className="text-right">Nov/24</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Rastreabilidade
                        </TableHead>
                        <TableCell className="text-right">CAL-0031</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Incerteza de Planeta
                        </TableHead>
                        <TableCell className="text-right">0,00007 mm</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Erro de Planeta
                        </TableHead>
                        <TableCell className="text-right">0,00012 mm</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Incerteza de Paralelismo
                        </TableHead>
                        <TableCell className="text-right">0,00005 mm</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Erro de Paralelismo
                        </TableHead>
                        <TableCell className="text-right">0,00036 mm</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                {/* ---------------- TABELA DO LADO DIREITO ----------------*/}
                <div className="w-full h-auto xl:w-2/4 2xl:w-2/4 shadow-md">
                  <Table className="border ">
                    {/* ---------------- TITULO DA TABELA ----------------*/}
                    <TableHeader className="bg-zinc-100">
                      <TableRow>
                        <TableHead
                          colSpan={2}
                          className="text-center text-zinc-600 font-bold text-xl"
                        >
                          Plano/Paralelo óptico (12mm)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    {/* ---------------- CORPO DA TABELA ---------------- */}
                    <TableBody>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Identificação
                        </TableHead>
                        <TableCell className="text-right">SUI-003</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Certificado
                        </TableHead>
                        <TableCell className="text-right">04637/22</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Validade
                        </TableHead>
                        <TableCell className="text-right">Nov/24</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Rastreabilidade
                        </TableHead>
                        <TableCell className="text-right">CAL-0031</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Incerteza de Planeta
                        </TableHead>
                        <TableCell className="text-right">0,00007 mm</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Erro de Planeta
                        </TableHead>
                        <TableCell className="text-right">0,00013 mm</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Incerteza de Paralelismo
                        </TableHead>
                        <TableCell className="text-right">0,00015 mm</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead className="text-left text-black">
                          Erro de Paralelismo
                        </TableHead>
                        <TableCell className="text-right">0,00009 mm</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              {/* INCERTEZA DA MEDIÇÃO*/}
              <h4 className="text-black font-extrabold uppercase text-base w-full py-3 px-4 bg-[#DBDBDB] mt-10">
                Incerteza da Medição
              </h4>
              {/* DIV PARA TABELA */}
              <div className="px-10 py-5">
                {/* DIV PARA COLOCAR SOMBRA NA TABELA */}
                <div className="shaadow-md w-full">
                  {/* TABELA */}
                  <Table className="border">
                    {/* TITULO E SUBTITULO DA TABELA */}
                    <TableHeader>
                      <TableRow className="bg-zinc-100">
                        <TableHead className="text-left text-zinc-600 font-bold">
                          GRANDEZA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          ESTIMATIVA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          INCERTEZA PADRÃO
                        </TableHead>
                        <TableHead
                          className="text-center text-zinc-600 font-bold"
                          colSpan={2}
                        >
                          DISTRIBUIÇAO DE PROBABILIDADE
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          COEFICIENTE DE SENSIBILIDADE{" "}
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          CONTRIBUIÇÃO PARA A INCERTEZA{" "}
                        </TableHead>
                        <TableHead className="text-right text-zinc-600 font-bold">
                          GRAUS DE LIBERDADE{" "}
                        </TableHead>
                      </TableRow>
                      <TableRow className="bg-zinc-50">
                        <TableHead className="text-left " colSpan={3}>
                          Xi
                        </TableHead>
                        <TableHead className="text-center">Tipo</TableHead>
                        <TableHead className="text-center">Divisor</TableHead>
                        <TableHead className="text-center">Ci</TableHead>
                        <TableHead className="text-center">Ui(y) mm </TableHead>
                        <TableHead className="text-right">Vi ouVeff </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* CONTEÚDO DA TABELA */}
                      <TableRow className="text-center">
                        <TableCell className="text-left">UA</TableCell>
                        <TableCell>Repetitividade (uA)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">2</TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">UP</TableCell>
                        <TableCell>Inc. Certificado padrão</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">Eres.</TableCell>
                        <TableCell>Erro de Resolução</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">11</TableCell>
                        <TableCell>Afastamento de 20°C</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">12</TableCell>
                        <TableCell>Diferença Temp. mens x pad</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">Par</TableCell>
                        <TableCell>Paralaxe</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">E ader.</TableCell>
                        <TableCell>Erro de aderencia</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">UA</TableCell>
                        <TableCell>Repetitividade (uA)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">UA</TableCell>
                        <TableCell>Repetitividade (uA)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell colSpan={5}></TableCell>
                        <TableCell>uc=</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">
                          Veff = #DIV/0!
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell colSpan={3}></TableCell>
                        <TableCell colSpan={2}>k = ####</TableCell>
                        <TableCell>U(95%)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              {/* Incerteza do Paralelismo (micrômetro 0-25mm)*/}
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] mt-10">
                INCERTEZA DA PARALELISMO (MICRÔMETRO 0 - 25mm)
              </h4>
              {/* DIV PARA TABELA */}
              <div className="px-10 py-5">
                {/* DIV PARA COLOCAR SOMBRA NA TABELA */}
                <div className="shaadow-md w-full">
                  {/* TABELA */}
                  <Table className="border">
                    {/* TITULO E SUBTITULO DA TABELA */}
                    <TableHeader>
                      <TableRow className="bg-zinc-100">
                        <TableHead className="text-left text-zinc-600 font-bold">
                          GRANDEZA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          ESTIMATIVA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          INCERTEZA PADRÃO
                        </TableHead>
                        <TableHead
                          className="text-center text-zinc-600 font-bold"
                          colSpan={2}
                        >
                          DISTRIBUIÇAO DE PROBABILIDADE
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          COEFICIENTE DE SENSIBILIDADE{" "}
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          CONTRIBUIÇÃO PARA A INCERTEZA{" "}
                        </TableHead>
                        <TableHead className="text-right text-zinc-600 font-bold">
                          GRAUS DE LIBERDADE{" "}
                        </TableHead>
                      </TableRow>
                      <TableRow className="bg-zinc-50">
                        <TableHead className="text-left " colSpan={3}>
                          Xi
                        </TableHead>
                        <TableHead className="text-center">Tipo</TableHead>
                        <TableHead className="text-center">Divisor</TableHead>
                        <TableHead className="text-center">Ci</TableHead>
                        <TableHead className="text-center">Ui(y) mm </TableHead>
                        <TableHead className="text-right">Vi ouVeff </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* CONTEÚDO DA TABELA */}
                      <TableRow className="text-center">
                        <TableCell className="text-left">UA</TableCell>
                        <TableCell>Repetitividade (uA)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">2</TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">UP</TableCell>
                        <TableCell>Inc. Certificado Paralelo</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">Eres.</TableCell>
                        <TableCell>Erro de Paralelismo Padrão</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>

                      <TableRow className="text-center">
                        <TableCell colSpan={5}></TableCell>
                        <TableCell>uc=</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">
                          Veff = #DIV/0!
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell colSpan={3}></TableCell>
                        <TableCell colSpan={2}>k = =DIV/0!</TableCell>
                        <TableCell>U(95%)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              {/* Incerteza da Planeza (micrômetro 0-25mm)*/}
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] mt-10">
                INCERTEZA DA PLANEZA (MICRÔMETRO 0 - 25mm)
              </h4>
              {/* DIV PARA TABELA */}
              <div className="px-10 py-5">
                {/* DIV PARA COLOCAR SOMBRA NA TABELA */}
                <div className="shaadow-md w-full">
                  {/* TABELA */}
                  <Table className="border">
                    {/* TITULO E SUBTITULO DA TABELA */}
                    <TableHeader>
                      <TableRow className="bg-zinc-100">
                        <TableHead className="text-left text-zinc-600 font-bold">
                          GRANDEZA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          ESTIMATIVA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          INCERTEZA PADRÃO
                        </TableHead>
                        <TableHead
                          className="text-center text-zinc-600 font-bold"
                          colSpan={2}
                        >
                          DISTRIBUIÇAO DE PROBABILIDADE
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          COEFICIENTE DE SENSIBILIDADE
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          CONTRIBUIÇÃO PARA A INCERTEZA
                        </TableHead>
                        <TableHead className="text-right text-zinc-600 font-bold">
                          GRAUS DE LIBERDADE
                        </TableHead>
                      </TableRow>
                      <TableRow className="bg-zinc-50">
                        <TableHead className="text-left " colSpan={3}>
                          Xi
                        </TableHead>
                        <TableHead className="text-center">Tipo</TableHead>
                        <TableHead className="text-center">Divisor</TableHead>
                        <TableHead className="text-center">Ci</TableHead>
                        <TableHead className="text-center">Ui(y) mm </TableHead>
                        <TableHead className="text-right">Vi ouVeff </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* CONTEÚDO DA TABELA */}
                      <TableRow className="text-center">
                        <TableCell className="text-left">UA</TableCell>
                        <TableCell>Repetitividade (uA)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">2</TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">UP</TableCell>
                        <TableCell>Inc. Certificado Plano</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">Eres.</TableCell>
                        <TableCell>Erro de Planeza</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>

                      <TableRow className="text-center">
                        <TableCell colSpan={5}></TableCell>
                        <TableCell>uc=</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">
                          Veff = #DIV/0!
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell colSpan={3}></TableCell>
                        <TableCell colSpan={2}>k = =DIV/0!</TableCell>
                        <TableCell>U(95%)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Incerteza da Paralelismo (micrômetro 25-50 mm)*/}
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] mt-10">
                INCERTEZA DA PARALELISMO (MICRÔMETRO 25 - 50mm)
              </h4>
              {/* DIV PARA TABELA */}
              <div className="px-10 py-5">
                {/* DIV PARA COLOCAR SOMBRA NA TABELA */}
                <div className="shaadow-md w-full">
                  {/* TABELA */}
                  <Table className="border">
                    {/* TITULO E SUBTITULO DA TABELA */}
                    <TableHeader>
                      <TableRow className="bg-zinc-100">
                        <TableHead className="text-left text-zinc-600 font-bold">
                          GRANDEZA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          ESTIMATIVA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          INCERTEZA PADRÃO
                        </TableHead>
                        <TableHead
                          className="text-center text-zinc-600 font-bold"
                          colSpan={2}
                        >
                          DISTRIBUIÇAO DE PROBABILIDADE
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          COEFICIENTE DE SENSIBILIDADE{" "}
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          CONTRIBUIÇÃO PARA A INCERTEZA{" "}
                        </TableHead>
                        <TableHead className="text-right text-zinc-600 font-bold">
                          GRAUS DE LIBERDADE{" "}
                        </TableHead>
                      </TableRow>
                      <TableRow className="bg-zinc-50">
                        <TableHead className="text-left " colSpan={3}>
                          Xi
                        </TableHead>
                        <TableHead className="text-center">Tipo</TableHead>
                        <TableHead className="text-center">Divisor</TableHead>
                        <TableHead className="text-center">Ci</TableHead>
                        <TableHead className="text-center">Ui(y) mm </TableHead>
                        <TableHead className="text-right">Vi ouVeff </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* CONTEÚDO DA TABELA */}
                      <TableRow className="text-center">
                        <TableCell className="text-left">UA</TableCell>
                        <TableCell>Repetitividade (uA)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">2</TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">UP</TableCell>
                        <TableCell>Inc. Certificado Paralelo</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">Eres.</TableCell>
                        <TableCell>Erro de Paralelismo </TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>

                      <TableRow className="text-center">
                        <TableCell colSpan={5}></TableCell>
                        <TableCell>uc=</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">
                          Veff = #DIV/0!
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell colSpan={3}></TableCell>
                        <TableCell colSpan={2}>k = =DIV/0!</TableCell>
                        <TableCell>U(95%)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Incerteza da Planeza (micrômetro 25 - 50mm)*/}
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] mt-10">
                INCERTEZA DA PLANEZA (MICRÔMETRO 25 - 50mm)
              </h4>
              {/* DIV PARA TABELA */}
              <div className="px-10 py-5">
                {/* DIV PARA COLOCAR SOMBRA NA TABELA */}
                <div className="shaadow-md w-full">
                  {/* TABELA */}
                  <Table className="border">
                    {/* TITULO E SUBTITULO DA TABELA */}
                    <TableHeader>
                      <TableRow className="bg-zinc-100">
                        <TableHead className="text-left text-zinc-600 font-bold">
                          GRANDEZA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          ESTIMATIVA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          INCERTEZA PADRÃO
                        </TableHead>
                        <TableHead
                          className="text-center text-zinc-600 font-bold"
                          colSpan={2}
                        >
                          DISTRIBUIÇAO DE PROBABILIDADE
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          COEFICIENTE DE SENSIBILIDADE{" "}
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          CONTRIBUIÇÃO PARA A INCERTEZA{" "}
                        </TableHead>
                        <TableHead className="text-right text-zinc-600 font-bold">
                          GRAUS DE LIBERDADE{" "}
                        </TableHead>
                      </TableRow>
                      <TableRow className="bg-zinc-50">
                        <TableHead className="text-left " colSpan={3}>
                          Xi
                        </TableHead>
                        <TableHead className="text-center">Tipo</TableHead>
                        <TableHead className="text-center">Divisor</TableHead>
                        <TableHead className="text-center">Ci</TableHead>
                        <TableHead className="text-center">Ui(y) mm </TableHead>
                        <TableHead className="text-right">Vi ouVeff </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* CONTEÚDO DA TABELA */}
                      <TableRow className="text-center">
                        <TableCell className="text-left">UA</TableCell>
                        <TableCell>Repetitividade (uA)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">2</TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">UP</TableCell>
                        <TableCell>Inc. Certificado Plano</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">Eres.</TableCell>
                        <TableCell>Erro de Planeza</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>

                      <TableRow className="text-center">
                        <TableCell colSpan={5}></TableCell>
                        <TableCell>uc=</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">
                          Veff = #DIV/0!
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell colSpan={3}></TableCell>
                        <TableCell colSpan={2}>k = =DIV/0!</TableCell>
                        <TableCell>U(95%)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Incerteza da Paralelismo (micrômetro 50 - 100 mm)*/}
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] mt-10">
                INCERTEZA DA PARALELISMO (MICRÔMETRO 50 - 100mm)
              </h4>
              {/* DIV PARA TABELA */}
              <div className="px-10 py-5">
                {/* DIV PARA COLOCAR SOMBRA NA TABELA */}
                <div className="shaadow-md w-full">
                  {/* TABELA */}
                  <Table className="border">
                    {/* TITULO E SUBTITULO DA TABELA */}
                    <TableHeader>
                      <TableRow className="bg-zinc-100">
                        <TableHead className="text-left text-zinc-600 font-bold">
                          GRANDEZA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          ESTIMATIVA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          INCERTEZA PADRÃO
                        </TableHead>
                        <TableHead
                          className="text-center text-zinc-600 font-bold"
                          colSpan={2}
                        >
                          DISTRIBUIÇAO DE PROBABILIDADE
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          COEFICIENTE DE SENSIBILIDADE{" "}
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          CONTRIBUIÇÃO PARA A INCERTEZA{" "}
                        </TableHead>
                        <TableHead className="text-right text-zinc-600 font-bold">
                          GRAUS DE LIBERDADE{" "}
                        </TableHead>
                      </TableRow>
                      <TableRow className="bg-zinc-50">
                        <TableHead className="text-left " colSpan={3}>
                          Xi
                        </TableHead>
                        <TableHead className="text-center">Tipo</TableHead>
                        <TableHead className="text-center">Divisor</TableHead>
                        <TableHead className="text-center">Ci</TableHead>
                        <TableHead className="text-center">Ui(y) mm </TableHead>
                        <TableHead className="text-right">Vi ouVeff </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* CONTEÚDO DA TABELA */}
                      <TableRow className="text-center">
                        <TableCell className="text-left">UA</TableCell>
                        <TableCell>Repetitividade (uA)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">2</TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">UBloco</TableCell>
                        <TableCell>Inc. Certificado Bloco Padrão</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right"></TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">UP</TableCell>
                        <TableCell>Inc. Certificado Paralelo</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">Eres.</TableCell>
                        <TableCell>Erro de Paralelismo </TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>

                      <TableRow className="text-center">
                        <TableCell colSpan={5}></TableCell>
                        <TableCell>uc=</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">
                          Veff = #DIV/0!
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell colSpan={3}></TableCell>
                        <TableCell colSpan={2}>k = =DIV/0!</TableCell>
                        <TableCell>U(95%)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Incerteza do Planeza (micrômetro 50 - 100mm)*/}
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] mt-10">
                INCERTEZA DA PLANEZA (MICRÔMETRO 50 - 100mm)
              </h4>
              {/* DIV PARA TABELA */}
              <div className="px-10 py-5">
                {/* DIV PARA COLOCAR SOMBRA NA TABELA */}
                <div className="shaadow-md w-full">
                  {/* TABELA */}
                  <Table className="border">
                    {/* TITULO E SUBTITULO DA TABELA */}
                    <TableHeader>
                      <TableRow className="bg-zinc-100">
                        <TableHead className="text-left text-zinc-600 font-bold">
                          GRANDEZA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          ESTIMATIVA
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          INCERTEZA PADRÃO
                        </TableHead>
                        <TableHead
                          className="text-center text-zinc-600 font-bold"
                          colSpan={2}
                        >
                          DISTRIBUIÇAO DE PROBABILIDADE
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          COEFICIENTE DE SENSIBILIDADE{" "}
                        </TableHead>
                        <TableHead className="text-center text-zinc-600 font-bold">
                          CONTRIBUIÇÃO PARA A INCERTEZA{" "}
                        </TableHead>
                        <TableHead className="text-right text-zinc-600 font-bold">
                          GRAUS DE LIBERDADE{" "}
                        </TableHead>
                      </TableRow>
                      <TableRow className="bg-zinc-50">
                        <TableHead className="text-left " colSpan={3}>
                          Xi
                        </TableHead>
                        <TableHead className="text-center">Tipo</TableHead>
                        <TableHead className="text-center">Divisor</TableHead>
                        <TableHead className="text-center">Ci</TableHead>
                        <TableHead className="text-center">Ui(y) mm </TableHead>
                        <TableHead className="text-right">Vi ouVeff </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* CONTEÚDO DA TABELA */}
                      <TableRow className="text-center">
                        <TableCell className="text-left">UA</TableCell>
                        <TableCell>Repetitividade (uA)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">2</TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">UBloco</TableCell>
                        <TableCell>Inc. Certificado Bloco Padrão</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">UP</TableCell>
                        <TableCell>Inc. Certificado Plano</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell className="text-left">Eres.</TableCell>
                        <TableCell>Erro de Planeza</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>1,7321</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">infinito </TableCell>
                      </TableRow>

                      <TableRow className="text-center">
                        <TableCell colSpan={5}></TableCell>
                        <TableCell>uc=</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right">
                          Veff = #DIV/0!
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-center">
                        <TableCell colSpan={3}></TableCell>
                        <TableCell colSpan={2}>k = =DIV/0!</TableCell>
                        <TableCell>U(95%)</TableCell>
                        <TableCell>=DIV/0!</TableCell>
                        <TableCell className="text-right"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
            {/* div para os botões  */}
            <div className="w-full flex flex-row justify-end items-center py-5 gap-3">
              <Button className="w-[200px]">Adicionar</Button>
              <Button className="w-[200px] border-[#858585] border-2 bg-transparent text-[#949494] font-semibold hover:bg-[#858585] hover:text-white">
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
