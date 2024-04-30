import Menu from "@/components/layout/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResulPaquimetro() {
  const renderizarTable = () => {
    const rows = [];

    // Loop para criar as linhas da tabela
    for (let x = 1; x <= 5; x++) {
      // Adiciona a linha com as células ao array de linhas
      rows.push(
        <tr
          key={x}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center "></td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center"></td>
        </tr>
      );
    }

    // Retorna o array de linhas
    return rows;
  };
  const renderizarTableMedInterna = () => {
    const rows = [];

    // Loop para criar as linhas da tabela
    for (let x = 1; x <= 3; x++) {
      // Adiciona a linha com as células ao array de linhas
      rows.push(
        <tr
          key={x}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center "></td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center "></td>
        </tr>
      );
    }

    // Retorna o array de linhas
    return rows;
  };

  const renderizarTableMedProfundidade = () => {
    const rows = [];

    // Loop para criar as linhas da tabela
    for (let x = 1; x <= 3; x++) {
      // Adiciona a linha com as células ao array de linhas
      rows.push(
        <tr
          key={x}
          className="bg-white border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td className="whitespace-nowrap p-0  text-center ">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>   
          <td className="whitespace-nowrap p-0  text-center">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center">
            <Input
              type="text"
              className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
              placeholder="digite..."
            />
          </td>
          <td className="whitespace-nowrap p-0  text-center"></td>
        </tr>
      );
    }

    // Retorna o array de linhas
    return rows;
  };

  return (
    <div>
      <Menu />
      <div className="max-md:ml-0 flex flex-col bg-primary pt-20 items-center gap-5 ml-80">
        <div className="flex flex-row justify-between w-[90%]"></div>
        {/* form */}
        <form className="flex flex-col w-full items-center">
          <div className="flex flex-col justify-between w-[90%] rounded-lg bg-white shadow-lg  box-shadow">
            {/* informações dos inputs */}
            <div className="py-2 px-10">
              <h1 className="text-black font-bold text-3xl">
                Resultado de Medição de Paquimetro
              </h1>
              <div className="gap-5 flex flex-col w-full items-center py-3">
                <div className="flex flex-row gap-3 w-full items-center">
                  <Label className="font-bold text-[#3F3F3F] text-sm w-[11%] ">
                    Interessado
                  </Label>
                  <Input type="text" placeholder="Digite o nome..." />
                </div>
                <div className="flex flex-row gap-3 w-full items-center">
                  <Label className="font-bold text-[#3F3F3F] text-sm w-[11%] ">
                    Endereço
                  </Label>
                  <Input type="text" placeholder="Digite o nome..." />
                </div>

                <div className="flex flex-row w-full justify-between  gap-3 ">
                  <div className="flex flex-row gap-3 items-center w-[60%]">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[20%] ">
                      Contratante
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                  <div className="flex flex-row gap-3 items-center  w-[40%]">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[40%] ">
                      N° da OS
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between  gap-3 ">
                  <div className="flex flex-row gap-3 items-center w-[60%]">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[20%] ">
                      Obj. Medido
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                  <div className="flex flex-row gap-3 items-center  w-[40%]">
                    <Label className="font-bold text-[#3F3F3F] text-sm  w-[40%] ">
                      N° Certif.
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between  gap-3 ">
                  <div className="flex flex-row gap-3 items-center w-[60%]">
                    <Label className="font-bold text-[#3F3F3F] text-sm  w-[20%] ">
                      Fabricante
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                  <div className="flex flex-row gap-3 items-center  w-[40%]">
                    <Label className="font-bold text-[#3F3F3F] text-sm  w-[40%] ">
                      Código
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between  gap-3 ">
                  <div className="flex flex-row gap-3 items-center w-[60%]">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[20%] ">
                      Indent. Cliente
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                  <div className="flex flex-row gap-3 items-center  w-[40%]">
                    <Label className="font-bold text-[#3F3F3F] text-sm  w-[40%] ">
                      Faixa Nominal
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between  gap-3 ">
                  <div className="flex flex-row gap-3 items-center w-[60%]">
                    <Label className="font-bold text-[#3F3F3F] text-sm  w-[20%] ">
                      Resolução
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                  <div className="flex flex-row gap-3 items-center  w-[40%]">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[40%] ">
                      Faixa Calibrada
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                </div>
                <div className="flex flex-row gap-3 w-full items-center">
                  <Label className="font-bold text-[#3F3F3F] text-sm w-[15%] ">
                    Data Recebimento
                  </Label>
                  <Input type="text" placeholder="Digite o nome..." />
                </div>
                <div className="flex flex-row w-full justify-between  gap-3 ">
                  <div className="flex flex-row gap-3 items-center w-[60%]">
                    <Label className="font-bold text-[#3F3F3F] text-sm  w-[70%] ">
                      Inspeção do instrumento (OK / NOK)
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                  <div className="flex flex-row gap-3 items-center  w-[40%]">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[80%] ">
                      Tipo (analógico / Digital){" "}
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                </div>
              </div>
            </div>

            {/* MEDIÇÃO EXTERNA */}
            <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] mt-10">
              MEDIÇÃO EXTERNA (em mm)
            </h4>

            <div className="px-10 py-5">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                {/* TABELA */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                  <thead className="ext-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr className="bg-[#e6e6e6]">
                      <th
                        rowSpan={2}
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Valor Nominal
                      </th>
                      <th
                        colSpan="3"
                        scope="col"
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Valor Indicado
                      </th>
                      <th
                        rowSpan="2"
                        scope="row"
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Tendência
                      </th>
                      <th
                        rowSpan={2}
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Valor Nominal
                      </th>
                      <th
                        colSpan="3"
                        scope="col"
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Valor Indicado
                      </th>
                      <th
                        rowSpan="2"
                        scope="row"
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Tendência
                      </th>
                    </tr>

                    <tr className="bg-[#e6e6e6] border-b ">
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        1
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        2
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        3
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        1
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        2
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        3
                      </td>
                    </tr>
                  </thead>
                  <tbody>{renderizarTable()}</tbody>
                </table>
              </div>
            </div>

            <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase mt-10">
              paralelismo
            </h4>
            <div className="px-10 py-5">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                {/* TABELA */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                  <thead className="ext-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr className="bg-[#e6e6e6]">
                      <th
                        rowSpan={1}
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Valor Nominal
                      </th>
                      <th
                        colSpan="3"
                        scope="col"
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Valor Indicado( Orelhas )
                      </th>
                      <th
                        rowSpan="2"
                        scope="row"
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Tendência
                      </th>
                      <th
                        rowSpan={2}
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Paralelismo
                      </th>
                    </tr>

                    <tr className="bg-[#e6e6e6] border-b ">
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-2 border-y-none m-0 rounded-none border-none text-left"
                          placeholder="digite..."
                        />
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        1
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        2
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        3
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="whitespace-nowrap p-0  text-left px-2">
                        Valor ind. próximo da escala
                      </td>
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
                          placeholder="digite..."
                        />
                      </td>
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
                          placeholder="digite..."
                        />
                      </td>
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
                          placeholder="digite..."
                        />
                      </td>

                      <td className="whitespace-nowrap p-0  text-center border-x-[0.5px]">
                        #DIV/0!
                      </td>
                      <td
                        className="whitespace-nowrap p-0  text-center"
                        rowSpan={2}
                      >
                        #DIV/0!
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="whitespace-nowrap p-0  text-left px-2">
                        Valor ind. afastado da escala
                      </td>
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
                          placeholder="digite..."
                        />
                      </td>
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
                          placeholder="digite..."
                        />
                      </td>
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
                          placeholder="digite..."
                        />
                      </td>

                      <td className="whitespace-nowrap p-0  text-center border-x-[0.5px] ">
                        #DIV/0!
                      </td>
                    </tr>
                  </tbody>
                  <thead className="ext-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr className="bg-[#e6e6e6]">
                      <th
                        rowSpan={1}
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Valor Nominal
                      </th>
                      <th
                        colSpan="3"
                        scope="col"
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Valor Indicado( Bicos )
                      </th>
                      <th
                        rowSpan="2"
                        scope="row"
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Tendência
                      </th>
                      <th
                        rowSpan={2}
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Paralelismo
                      </th>
                    </tr>

                    <tr className="bg-[#e6e6e6] border-b ">
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-2 border-y-none m-0 rounded-none border-none text-left "
                          placeholder="digite..."
                        />
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        1
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        2
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        3
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="whitespace-nowrap p-0  text-left px-2">
                        Valor ind. próximo da escala
                      </td>
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
                          placeholder="digite..."
                        />
                      </td>
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
                          placeholder="digite..."
                        />
                      </td>
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
                          placeholder="digite..."
                        />
                      </td>

                      <td className="whitespace-nowrap p-0  text-center border-x-[0.5px]">
                        #DIV/0!
                      </td>
                      <td
                        className="whitespace-nowrap p-0  text-center"
                        rowSpan={2}
                      >
                        #DIV/0!
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="whitespace-nowrap p-0  text-left px-2">
                        Valor ind. afastado da escala
                      </td>
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
                          placeholder="digite..."
                        />
                      </td>
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
                          placeholder="digite..."
                        />
                      </td>
                      <td className="whitespace-nowrap p-0  text-center ">
                        <Input
                          type="text"
                          className="border-x-[0.5px] border-y-0 m-0 rounded-none text-center"
                          placeholder="digite..."
                        />
                      </td>

                      <td className="whitespace-nowrap p-0  text-center border-x-[0.5px]">
                        #DIV/0!
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase mt-10">
              medição interna
            </h4>
            <div className="px-10 py-5">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                {/* TABELA */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                  <thead className="ext-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr className="">
                      <th
                        colSpan="5"
                        scope="col"
                        className="py-4 tracking-wider text-center  w-[15%] bg-white"
                      >
                        Medição Interna
                      </th>
                      <th
                        colSpan="5"
                        scope="col"
                        className="py-4 tracking-wider text-center  w-[15%]  bg-white"
                      >
                        Medição de Ressalto
                      </th>
                    </tr>
                    <tr className="bg-[#e6e6e6]">
                      <th
                        rowSpan={2}
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Valor Nominal
                      </th>
                      <th
                        colSpan="3"
                        scope="col"
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Valor Indicado
                      </th>
                      <th
                        rowSpan="2"
                        scope="row"
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Tendência
                      </th>
                      <th
                        rowSpan={2}
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Valor Nominal
                      </th>
                      <th
                        colSpan="3"
                        scope="col"
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Valor Indicado
                      </th>
                      <th
                        rowSpan="2"
                        scope="row"
                        className="py-4 tracking-wider text-center  w-[15%] "
                      >
                        Tendência
                      </th>
                    </tr>

                    <tr className="bg-[#e6e6e6] border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        1
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        2
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        3
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        1
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        2
                      </td>
                      <td className="whitespace-nowrap p-0  font-bold text-center">
                        3
                      </td>
                    </tr>
                  </thead>
                  <tbody>{renderizarTableMedInterna()}</tbody>
                </table>
              </div>
            </div>

            <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase mt-10">
              medição de profundidade
            </h4>

            <div className="flex flex-col justify-between w-full py-7 px-10">
              {/* div parte de cima */}
              <div className="flex flex-row justify-between w-full gap-10">
                <div className="w-2/4 h-30">
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                      <thead className="ext-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr className="bg-[#e6e6e6]">
                          <th
                            rowSpan={3}
                            className="py-4 tracking-wider text-center  w-[15%]  "
                          >
                            Valor Nominal
                          </th>
                          <th
                            colSpan={3}
                            className="py-4 tracking-wider text-center"
                          >
                            Valor Indicado
                          </th>
                          <th
                            rowSpan={2}
                            className="py-4 tracking-wider text-center  w-[15%] "
                          >
                            Tendência
                          </th>
                        </tr>
                        <tr className="bg-[#e6e6e6] border-b ">
                          <td className="whitespace-nowrap p-0  font-bold text-center ">
                            1
                          </td>
                          <td className="whitespace-nowrap p-0  font-bold text-center">
                            2
                          </td>
                          <td className="whitespace-nowrap p-0  font-bold text-center">
                            3
                          </td>
                        </tr>
                      </thead>
                      <tbody>{renderizarTableMedProfundidade()}</tbody>
                    </table>
                  </div>
                </div>
                <div className="w-2/4 h-30 flex flex-col justify-center">
                  <div className="flex flex-row justify-between w-full py-2">
                    <p className=" font-bold	text-md">Método de Medição</p>
                    <span>IT-SUI-503</span>
                  </div>
                  <div className="flex flex-row gap-3 w-full items-center py-2  ">
                    <Label className="font-bold text-md w-[70%] ">
                      Interessado
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                  <div className="flex flex-row justify-between w-full py-2">
                    <p className=" font-bold	text-md">Incerteza da Medição</p>
                    <span>#DIV/0! mm</span>
                  </div>
                </div>
              </div>
              {/* div parte de cima */}
              <p className="font-bold text-[#111827] text-lg mt-[65px] mb-7">
                Equipamentos Utilizados na Medição
              </p>
              <div className="flex flex-row justify-between w-full gap-10 ">
                <div className="w-2/4">
                  <div className="w-full text-[#5A5A5A] text-md mb-10">
                    <p className="text-[#111827] text-md font-bold">
                      Jogo de blocos-padrão, ident: SUI-001
                    </p>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Rastreabilidade</p>
                      <span>CAL-1058</span>
                    </div>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Certificado</p>
                      <span>721/22</span>
                    </div>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Validade</p>
                      <span>fev/24</span>
                    </div>
                  </div>
                  <div className="w-full text-[#5A5A5A] text-md mb-10">
                    <p className="text-[#111827] text-md font-bold">
                      Padrão escalonado, ident: SUI-115
                    </p>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Rastreabilidade</p>
                      <span>CAL-1033</span>
                    </div>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Certificado</p>
                      <span>D4515/23</span>
                    </div>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Validade</p>
                      <span>abr/25</span>
                    </div>
                    <div className="gap-1 w-full items-center py-2 mt-10">
                      <Label className="font-bold	text-md">
                        Responsável por assinar o certificado:
                      </Label>
                      <Input type="text" placeholder="Digite o nome..." />
                    </div>
                    <div className="flex flex-row gap-3 w-full items-center py-1 mt-12 mb-10">
                      <Label className="font-bold	text-md w-[20%]">
                        Técnico:
                      </Label>
                      <Input type="text" placeholder="Digite o nome..." />
                    </div>
                    <div className="flex flex-row gap-3 w-full items-center py-1 my-3">
                      <Label className="font-bold	text-md w-[30%]">
                        Verificação/Supervisão:
                      </Label>
                      <div className="border-solid border-b-2 border-[#5A5A5A] w-[70%] h-5"></div>
                    </div>
                    <div className="flex flex-row gap-3 w-full items-center py-1">
                      <Label className="font-bold	text-md w-[10%]">Data: </Label>
                      <div className="border-solid border-b-2 border-[#5A5A5A] w-[90%] h-5"></div>
                    </div>
                  </div>
                </div>
                <div className="w-2/4">
                  <div className="w-full text-[#5A5A5A] text-md mb-10">
                    <p className="text-[#111827] text-md font-bold">
                      Padrão escalonado, ident: SUI-071{" "}
                    </p>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Rastreabilidade</p>
                      <span>CAL-0133</span>
                    </div>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Certificado</p>
                      <span>D1423/22</span>
                    </div>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Validade</p>
                      <span>dez/24</span>
                    </div>
                  </div>
                  <div className="w-full text-[#5A5A5A] text-md mb-10">
                    <div className="flex flex-row justify-between">
                      <p className="text-[#111827] text-md font-bold">
                        Termometro Nr: SUI-119
                      </p>
                      <p className="text-[#111827] text-md font-bold">
                        1017709{" "}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Correção</p>
                      <span>0,5°C</span>
                    </div>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Rastreabilidade</p>
                      <span>CAL-0127</span>
                    </div>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Certificado</p>
                      <span>LV01750-39766-22-R0</span>
                    </div>
                    <div className="flex flex-row justify-between w-full py-1">
                      <p className=" font-bold	text-md">Validade</p>
                      <span>dez/24</span>
                    </div>
                    <div className="flex flex-row gap-3 w-full items-center py-1">
                      <Label className="font-bold	text-md w-[80%]">
                        Temperatura Inicial:
                      </Label>
                      <Input type="text" placeholder="Em °C" />
                    </div>
                    <div className="flex flex-row gap-3 w-full items-center py-1">
                      <Label className="font-bold	text-md w-[80%]">
                        Temperatura Final:
                      </Label>
                      <Input type="text" placeholder="Em °C" />
                    </div>
                    <div className="flex flex-row gap-3 w-full items-center py-1 my-10">
                      <Label className="font-bold	text-md w-[80%]">
                        Data da Calibração:
                      </Label>
                      <Input type="date" placeholder="Em °C" />
                    </div>
                    <div className="flex flex-row gap-3 w-full items-center py-1 my-3">
                      <Label className="font-bold	text-md w-[18%]">
                        Assinatura:
                      </Label>
                      <div className="border-solid border-b-2 border-[#5A5A5A] w-[82%] h-5"></div>
                    </div>
                    <div className="flex flex-row gap-3 w-full items-center py-1">
                      <Label className="font-bold	text-md w-[18%]">
                        Assinatura:
                      </Label>
                      <div className="border-solid border-b-2 border-[#5A5A5A] w-[82%] h-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BOTÕES DO FORMULÁRIO */}
          </div>
          <div className="w-[90%] flex flex-row justify-end items-center py-5 gap-3">
            <Button className="w-[200px]">Adicionar</Button>
            <Button className="w-[200px] border-[#858585] border-2 bg-transparent text-[#949494] font-semibold hover:bg-[#858585] hover:text-white">
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
