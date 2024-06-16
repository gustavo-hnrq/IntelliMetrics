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
import { resultadoCalcPaq } from "@/services/paquimetro";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function ResulPaquimetro() {
  const [response, setResponse] = useState("");
  const { register, handleSubmit } = useForm();

  // BIBLIOTECA PARA RETORNAR MENSAGEM DA RESPOSTA DA API
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  async function handleCalculate(data) {
    try {
      const valorIndicado = [];
      const valorNominalMedExterna = [];

      const valorIndicadoMedInterna = [];
      const valorNominalMedInterna = [];

      const valorNominalMedRessalto = [];
      const valorIndicadoMedRessalto = [];

      const valorNominalMedProf = [];
      const valorIndicadoMedProf = [];

      // MEDIÇÃO DE PROFUNDIDADE
      for (let i = 0; i < 3; i++) {
        const rowValuesIndicado = [];
        const valueNominal = parseFloat(data[`vnmp${i + 1}`]);

        for (let j = 0; j < 3; j++) {
          const valueIndicado = parseFloat(data[`vimp${i * 3 + j + 1}`]);
          if (!isNaN(valueIndicado)) {
            rowValuesIndicado.push(valueIndicado);
          }
        }

        if (!isNaN(valueNominal)) {
          valorNominalMedProf.push(valueNominal);
        }
        if (rowValuesIndicado.length > 0) {
          valorIndicadoMedProf.push(rowValuesIndicado);
        }
      }

      // MEDIÇÃO INTERNA
      for (let i = 0; i < 3; i++) {
        const rowValuesIndicado = [];
        const valueNominal = parseFloat(data[`vnmi${i + 1}`]);

        for (let j = 0; j < 3; j++) {
          const valueIndicado = parseFloat(data[`vimi${i * 3 + j + 1}`]);
          if (!isNaN(valueIndicado)) {
            rowValuesIndicado.push(valueIndicado);
          }
        }

        if (!isNaN(valueNominal)) {
          valorNominalMedInterna.push(valueNominal);
        }
        if (rowValuesIndicado.length > 0) {
          valorIndicadoMedInterna.push(rowValuesIndicado);
        }
      }

      // MEDIÇÃO DE RESSALTO
      for (let i = 0; i < 3; i++) {
        const rowValuesIndicadoRessalto = [];
        const valueNominalMedRessalto = parseFloat(data[`vnmr${i + 1}`]);

        for (let j = 0; j < 3; j++) {
          const valueIndicadoRessalto = parseFloat(
            data[`vimr${i * 3 + j + 1}`]
          );
          if (!isNaN(valueIndicadoRessalto)) {
            rowValuesIndicadoRessalto.push(valueIndicadoRessalto);
          }
        }

        if (!isNaN(valueNominalMedRessalto)) {
          valorNominalMedRessalto.push(valueNominalMedRessalto);
        }
        if (rowValuesIndicadoRessalto.length > 0) {
          valorIndicadoMedRessalto.push(rowValuesIndicadoRessalto);
        }
      }

      // MEDIÇÃO EXTERNA
      for (let i = 0; i < 5; i++) {
        const valueNominal1 = parseFloat(data[`vn1${i * 1 + 1}`]); // Dados com índice i + 1
        const valueNominal2 = parseFloat(data[`vn2${i + 2}`]); // Dados com índice i + 1

        if (!isNaN(valueNominal1)) {
          valorNominalMedExterna.push(valueNominal1);
        }
        if (!isNaN(valueNominal2)) {
          valorNominalMedExterna.push(valueNominal2);
        }

        const rowValuesIndicado1 = [];
        const  rowValuesIndicado2 = [];
       // Coleta dos valores indicados
        for (let i = 0; i < 6; i++) {
    
          for (let j = 0; j < 3; j++) {
            const valueIndicado1 = parseFloat(data[`vi${i * 6 + j + 1}`]);
            if (!isNaN(valueIndicado1)) {
              rowValuesIndicado1.push(valueIndicado1);
            }
          }

          for (let j = 0; j < 3; j++) {
            const valueIndicado2 = parseFloat(data[`vi${i * 6 + j + 4}`]);
            if (!isNaN(valueIndicado2)) {
              rowValuesIndicado2.push(valueIndicado2);
            }
          }

          if (rowValuesIndicado1.length > 0) {
            valorIndicado.push(rowValuesIndicado1);
          }
          if (rowValuesIndicado2.length > 0) {
            valorIndicado.push(rowValuesIndicado2);
          }
        }
      // console.log("1",rowValuesIndicado1)
      // console.log("2",rowValuesIndicado2)
      }
      
      // VALOR INDICADO PROXIMO DA ORELHA
      const valorIndicadoProxOrelhas = [
        [
          parseFloat(data.vipo1),
          parseFloat(data.vipo2),
          parseFloat(data.vipo3),
        ],
      ].map((arr) => arr.filter((value) => !isNaN(value)));

      // VALOR INDICADO PROXIMO DA BICOS
      const valorIndicadoProxBicos = [
        [
          parseFloat(data.vipo4),
          parseFloat(data.vipo5),
          parseFloat(data.vipo6),
        ],
      ].map((arr) => arr.filter((value) => !isNaN(value)));

      // VALOR INDICADO AFASTADO DA ORELHA
      const valorIndicadoAfasOrelhas = [
        [
          parseFloat(data.viao1),
          parseFloat(data.viao2),
          parseFloat(data.viao3),
        ],
      ].map((arr) => arr.filter((value) => !isNaN(value)));

      // VALOR INDICADO AFASTADO DA BICO
      const valorIndicadoAfasBicos = [
        [
          parseFloat(data.viao4),
          parseFloat(data.viao5),
          parseFloat(data.viao6),
        ],
      ].map((arr) => arr.filter((value) => !isNaN(value)));

      // VALOR NOMINAL PARARELISMO
      const valorNominalPara = [
        parseFloat(data.vnp1),
        parseFloat(data.vnp2),
      ].filter((value) => !isNaN(value));

      // salva a faixa e a resolucao no local storage para ser usada em incerteza
      localStorage.setItem("faixaNominal", data.faixaNominal)
      localStorage.setItem("resolucao", data.resolucao)
    

      // Estrutura os dados totais a serem enviados para a API
      const dataTotal = {
        valorIndicado,
        valorNominalMedExterna,
        valorIndicadoProxBicos,
        valorIndicadoAfasBicos,
        valorIndicadoProxOrelhas,
        valorIndicadoAfasOrelhas,
        valorNominalPara,
        valorIndicadoMedInterna,
        valorNominalMedInterna,
        valorNominalMedRessalto,
        valorIndicadoMedRessalto,
        valorIndicadoMedProf,
        valorNominalMedProf,
      };
      // console.log("data", dataTotal.valorIndicado)
      const response = await resultadoCalcPaq(dataTotal);
      setResponse(response.data);
     
      return Toast.fire({
        title: `Calculos realizados`,
        icon: "success",
      });
    } catch (error) {
      return Toast.fire({
        title: `${error}`,
        icon: "error",
      });
    }
  }

  const { medicaoExterna: { 
    resultado1 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultado2 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultado3 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultado4 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultado5 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultado6 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultado7 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultado8 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultado9 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultado10 = {tendencia: "#DIV/0", desvpad: "#DIV/0"}
  } = {} } = response || {}; 
   
  const {calculos_Pararelismo_Orelhas: {
    resultado_Orelhas = {tendencia_proximo: "#DIV/0", tendencia_afastado: "#DIV/0", paralelismo_Orelhas: "#DIV/0"}
  } ={} } = response || {};

  const {calculos_Pararelismo_Bicos: {
    resultado_Bicos = {tendencia_proximo: "#DIV/0", tendencia_afastado: "#DIV/0",  paralelismo_Orelhas: "#DIV/0"}
  } ={} } = response || {};

  const {tendencias_Medicao_Interna: {
    resultadoMedIn1 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultadoMedIn2 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultadoMedIn3 = {tendencia: "#DIV/0", desvpad: "#DIV/0"}
  } = {} } = response || {};

  const {tendencias_Medicao_Ressalto: {
    resultadoResal1 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultadoResal2 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultadoResal3 = {tendencia: "#DIV/0", desvpad: "#DIV/0"}
  } = {} } = response || {}

  const {tendencias_Medicao_Profundidade: {
    resultadoProf1 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultadoProf2 = {tendencia: "#DIV/0", desvpad: "#DIV/0"},
    resultadoProf3 = {tendencia: "#DIV/0", desvpad: "#DIV/0"}
  } = {}} = response || {}

  const tendenciasMedEx = [resultado1.tendencia, resultado2.tendencia, resultado3.tendencia, resultado4.tendencia, resultado5.tendencia, resultado6.tendencia]
  const tendenciasMedEx2 = [resultado7.tendencia, resultado8.tendencia, resultado9.tendencia, resultado10.tendencia, ]
  const tendenciasProf = [resultadoProf1.tendencia, resultadoProf2.tendencia, resultadoProf3.tendencia];
  const tendenciasMedIn = [resultadoMedIn1.tendencia, resultadoMedIn2.tendencia, resultadoMedIn3.tendencia ];
  const tendenciasMedResal = [resultadoResal1.tendencia, resultadoResal2.tendencia, resultadoResal3.tendencia]


  const desvpads = {};

  // Função para extrair os desvpads de um objeto e adicionar ao objeto desvpads
  const extractDesvpads = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key].hasOwnProperty('desvpad')) {
        desvpads[key] = obj[key].desvpad;
      }
    }
  };

  // Percorre os diferentes grupos de resultados em response e extrai os desvpads
  extractDesvpads(response.medicaoExterna);
  extractDesvpads(response.calculos_Pararelismo_Orelhas);
  extractDesvpads(response.calculos_Pararelismo_Bicos);
  extractDesvpads(response.tendencias_Medicao_Interna);
  extractDesvpads(response.tendencias_Medicao_Ressalto);
  extractDesvpads(response.tendencias_Medicao_Profundidade);

  const desvpadsJSON = JSON.stringify(desvpads)
  localStorage.setItem("DesvpadsPac", desvpadsJSON)


  console.log("response", response)
  return (
    <div>
      <Menu />
      {/* form */}
      <form
        className="flex flex-col w-full items-center "
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
                  <Input type="text" placeholder="Digite o nome..." {...register("faixaNominal")}/>
                </div>
              </div>
              <div className="flex flex-row w-full justify-between  gap-3 ">
                <div className="flex flex-row gap-3 items-center w-[60%]">
                  <Label className="font-bold text-[#3F3F3F] text-sm  w-[20%] ">
                    Resolução
                  </Label>
                  <Input type="text" placeholder="Digite o nome..." {...register("resolucao")}/>
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
              {Array.from({ length: 6 }, (_, index) => (
              <tr key={index}>
                <td className="border text-center p-0">
                  <input className="p-5 w-full h-full" type="text" {...register(`vn1${index + 1}`)} />
                </td>
                <td className="border text-center p-0">
                  <input className="p-5 w-full h-full" type="text" {...register(`vi${index * 6 + 1}`)} />
                </td>
                <td className="border text-center p-0">
                  <input className="p-5 w-full h-full" type="text" {...register(`vi${index * 6 + 2}`)} />
                </td>
                <td className="border text-center p-0">
                  <input className="p-5 w-full h-full" type="text" {...register(`vi${index * 6 + 3}`)} />
                </td>
                <td className="border text-center">{tendenciasMedEx[index]}</td>
                <td className="border text-center p-0">
                  <input className="p-5 w-full h-full" type="text" {...register(`vn2${index + 1}`)} />
                </td>
                <td className="border text-center p-0">
                  <input className="p-5 w-full h-full" type="text" {...register(`vi${index * 6 + 4}`)} />
                </td>
                <td className="border text-center p-0">
                  <input className="p-5 w-full h-full" type="text" {...register(`vi${index * 6 + 5}`)} />
                </td>
                <td className="border text-center p-0">
                  <input className="p-5 w-full h-full" type="text" {...register(`vi${index * 6 + 6}`)} />
                </td>
                <td className="border text-center">{tendenciasMedEx2[index]}</td>
              </tr>
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

                  <TableCell className="border text-senter">{resultado_Orelhas.tendencia_proximo}</TableCell>
                  <TableCell className="border text-center" rowSpan={2}>
                   {resultado_Orelhas.paralelismo_Orelhas}
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

                  <TableCell className="text-center border">{resultado_Orelhas.tendencia_afastado}</TableCell>
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

                  <TableCell className="text-center border">{resultado_Bicos.tendencia_proximo}</TableCell>
                  <TableCell className="border text-center" rowSpan={2}>
                    {resultado_Bicos.paralelismo_Orelhas}
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

                  <TableCell className="border text-center">{resultado_Bicos.tendencia_afastado}</TableCell>
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
                    <TableCell className="border text-center ">{tendenciasMedIn[index]}</TableCell>
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
                    <TableCell className="border text-center">{tendenciasMedResal[index]}</TableCell>
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
                        <TableCell className="border text-center ">{tendenciasProf[index]}</TableCell>
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
          <Button className="w-[200px]" type="submit" onClick={handleSubmit(handleCalculate)}>
            Calcular
          </Button>
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
