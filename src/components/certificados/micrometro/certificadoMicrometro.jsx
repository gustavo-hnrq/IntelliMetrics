import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState, useEffect } from "react";
import selo from "../../../assets/selo certificado.png";
import senai from "../../../assets/Senai Logotipo_destaque.png";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useReactToPrint } from "react-to-print" ;


export default function CertMicrometro() {

  const [response, setResponse] = useState(null);

  useEffect(() => {
    const storedResponse = localStorage.getItem('response');
    if (storedResponse) {
      setResponse(JSON.parse(storedResponse));
    }
  }, []);

  const { controleDimensional: {
    resultadoControle1 = {mediaValor: "#DIV/0", desvioPadrao: "#DIV/0", tendência: "#DIV/0"}, 
    resultadoControle2 = {mediaValor: "#DIV/0", desvioPadrao: "#DIV/0", tendência: "#DIV/0"},
    resultadoControle3 = {mediaValor: "#DIV/0", desvioPadrao: "#DIV/0", tendência: "#DIV/0"}, 
    resultadoControle4 = {mediaValor: "#DIV/0", desvioPadrao: "#DIV/0", tendência: "#DIV/0"}, 
    resultadoControle5 = {mediaValor: "#DIV/0", desvioPadrao: "#DIV/0", tendência: "#DIV/0"}, 
    resultadoControle6 = {mediaValor: "#DIV/0", desvioPadrao: "#DIV/0", tendência: "#DIV/0"}, 
    resultadoControle7 = {mediaValor: "#DIV/0", desvioPadrao: "#DIV/0", tendência: "#DIV/0"}, 
    resultadoControle8 = {mediaValor: "#DIV/0", desvioPadrao: "#DIV/0", tendência: "#DIV/0"}, 
    resultadoControle9 = {mediaValor: "#DIV/0", desvioPadrao: "#DIV/0", tendência: "#DIV/0"}, 
    resultadoControle10 = {mediaValor: "#DIV/0", desvioPadrao: "#DIV/0", tendência: "#DIV/0"}, 
    resultadoControle11 = {mediaValor: "#DIV/0", desvioPadrao: "#DIV/0", tendência: "#DIV/0"} 
  } = {} } = response || {};

  const { calculoPlaneza: { planezaMedia = 0.00000 } = {} } = response || {};
  const { calculoParalelismo: { valorEmMilimetro = 0.0000} = {}} = response || {};
  const {
    incertezaUC =  {UC: '=DIV/0!', veff: '=DIV/0!', K: '#####', U: '#####'},
    incertezaPara50_100 = {K: '=DIV/0!', veff: "#####"},
    incertezaPlaneza50_100 = {K: '=DIV/0!', veff: "#####"}

  } = response || {};

  console.log("eu nao sei",incertezaUC)

  // esta função pega as informações da parte citada, para poder imprimir
  const contentDocument = useRef();
  
  // isto tras as informações para a tema de impreção
  const handlePrint = useReactToPrint({
    content: () => contentDocument.current
  })
    return (
      
            <form class="flex flex-col w-full items-center">
              <div ref={contentDocument} id="relatorio" className="flex flex-col justify-between  border  rounded-lg bg-[#FCFCFC]">

                <div className="flex flex-row justify-between  p-6">
                  <img  className="w-60 h-40" src={senai}/>
                  <div className="static mr-5  w-[70%]">
                    <h1 className="text-black text-center font-bold text-5xl">CERTIFICADO DE CALIBRAÇÃO</h1>
                    <h1 className="text-black text-center font-bold text-3xl">LABORATÓRIO DE CALIBRAÇÃO SUICLAB</h1>
                    <h1 className="text-black text-center font-bold text-2xl">Rede Brasileira de Calibração </h1>
                    <h1 className="text-black text-center font-bold text-2xl">Laboratório de Calibração Acreditado pela Cgcre</h1>
                    <h1 className="text-black text-center font-bold text-2xl"> de acordo com a ABNT NBR ISO/IEC 17025, sob o número CAL 158</h1>
                  </div>
                  <img className="h-52" src={selo}/>
                </div>


                <div className="full p-6">
                  <div className="flex flex-row align-center items-center">
                    <Label className="font-bold text-[#3F3F3F]  text-md w-[15%] ">
                      Interessado
                    </Label>
                    <h1 className="text-black text-center font-medium ">0</h1>
                  </div>

                  <div className="flex flex-row items-center align-center py-6">
                    <Label className="font-bold text-[#3F3F3F]  text-md w-[15%] ">
                      Endereço
                    </Label>
                    <h1 className="text-black text-center font-medium ">0</h1>
                  </div>

                  <div className="flex flex-row items-center align-center">
                    <Label className="font-bold text-[#3F3F3F] text-md w-[15%] ">
                      Contratante
                    </Label>
                    <h1 className="text-black text-center font-medium ">0</h1>
                  </div>
                </div>



                {/* TITULO */}
                <h4 className="text-black font-extrabold text-3xl text-base w-full px-4 uppercase">
                  1- OBJETO CALIBRADO:
                </h4>
                <div className="p-6">
                  <div className="flex flex-row items-center">
                    <h1 className="text-black text-center font-medium ">--Nome do Objeto Medido--</h1>
                  </div>

                  <div className="flex flex-row w-full justify-between py-6 gap-7 ">
                    {/* COLUNA DE INPUT */}
                    <div className="flex flex-col gap-3 w-[50%]">
                      <div className="flex flex-row gap-3 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                          Faixa Nominal
                        </Label>
                        <h1 className="text-black text-center font-medium ">0</h1>
                      </div>
                      <div className="flex flex-row gap-3 py-5 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                          Fabricante
                        </Label>
                        <h1 className="text-black text-center font-medium ">0000</h1>
                      </div>
                      <div className="flex flex-row gap-3 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                          Ident. Cliente
                        </Label>
                        <h1 className="text-black text-center font-medium ">75-100  mm</h1>
                      </div>
                      <div className="flex flex-row gap-3 pt-5 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                          Data de Recebimento
                        </Label>
                        <h1 className="text-black text-center font-medium ">00/01/00</h1>
                      </div>
                    </div>
                    {/* COLUNA DE INPUT */}
                    <div className="flex flex-col gap-3 w-[50%]">
                      <div className="flex flex-row gap-3 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                          Divisão
                        </Label>
                        <h1 className="text-black text-center font-medium ">0</h1>
                      </div>
                      <div className="flex flex-row gap-3 py-5 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                          Código (NI)
                        </Label>
                        <h1 className="text-black text-center font-medium ">0</h1>
                      </div>
                      <div className="flex flex-row gap-3 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                          N° da OS
                        </Label>
                        <h1 className="text-black text-center font-medium ">0  mm</h1>
                      </div>
                      <div className="flex flex-row gap-3 pt-5 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                          Data de Calibração
                        </Label>
                        <h1 className="text-black text-center font-medium ">00/01/00</h1>
                      </div>
                    </div>
                  </div>
                </div>


                {/* TITULO */}
                <h4 className="text-black font-extrabold text-base w-full py-3 px-4 uppercase">
                  2- PADRÕES UTILIZADOS NA CALIBRAÇÃO:
                </h4>  
                <div className="p-6">
                <h3 className="text-black font-bold text-md">Blocos-padrão</h3>
                  <div className="flex flex-row py-6 align-center items-center">
                    <Label className="font-bold text-[#3F3F3F] text-md w-[15%] ">
                      Referência:
                    </Label>
                    <h1 className="text-black text-center font-medium ">SUI-001 e SUI-048</h1>
                  </div>

                  <div className="flex flex-row align-center items-center">
                    <Label className="font-bold text-[#3F3F3F] text-md w-[15%] ">
                      N° do Certficado:
                    </Label>
                    <h1 className="text-black text-center font-medium ">721/22 e 722/22</h1>
                  </div>

                  <div className="flex flex-row py-6 items-center">
                    <Label className="font-bold text-[#3F3F3F] text-md w-[15%] ">
                      Validade:
                    </Label>
                    <h1 className="text-black text-center font-medium ">Fev/24</h1>
                  </div>

                  <div className="flex flex-row  pb-6 items-center">
                    <Label className="font-bold text-[#3F3F3F] text-md w-[15%] ">
                      Rastreabilidade:
                    </Label>
                    <h1 className="text-black text-center font-medium ">CAL-0158</h1>
                  </div>
    
                </div>

                {/* TITULO */}
                <div className="flex flex-row text-black font-extrabold text-base w-full px-4 uppercase">
                  <h1 className="mr-20">3- MÉTODO DE CALIBRAÇÃO</h1> <h1 className="mr-20">IT-SUI-503</h1> <h1>Versão 11</h1>                                                                 
                </div> 
                <div className="p-6">
                  <h3 className="text-black font-semibold text-md">Os valores encontrados, foram determinados por comparação contra padrões rastreados ao padrão nacional.</h3>
                  <div className=" flex flex-row">
                    <h3 className="text-black mr-20 font-semibold text-md">Condições ambientais durante as medições: </h3><h3>Temperatura: (20+-2)°C</h3>
                  </div>
                </div>

                {/* TITULO */}
                <h4 className="text-black font-extrabold text-base w-full py-3 px-4 uppercase">
                  4- RESULTADOS OBTIDOS:
                </h4>  
                <div className="p-6">
                  <h3 className="text-black font-bold text-md py-5">Os valores apresentados nas tabelas estão em mm</h3>

                  <div className="flex flex-row justify-between">
                    <div>
                      <Table className="border-2 justify-center">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Valor do Padrão</TableHead>
                            <TableHead>Indicação no Instrumento</TableHead>
                            <TableHead>Tendência</TableHead>
                            <TableHead>Incerteza (mm)</TableHead>
                            <TableHead>K</TableHead>
                            <TableHead>Veff</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                              <TableHead>0,00</TableHead>
                              <TableCell>{resultadoControle1.mediaValor}</TableCell>
                              <TableCell>{resultadoControle1.tendência}</TableCell>
                              <td rowSpan={11} className="border-l-2 p-10 align-middle [&:has([role=checkbox])]:pr-0">{incertezaUC.U}</td>
                              <td rowSpan={11} className="border-x-2 p-10 align-middle [&:has([role=checkbox])]:pr-0">{incertezaUC.K}</td>
                              <td rowSpan={11} className="p-10 align-middle [&:has([role=checkbox])]:pr-0">{incertezaUC.veff}</td>
                          </TableRow>
                          <TableRow>
                              <TableHead>1,30</TableHead>
                              <TableCell>{resultadoControle2.mediaValor}</TableCell>
                              <TableCell>{resultadoControle2.tendência}</TableCell>
                          </TableRow>
                          <TableRow>
                              <TableHead>1,40</TableHead>
                              <TableCell>{resultadoControle3.mediaValor}</TableCell>
                              <TableCell>{resultadoControle3.tendência}</TableCell>
                          </TableRow>
                          <TableRow>
                              <TableHead>20,00</TableHead>
                              <TableCell>{resultadoControle4.mediaValor}</TableCell>
                              <TableCell>{resultadoControle4.tendência}</TableCell>
                          </TableRow>
                          <TableRow>
                              <TableHead>50,00</TableHead>
                              <TableCell>{resultadoControle5.mediaValor}</TableCell>
                              <TableCell>{resultadoControle5.tendência}</TableCell>
                          </TableRow>
                          <TableRow>
                              <TableHead>100,00</TableHead>
                              <TableCell>{resultadoControle6.mediaValor}</TableCell>
                              <TableCell>{resultadoControle6.tendência}</TableCell>
                          </TableRow>
                          <TableRow>
                              <TableHead>100,00</TableHead>
                              <TableCell>{resultadoControle7.mediaValor}</TableCell>
                              <TableCell>{resultadoControle7.tendência}</TableCell>
                          </TableRow>
                          <TableRow>
                              <TableHead>100,00</TableHead>
                              <TableCell>{resultadoControle8.mediaValor}</TableCell>
                              <TableCell>{resultadoControle8.tendência}</TableCell>
                          </TableRow>
                          <TableRow>
                              <TableHead>100,00</TableHead>
                              <TableCell>{resultadoControle9.mediaValor}</TableCell>
                              <TableCell>{resultadoControle9.tendência}</TableCell>
                          </TableRow>
                          <TableRow>
                              <TableHead>100,00</TableHead>
                              <TableCell>{resultadoControle10.mediaValor}</TableCell>
                              <TableCell>{resultadoControle10.tendência}</TableCell>
                          </TableRow>
                          <TableRow>
                              <TableHead>100,00</TableHead>
                              <TableCell>{resultadoControle11.mediaValor}</TableCell>
                              <TableCell>{resultadoControle11.tendência}</TableCell>
                          </TableRow>
                        </TableBody>
                    </Table>
                    </div>


                    <div className="flex flex-col w-[35%] justify-between">
                      <div>
                        <Table className="mt-20 border-2 justify-center">
                          <TableHeader>
                            <TableRow>
                              <TableHead>Paralelismo</TableHead>
                              <TableCell>{valorEmMilimetro} mm</TableCell>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Incerteza</TableCell>
                              <TableCell>mm</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>K =</TableCell>
                              <TableCell>{incertezaPara50_100.K}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Veff =</TableCell>
                              <TableCell>{ incertezaPara50_100.veff}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>


                      <div>
                        <Table className="mt-20 border-2 justify-center">
                          <TableHeader>
                            <TableRow>
                              <TableHead>Planeza</TableHead>
                              <TableCell>{planezaMedia} mm</TableCell>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Incerteza</TableCell>
                              <TableCell>mm</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>K =</TableCell>
                              <TableCell>{incertezaPlaneza50_100.K}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Veff =</TableCell>
                              <TableCell>{incertezaPlaneza50_100.veff}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>

                </div>

                {/* TITULO */}
                <h4 className="text-black font-extrabold text-base w-full py-3 px-4 uppercase">
                  5- OBSERVAÇÕES
                </h4> 
                <div className="p-6 w-[90%]">
                <h3 className="text-black font-semibold text-md">- O instrumento foi calibrado na posição vertical.</h3>
                <h3 className="text-black font-semibold text-md">- A terminologia utilizada é compativel com Vocabulário Internacional de Metrologia.</h3>
                <h3 className="text-black font-semibold text-md">- “A incerteza expandida relatada é baseada em uma incerteza padrão combinada multiplicada
                 por um fator de abrangência k (ver acima); o qual para uma distribuição t com veff graus de liberdade efetivos,
                  para um nível de confiança de aproximidade 95%”</h3>
                </div>


                <div className="full p-6 my-16">
                  <div className="flex flex-row content-center justify-around items-center">
                    <div className="flex content-center flex-col text-red-600 w-[30%]">
                      <div className=" h-15 border-b-2 border-red-600  text-center" type="text" placeholder="ASSINATURA" />
                      <div className="text-center">
                        <h1>Douglas Manesco de Lima</h1>
                        <h1>Coordenador de Laboratório</h1>
                        <h1>(Signatário Autorizado)</h1>
                      </div>
                    </div>
                    
                    <div className="flex flex-row w-[30%] justify-around align-center ">
                      <Label>EMISSÂO:</Label>
                      <Label>XX/XX/XXXX</Label>
                    </div>
                    
                  </div>
                </div>

                <div className="h-0.5 w-full bg-gray-500 "/>

                <h1 className="p-5">Este certificado atende aos requisitos de acreditação pela Cgcre, o qual avaliou a competência do laboratório e comprovou sua rastreabilidade a padrões Nacionais de medida.(ou ao Sistema Internacional de Unidade - SI). A reprodução deste certificado só poderá ser total.</h1>

                <div className="h-0.5 w-full mb-12 bg-gray-500 px-4"/>

                

                <div className="flex flex-row w-full mb-12">
                  <div className="flex flex-col text-center w-[80%]">
                    <h1>Escola SENAI Suiço Brasileira Paulo Enersto Tolle</h1>
                    <h1>Rua Bento Branco de Andrade Filho, 379 - Santo Amaro - 04757-000 São Paulo - SP</h1>
                    <div className="flex flex-row justify-around">
                      <h1>Fone/Fax: (011) 5642-3400</h1>
                      <h1>e-mail: suiclab@sp.senai.br</h1>
                    </div>
                  </div>
                  

                  <div className="flex flex-col float-right text-right">
                    <h1>F51503 V.08</h1>
                    <h1>Aprovação: 03/06/2019</h1>
                    <h1>Fase do documento: Produção</h1>
                  </div>
                </div>

            </div>


          <div className="w-[90%] flex flex-row justify-end items-center py-5 gap-3">
            <Button className="w-[200px] border-[#858585] border-2 bg-transparent text-[#949494] font-semibold hover:bg-[#858585] hover:text-white">
              Cancelar
            </Button>
            <Button onClick={handlePrint} >Imprimir</Button>
          </div>
        </form>



    );
}
