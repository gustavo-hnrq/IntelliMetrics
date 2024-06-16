import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import selo from "../../../assets/selo certificado.png";
import senai from "../../../assets/Senai Logotipo_destaque.png";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useForm } from "react-hook-form";
import { incertezaCalcPaq } from "@/services/paquimetro";


export default function CertPaquimetro() {

  const [response, setResponse] = useState("");
  const [desvpadSave, setDesvpadSave] = useState("")
  const { handleSubmit } = useForm();

  async function handleCalculate() {
    const resolucao = localStorage.getItem("resolucao")
    const faixaNominal = localStorage.getItem("faixaNominal")
    const desvpads = localStorage.getItem("DesvpadsPac")

    console.log("faixa nominal", faixaNominal)
   // Passo 2: Converter a string JSON em um objeto JavaScript
    const desvpadsObj = JSON.parse(desvpads);
    setDesvpadSave(desvpadsObj)

    // Passo 3: Inicializar uma lista para armazenar os valores
    const valores = [];

    // Passo 4: Iterar sobre as chaves do objeto e adicionar os valores à lista
    for (let chave in desvpadsObj) {
        if (desvpadsObj.hasOwnProperty(chave)) {
            valores.push(desvpadsObj[chave]);
        }
    }
   
    const data ={
      resolucao: resolucao,
      faixaNominal: parseInt(faixaNominal),
      desvpad: valores

    }

    const response = await incertezaCalcPaq(data);
    setResponse(response.data);

  }

  const { incertezaUE = {K: "#DIV/0", UE: "#DIV/0"} } = {} = response || {}
  const { incerteza_L1 = {Estimativa_L1: 0, incerteza_L1: "#DIV/0", contribuiçao_Incerteza: "#DIV/0"} } = {} = response || {}
  const { incerteza_L2 = {Estimativa_L2: 0, incerteza_L2: "#DIV/0", contribuiçao_Incerteza: "#DIV/0"} } = {} = response || {}
  const { incerteza_UA = {estimativa_UA: 0, incerteza_Padrao: "#DIV/0", contribuiçao_Incerteza: "#DIV/0"}} = {} = response || {}
  const { incerteza_UC = {UC: 0, veff: "#DIV/0"}} = {} = response || {}
  const { incerteza_UP_EA = {Estimativa_UP_EA: 0, incerteza_Padrao: "#DIV/0", contribuiçao_Incertezao_UP: "#DIV/0", incerteza_EA: "#DIV/0", contribuiçao_Incertezao_EA: "#DIV/0"} } = {} = response || {}
  const { inceteza_ERES = {Estimativa_ERES: 0, incerteza_ERES: "#DIV/0", contribuiçao_Incerteza: "#DIV/0"} } = {} = response || {}

 
  console.log("response incer", response)
  console.log("des", desvpadSave.resultado1)

    return (

      <div className="w-full">
        <form class="flex flex-col  items-center">
              <div className="flex flex-col justify-between w-[90%] border  rounded-lg bg-[#FCFCFC]">
                <div className="p-6">
                  <h1 className="text-black font-bold text-3xl">
                    Incerteza De Medição De Paquimetro
                  </h1>
                </div>


                <div className="w-full p-6">
                <div>
                    <Table className="border-2 justify-center w-[95%]">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-center">Padrões Escalonados</TableHead>
                          <TableHead className="text-center">U maior</TableHead>
                          <TableHead className="text-center">Cliente</TableHead>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-center">Valor Nominal</TableCell>
                          <TableCell className="text-center">U (um)</TableCell>
                          <TableCell className="text-center">Nr. certificado</TableCell>
                          <TableCell className="text-center">0</TableCell>
                          <TableCell className="text-center">Data de Calibração</TableCell>
                          <TableCell className="text-center">00/01/1900</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-center">150</TableCell>
                          <TableCell className="text-center">2,00</TableCell>
                          <TableCell className="text-center">Objeto de Medição</TableCell>
                          <TableCell className="text-center">Paquimetro Universal Analógico</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-center">200</TableCell>
                          <TableCell className="text-center">2,00</TableCell>
                          <TableCell className="text-center">Cap. de Medição</TableCell>
                          <TableCell className="text-center">0 mm</TableCell>
                          <TableCell className="text-center">Valor de uma div/res</TableCell>
                          <TableCell className="text-center">0 mm</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="text-center">250</TableCell>
                          <TableCell className="text-center">2,00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-center">300</TableCell>
                          <TableCell className="text-center">2,00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-center">450</TableCell>
                          <TableCell className="text-center">3,00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-center">500</TableCell>
                          <TableCell className="text-center">3,00</TableCell>
                        </TableRow>
                      </TableBody>
                  </Table>
                  </div>
                </div>

                <div className=" flex flex-row py-3 bg-[#DBDBDB]">
                  <h4 className="text-black font-extrabold text-3xl text-base w-full  px-4 uppercase">
                    Incerteza da Medição</h4>
                  <h4 className="text-black font-extrabold text-3xl text-base w-full  px-4 uppercase">
                    Paquimetro Universal Analógico</h4>
                </div>

                
                <div className="w-full justify-center p-6">
                <div>
                    <Table className="border-2  w-[95%]">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-center">GRANDEZA</TableHead>
                          <TableHead className="text-center" colSpan={2}>ESTIMATIVA</TableHead>
                          <TableHead className="text-center">INCERTEZA PADRÃO</TableHead>
                          <TableHead className="text-center" colSpan={2}>DISTRIBUIÇAO DE PROBABILIDADE</TableHead>
                          <TableHead className="text-center">COEFICIENTE DE SENSIBILIDADE</TableHead>
                          <TableHead className="text-center">CONTRIBUIÇÃO PARA A INCERTEZA</TableHead>
                          <TableHead className="text-center">GRAUS DE LIBERDADE</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-center">Xi</TableCell>
                          <TableCell className="text-center"colSpan={2}>Xi</TableCell>
                          <TableCell className="text-center">Ui(Xi)mm</TableCell>
                          <TableCell className="text-center">tipo</TableCell>
                          <TableCell className="text-center">divisor (k)</TableCell>
                          <TableCell className="text-center">Ci</TableCell>
                          <TableCell className="text-center">Ui(y)mm</TableCell>
                          <TableCell className="text-center">Vi ouVeff</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead className="text-center">UA</TableHead>
                            <TableCell className="text-center" colSpan={2}>{incerteza_UA.estimativa_UA}  mm</TableCell>
                            <TableCell className="text-center">{incerteza_UA.incerteza_Padrao}</TableCell>
                            <TableCell className="text-center">normal</TableCell>
                            <TableCell className="text-center">1</TableCell>
                            <TableCell className="text-center">1</TableCell>
                            <TableCell className="text-center">{incerteza_UA.contribuiçao_Incerteza}</TableCell>
                            <TableCell className="text-center">2</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead className="text-center">UP.</TableHead>
                            <TableCell className="text-center" colSpan={2}>{incerteza_UP_EA.Estimativa_UP_EA}  mm</TableCell>
                            <TableCell className="text-center">{incerteza_UP_EA.incerteza_Padrao}</TableCell>
                            <TableCell className="text-center">normal</TableCell>
                            <TableCell className="text-center">2</TableCell>
                            <TableCell className="text-center">1</TableCell>
                            <TableCell className="text-center">{incerteza_UP_EA.contribuiçao_Incertezao_UP}</TableCell>
                            <TableCell className="text-center">Infinito</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead className="text-center">Ea</TableHead>
                            <TableCell className="text-center" colSpan={2}>{incerteza_UP_EA.incerteza_EA}  mm</TableCell>
                            <TableCell className="text-center">0,00014</TableCell>
                            <TableCell className="text-center">retangular</TableCell>
                            <TableCell className="text-center">1,732</TableCell>
                            <TableCell className="text-center">1</TableCell>
                            <TableCell className="text-center">{incerteza_UP_EA.contribuiçao_Incertezao_EA}</TableCell>
                            <TableCell className="text-center">Infinito</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead className="text-center">Eres.</TableHead>
                            <TableCell className="text-center" colSpan={2}>{inceteza_ERES.Estimativa_ERES}  mm</TableCell>
                            <TableCell className="text-center">{inceteza_ERES.incerteza_ERES}</TableCell>
                            <TableCell className="text-center">retangular</TableCell>
                            <TableCell className="text-center">1,732</TableCell>
                            <TableCell className="text-center">1</TableCell>
                            <TableCell className="text-center">{inceteza_ERES.contribuiçao_Incerteza}</TableCell>
                            <TableCell className="text-center">Infinito</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead className="text-center">l1</TableHead>
                            <TableCell className="text-center" colSpan={2}>{incerteza_L1.Estimativa_L1}  mmx10-6x2°C-1</TableCell>
                            <TableCell className="text-center">{incerteza_L1.incerteza_L1}</TableCell>
                            <TableCell className="text-center">retangular</TableCell>
                            <TableCell className="text-center">1,732</TableCell>
                            <TableCell className="text-center">1</TableCell>
                            <TableCell className="text-center">{incerteza_L1.contribuiçao_Incerteza}</TableCell>
                            <TableCell className="text-center">Infinito</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead className="text-center">l2</TableHead>
                            <TableCell className="text-center" colSpan={2}>maior compr x[(11.5x10-6ºC-1+11.5x10-6ºC-1)/2]x1ºC</TableCell>
                            <TableCell className="text-center">{incerteza_L2.incerteza_L2}</TableCell>
                            <TableCell className="text-center">retangular</TableCell>
                            <TableCell className="text-center">1,732</TableCell>
                            <TableCell className="text-center">1</TableCell>
                            <TableCell className="text-center">{incerteza_L2.contribuiçao_Incerteza}</TableCell>
                            <TableCell className="text-center">Infinito</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead className="text-center">Uc</TableHead>
                            <TableCell className="text-center">0</TableCell>
                            <TableCell className="text-center"> <input type="text" className="bg-gray-200 w-24 justify-center"/> </TableCell>
                            <TableCell className="text-center"> <input type="text" className="bg-gray-200 w-24 justify-center"/> </TableCell>
                            <TableCell className="text-center"> <input type="text" className="bg-gray-200 w-24 justify-center"/> </TableCell>
                            <TableCell className="text-center"> <input type="text" className="bg-gray-200 w-24 justify-center"/> </TableCell>
                            <TableCell className="text-center">Uc=</TableCell>
                            <TableCell className="text-center">{incerteza_UC.UC}</TableCell>
                            <TableCell className="text-center">Veff = {incerteza_UC.veff}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHead className="text-center">UF</TableHead>
                          <TableCell className="text-center">0</TableCell>
                          <TableCell className="text-center"> <input type="text" className="bg-gray-200 w-24 justify-center"/> </TableCell>
                          <TableCell className="text-center"> <input type="text" className="bg-gray-200 w-24 justify-center"/> </TableCell>
                          <TableCell className="text-center" colSpan={2}>K=  {incertezaUE.K}</TableCell>
                          <TableCell className="text-center">UF=</TableCell>
                          <TableCell className="text-center">{incertezaUE.UE}</TableCell>
                          <TableCell className="text-center"> <input type="text" className="bg-gray-200 w-24 justify-center"/> </TableCell>
                        </TableRow>
                      </TableBody>
                  </Table>
                  </div>
                </div>

                <div className="py-3 bg-[#DBDBDB]">
                  <h4 className="text-black font-extrabold text-3xl text-base w-full  px-4 uppercase">
                    Incerteza da Medição</h4>
                </div>


                <div className="w-full p-6">
                <div>
                    <Table className="border-2 justify-center w-[95%]">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-center">Valor Nominal</TableHead>
                          <TableHead className="text-center">Desvpad</TableHead>
                          <TableHead className="text-center">Valor Nominal</TableHead>
                          <TableHead className="text-center">Desvpad</TableHead>
                          <TableHead className="text-center"></TableHead>
                          <TableHead className="text-center">Desvpad</TableHead>
                          <TableHead className="text-center"></TableHead>
                          <TableHead className="text-center">Desvpad</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                            <TableCell className="text-center">0,00</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultado1}</TableCell>
                            <TableCell className="text-center">150,00</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultado7}</TableCell>
                            <TableCell className="text-center">Medição da orelha</TableCell>
                            <TableCell className="text-center"></TableCell>
                            <TableCell className="text-center">Medição interna</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultadoMedIn1}</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultadoMedIn2}</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultadoMedIn3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-center">1,30</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultado2}</TableCell>
                            <TableCell className="text-center">6,00</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultado8}</TableCell>
                            <TableCell className="text-center">Valor ind. próximo da escala</TableCell>
                            <TableCell className="text-center">0,0000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-center">1,40</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultado3}</TableCell>
                            <TableCell className="text-center">0,70</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultado9}</TableCell>
                            <TableCell className="text-center">Valor ind. afastado da escala</TableCell>
                            <TableCell className="text-center">0,0000</TableCell>
                            <TableCell className="text-center">Medição de prof.</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultadoProf1}</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultadoProf2}</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultadoProf3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-center">20,00</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultado4}</TableCell>
                            <TableCell className="text-center">10,00</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultado10}</TableCell>
                            <TableCell className="text-center">Medição do bico</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-center">50,00</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultado5}</TableCell>
                            <TableCell className="text-center"> <input type="text" className="bg-gray-200 w-24 justify-center"/> </TableCell>
                            <TableCell className="text-center"> <input type="text" className="bg-gray-200 w-24 justify-center"/> </TableCell>
                            <TableCell className="text-center">Valor ind. próximo da escala</TableCell>
                            <TableCell className="text-center">0,0000</TableCell>
                            <TableCell className="text-center">Medição de Ressalto</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultadoResal1}</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultadoResal2}</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultadoResal3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-center">100,00</TableCell>
                            <TableCell className="text-center">{desvpadSave.resultado6}</TableCell>
                            <TableCell className="text-center"> <input type="text" className="bg-gray-200 w-24 justify-center"/> </TableCell>
                            <TableCell className="text-center"> <input type="text" className="bg-gray-200 w-24 justify-center"/> </TableCell>
                            <TableCell className="text-center">Valor ind. afastado da escala</TableCell>
                            <TableCell className="text-center">0,0000</TableCell>
                        </TableRow>
                      </TableBody>
                  </Table>
                  </div>
                </div>


            </div>


          <div className="w-[90%] flex flex-row justify-end items-center py-5 gap-3">
          <Button className="w-[200px]" type="submit" onClick={handleSubmit(handleCalculate)}>
            Calcular
          </Button>
            <Button className="w-[200px]">Adicionar</Button>
            <Button className="w-[200px] border-[#858585] border-2 bg-transparent text-[#949494] font-semibold hover:bg-[#858585] hover:text-white">
              Cancelar
            </Button>
          </div>
        </form>
      </div>
      
            

    );
}
