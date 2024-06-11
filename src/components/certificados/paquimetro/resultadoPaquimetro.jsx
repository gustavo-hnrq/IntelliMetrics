import Menu from "@/components/layout/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { registerCalcPaq } from "@/services/paquimetro";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ResulPaquimetro() {
  const [response, setResponse] = useState("");
  const { register, handleSubmit } = useForm();

  async function handleCalculate(data) {
    try {
      const valorIndicado = [];
      const valorNominalMedExterna = [];

      const valorIndicadoMedInterna = [];
      const valorNominalMedInterna = [];

      const valorNominalMedRessalto = [];
      const valorIndicadoMedRessalto = [];

      const valorNominalMedProfundidade = [];
      const valorIndicadoMedProfundidade = [];

      // MEDIÇÃO DE PROFUNDIDADE
      for (let i = 0; i < 3; i++) {
        // TODO: funcionando
        const rowValuesIndicado = [];
        const valueNominal = parseFloat(data[`vnmp${i + 1}`]);

        for (let j = 0; j < 3; j++) {
          const valueIndicado = parseFloat(data[`vimp${i * 3 + j + 1}`]);
          rowValuesIndicado.push(valueIndicado);
        }

        valorNominalMedProfundidade.push(valueNominal);
        valorIndicadoMedProfundidade.push(rowValuesIndicado);
      }

      // MEDIÇÃO INTERNA
      for (let i = 0; i < 3; i++) {
        // TODO:funcionando
        const rowValuesIndicado = [];
        const valueNominal = parseFloat(data[`vnmi${i + 1}`]);

        for (let j = 0; j < 3; j++) {
          const valueIndicado = parseFloat(data[`vimi${i * 3 + j + 1}`]);
          rowValuesIndicado.push(valueIndicado);
        }

        valorNominalMedInterna.push(valueNominal);
        valorIndicadoMedInterna.push(rowValuesIndicado);
      }

      // MEDIÇÃO DE RESSALTO
      for (let i = 0; i < 3; i++) {
        // TODO: funcionando
        const rowValuesIndicadoRessalto = [];
        const valueNominalMedRessalto = parseFloat(data[`vnmr${i + 1}`]);

        for (let j = 0; j < 3; j++) {
          const valueIndicadoRessalto = parseFloat(
            data[`vimr${i * 3 + j + 1}`]
          );
          rowValuesIndicadoRessalto.push(valueIndicadoRessalto);
        }

        valorIndicadoMedRessalto.push(rowValuesIndicadoRessalto);

        valorNominalMedRessalto.push(valueNominalMedRessalto);
      }

      // MEDIÇÃO EXTERNA
      for (let i = 0; i < 5; i++) {
        // TODO: TEM QUE ARRUMAR ESSA BOMBAAAAAAAAAAAAAA
        const rowValuesIndicado = [];
        const valueNominal = parseFloat(data[`vn${i + 1}`]);

        for (let j = 0; j < 6; j++) {
          const valueIndicado = parseFloat(data[`vi${i * 3 + j + 1}`]);
          rowValuesIndicado.push(valueIndicado);
        }

        valorNominalMedExterna.push(valueNominal);
        valorIndicado.push(rowValuesIndicado);
      }

      // VALOR INDICADO PROXIMO DA ORELHA
      const valorIndicadoProxOrelhas = [
        // TODO: funcionando
        [
          parseFloat(data.vipo1),
          parseFloat(data.vipo2),
          parseFloat(data.vipo3),
        ],
        [
          parseFloat(data.vipo4),
          parseFloat(data.vipo5),
          parseFloat(data.vipo6),
        ],
      ];

      // VALOR INDICADO AFASTADO DA ORELHA
      const valorIndicadoAfasOrelhas = [
        // TODO: funcionando
        [
          parseFloat(data.viao1),
          parseFloat(data.viao2),
          parseFloat(data.viao3),
        ],
        [
          parseFloat(data.viao4),
          parseFloat(data.viao5),
          parseFloat(data.viao6),
        ],
      ];

      // VALOR NOMINAL PARARELISMO
      // TODO: funcionando
      const valorNominalPara = [parseFloat(data.vnp1), parseFloat(data.vnp2)];

      // Estrutura os dados totais a serem enviados para a API
      const dataTotal = {
        valorIndicado,
        valorNominalMedExterna,
        valorIndicadoProxOrelhas,
        valorIndicadoAfasOrelhas,
        valorNominalPara,
        valorIndicadoMedInterna,
        valorNominalMedInterna,
        valorNominalMedRessalto,
        valorIndicadoMedRessalto,
        valorIndicadoMedProfundidade,
        valorNominalMedProfundidade,
      };

      console.log(dataTotal);

      // const response = await registerCalcPaq(dataTotal);
      // setResponse(response.data);

      // return Toast.fire({
      //   title: `${response.data}`,
      //   icon: "success",
      // });
    } catch (error) {
      // Retorna o erro
      return Toast.fire({
        title: `${error}`,
        icon: "error",
      });
    }
  }

  return (
    <div>
      <Menu />
      {/* form */}
      <form
        className="flex flex-col w-full items-center "
        onSubmit={handleSubmit(handleCalculate)}
      >
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
            {/* TABELA */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead rowSpan={2} className="text-center border">
                    Valor Nominal
                  </TableHead>
                  <TableHead
                    colSpan="3"
                    scope="col"
                    className="text-center border"
                  >
                    Valor Indicado
                  </TableHead>
                  <TableHead
                    rowSpan="2"
                    scope="row"
                    className="text-center border"
                  >
                    Tendência
                  </TableHead>
                  <TableHead rowSpan={2} className="text-center border">
                    Valor Nominal
                  </TableHead>
                  <TableHead
                    colSpan={3}
                    scope="col"
                    className="text-center border"
                  >
                    Valor Indicado
                  </TableHead>
                  <TableHead
                    rowSpan={2}
                    scope="row"
                    className="text-center border"
                  >
                    Tendência
                  </TableHead>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center ">1</TableCell>
                  <TableCell className="border text-center ">2</TableCell>
                  <TableCell className="border text-center ">3</TableCell>
                  <TableCell className="border text-center ">1</TableCell>
                  <TableCell className="border text-center ">2</TableCell>
                  <TableCell className="border text-center ">3</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 5 }, (_, index) => (
                  <TableRow key={index}>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vn${index + 1}`)}
                      />
                    </TableCell>
                    {/* Valores de vi para as orelhas */}
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vi${index * 3 + 1}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vi${index * 3 + 2}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vi${index * 3 + 3}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center "></TableCell>
                    {/* Valores de vi para os bicos */}
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vn${index + 1}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vi${index * 3 + 4}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vi${index * 3 + 5}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vi${index * 3 + 6}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase mt-10">
            paralelismo
          </h4>
          <div className="px-10 py-5">
            {/* TABELA */}
            <Table>
              {/* PARTE 1 DA TABELA */}
              <TableHeader>
                <TableRow className="">
                  <TableHead rowSpan={1} className="text-center border">
                    Valor Nominal
                  </TableHead>
                  <TableHead
                    colSpan="3"
                    scope="col"
                    className="text-center border"
                  >
                    Valor Indicado( Orelhas )
                  </TableHead>
                  <TableHead
                    rowSpan="2"
                    scope="row"
                    className="text-center border"
                  >
                    Tendência
                  </TableHead>
                  <TableHead rowSpan={2} className="text-center border">
                    Paralelismo
                  </TableHead>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("vnp1")}
                    />
                  </TableCell>
                  <TableCell className="border text-center ">1</TableCell>
                  <TableCell className="border text-center ">2</TableCell>
                  <TableCell className="border text-center ">3</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="">
                  <TableCell className="border text-center">
                    Valor ind. próximo da escala
                  </TableCell>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("vipo1")}
                    />
                  </TableCell>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("vipo2")}
                    />
                  </TableCell>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("vipo3")}
                    />
                  </TableCell>

                  <TableCell className="border text-senter">#DIV/0!</TableCell>
                  <TableCell className="border  text-center" rowSpan={2}>
                    #DIV/0!
                  </TableCell>
                </TableRow>
                <TableRow className="">
                  <TableCell className="border text-center">
                    Valor ind. afastado da escala
                  </TableCell>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("viao1")}
                    />
                  </TableCell>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("viao2")}
                    />
                  </TableCell>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("viao3")}
                    />
                  </TableCell>

                  <TableCell className="text-center border">#DIV/0!</TableCell>
                </TableRow>
              </TableBody>

              {/* PARTE 2 DA TABELA */}
              <TableHeader>
                <TableRow className="">
                  <TableHead rowSpan={1} className="text-center border">
                    Valor Nominal
                  </TableHead>
                  <TableHead
                    colSpan="3"
                    scope="col"
                    className="text-center border"
                  >
                    Valor Indicado( Bicos )
                  </TableHead>
                  <TableHead
                    rowSpan="2"
                    scope="row"
                    className="text-center border"
                  >
                    Tendência
                  </TableHead>
                  <TableHead rowSpan={2} className="text-center border">
                    Paralelismo
                  </TableHead>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("vnp2")}
                    />
                  </TableCell>
                  <TableCell className="border text-center ">1</TableCell>
                  <TableCell className="border text-center ">2</TableCell>
                  <TableCell className="border text-center ">3</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border text-center">
                    Valor ind. próximo da escala
                  </TableCell>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("vipo4")}
                    />
                  </TableCell>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("vipo5")}
                    />
                  </TableCell>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("vipo6")}
                    />
                  </TableCell>

                  <TableCell className="text-center border">#DIV/0!</TableCell>
                  <TableCell className="border text-center" rowSpan={2}>
                    #DIV/0!
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">
                    Valor ind. afastado da escala
                  </TableCell>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("viao4")}
                    />
                  </TableCell>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("viao5")}
                    />
                  </TableCell>
                  <TableCell className="border text-center p-0">
                    <input
                      className="p-5 w-full h-full"
                      type="text"
                      {...register("viao6")}
                    />
                  </TableCell>

                  <TableCell className="border text-center">#DIV/0!</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase mt-10">
            medição interna
          </h4>
          <div className="px-10 py-5">
            {/* TABELA */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead
                    colSpan="5"
                    scope="col"
                    className="border text-center"
                  >
                    Medição Interna
                  </TableHead>
                  <TableHead
                    colSpan="5"
                    scope="col"
                    className="border text-center"
                  >
                    Medição de Ressalto
                  </TableHead>
                </TableRow>
                <TableRow className="">
                  <TableHead rowSpan={2} className="text-center border">
                    Valor Nominal
                  </TableHead>
                  <TableHead
                    colSpan="3"
                    scope="col"
                    className="text-center border"
                  >
                    Valor Indicado
                  </TableHead>
                  <TableHead
                    rowSpan="2"
                    scope="row"
                    className="text-center border"
                  >
                    Tendência
                  </TableHead>
                  <TableHead rowSpan={2} className="text-center border">
                    Valor Nominal
                  </TableHead>
                  <TableHead
                    colSpan="3"
                    scope="col"
                    className="text-center border"
                  >
                    Valor Indicado
                  </TableHead>
                  <TableHead
                    rowSpan="2"
                    scope="row"
                    className="text-center border "
                  >
                    Tendência
                  </TableHead>
                </TableRow>

                <TableRow className="">
                  <TableCell className="border text-center ">1</TableCell>
                  <TableCell className="border text-center ">2</TableCell>
                  <TableCell className="border text-center ">3</TableCell>
                  <TableCell className="border text-center ">1</TableCell>
                  <TableCell className="border text-center ">2</TableCell>
                  <TableCell className="border text-center ">3</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 3 }, (_, index) => (
                  <TableRow key={index}>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vnmi${index + 1}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vimi${index * 3 + 1}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vimi${index * 3 + 2}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vimi${index * 3 + 3}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center "></TableCell>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vnmr${index + 1}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vimr${index * 3 + 1}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vimr${index * 3 + 2}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center p-0">
                      <input
                        className="p-5 w-full h-full"
                        type="text"
                        {...register(`vimr${index * 3 + 3}`)}
                      />
                    </TableCell>
                    <TableCell className="border text-center"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase mt-10">
            medição de profundidade
          </h4>

          <div className="flex flex-col justify-between w-full py-7 px-10">
            {/* div parte de cima */}
            <div className="flex flex-row justify-between w-full gap-10">
              <div className="w-2/4 h-30">
                <Table>
                  <TableHeader>
                    <TableRow className="">
                      <TableHead rowSpan={3} className="border text-center ">
                        Valor Nominal
                      </TableHead>
                      <TableHead colSpan={3} className="border text-center">
                        Valor Indicado
                      </TableHead>
                      <TableHead rowSpan={2} className="border text-center ">
                        Tendência
                      </TableHead>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border text-center ">1</TableCell>
                      <TableCell className="border text-center ">2</TableCell>
                      <TableCell className="border text-center ">3</TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 3 }, (_, index) => (
                      <TableRow key={index}>
                        <TableCell className="border text-center p-0">
                          <input
                            className="p-5 w-full h-full"
                            type="text"
                            {...register(`vnmp${index + 1}`)}
                          />
                        </TableCell>
                        <TableCell className="border text-center p-0">
                          <input
                            className="p-5 w-full h-full"
                            type="text"
                            {...register(`vimp${index * 3 + 1}`)}
                          />
                        </TableCell>
                        <TableCell className="border text-center p-0">
                          <input
                            className="p-5 w-full h-full"
                            type="text"
                            {...register(`vimp${index * 3 + 2}`)}
                          />
                        </TableCell>
                        <TableCell className="border text-center p-0">
                          <input
                            className="p-5 w-full h-full"
                            type="text"
                            {...register(`vimp${index * 3 + 3}`)}
                          />
                        </TableCell>
                        <TableCell className="border text-center "></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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
                    <Label className="font-bold	text-md w-[20%]">Técnico:</Label>
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
                    <p className="text-[#111827] text-md font-bold">1017709 </p>
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
          <Button className="w-[200px]" type="submit">
            Adicionar
          </Button>
          <Button className="w-[200px] border-[#858585] border-2 bg-transparent text-[#949494] font-semibold hover:bg-[#858585] hover:text-white">
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
