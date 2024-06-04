import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import selo from "../../../assets/selo certificado.png";
import senai from "../../../assets/Senai Logotipo_destaque.png";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useReactToPrint } from "react-to-print" ;

export default function CertPaquimetro() {

    // esta função pega as informações da parte citada, para poder imprimir
    const contentDocument = useRef();
  
    // isto tras as informações para a tema de impreção
    const handlePrint = useReactToPrint({
      content: () => contentDocument.current
    })

    return (
      
            <form class="flex flex-col w-full items-center">
              <div ref={contentDocument} id="relatorio" className="flex flex-col justify-between border rounded-lg bg-[#FCFCFC]">

                <div className="flex flex-row justify-between p-6">
                  <img  className="w-60 h-40" src={senai}/>
                    <div className="static mr-5  w-[70%]">
                        <h1 className="text-black text-center tracking-tighter font-bold font-serif text-5xl"> CERTIFICADO DE CALIBRAÇÃO </h1>
                        <h1 className="text-black text-center font-serif font-bold text-2xl"> LABORATÓRIO DE CALIBRAÇÃO SUICLAB </h1>
                        <h1 className="text-black text-center font-semibold text-2xl"> Rede Brasileira de Calibração</h1>
                        <h1 className="text-black text-center font-semibold text-2xl"> Laboratório de Calibração Acreditado pela Cgcre </h1>
                        <h1 className="text-black text-center font-semibold text-2xl"> de acordo com a ABNT NBR ISO/IEC 17025, sob o número CAL 158 </h1>
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
                <h4 className="text-black font-extrabold text-base w-full  px-4 uppercase">
                  2- PADRÕES UTILIZADOS NA CALIBRAÇÃO:
                </h4>  
                <div className="p-6">
                <div className="flex flex-row w-full justify-between gap-7 ">
                    {/* COLUNA DE INPUT */}
                    <div className="flex flex-col gap-3 w-[50%]">
                      <h3 className="text-black font-bold text-md">Blocos escalonado</h3>
                      <div className="flex flex-row gap-3 py-5 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                          N° do Certificado:
                        </Label>
                        <h1 className="text-black text-center font-medium ">D4515/23</h1>
                      </div>
                      <div className="flex flex-row gap-3 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                          Rastreabilidade:
                        </Label>
                        <h1 className="text-black text-center font-medium ">CAL-0133</h1>
                      </div>
                      <div className="flex flex-row gap-3 pt-5 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                        Validade:
                        </Label>
                        <h1 className="text-black text-center font-medium ">abr/25</h1>
                      </div>
                    </div>
                    {/* COLUNA DE INPUT */}
                    <div className="flex flex-col gap-3 w-[50%]">
                    <h3 className="text-black font-bold text-md">Blocos-padrão</h3>
                    <div className="flex flex-row gap-3 py-5 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                          N° do Certificado:
                        </Label>
                        <h1 className="text-black text-center font-medium ">721/22</h1>
                      </div>
                      <div className="flex flex-row gap-3 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                          Rastreabilidade:
                        </Label>
                        <h1 className="text-black text-center font-medium ">CAL-0158</h1>
                      </div>
                      <div className="flex flex-row gap-3 pt-5 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-md w-[35%] ">
                        Validade:
                        </Label>
                        <h1 className="text-black text-center font-medium ">fev/24</h1>
                      </div>
                    </div>
                  </div>
                  
                </div>

                {/* TITULO */}
                <div className="flex flex-row text-black font-extrabold text-base w-full px-4 uppercase">
                  <h1 className="mr-20">3- MÉTODO DE CALIBRAÇÃO</h1> <h1 className="mr-20">IT-SUI-503</h1> <h1>Versão 11</h1>                                                                 
                </div> 
                <div className="p-6">
                  <h3 className="text-black font-semibold text-md">Os valores de tendência e parelelismo, foram determinados por comparação, sendo utilizado um padrâo</h3>
                  <h3 className="text-black font-semibold text-md">escalonado conjugado com blocos individuais, rastreados ao padrão nacional.</h3>
                  <div className=" flex flex-row">
                    <h3 className="text-black mr-20 font-semibold text-md">Condições ambientais durante as medições: </h3><h3>Temperatura: (20+-2)°C</h3>
                  </div>
                </div>

                {/* TITULO */}
                <h4 className="text-black font-extrabold text-base w-full py-3 px-4 uppercase">
                  4- RESULTADOS OBTIDOS:
                </h4>  
                <div className="p-6">
                  <h3 className="text-black font-bold text-md ">Medição externa</h3>

                  <div>
                    <Table className="border-2 justify-center w-[80%]">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Valor nominal (mm)</TableHead>
                          <TableHead>Tendência (mm)</TableHead>
                          <TableHead>Incerteza (mm)</TableHead>
                          <TableHead>K</TableHead>
                          <TableHead>Veff</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                            <TableHead>0,00</TableHead>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead>1,30</TableHead>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead>1,40</TableHead>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead>20,00</TableHead>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead>50,00</TableHead>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead>100,00</TableHead>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                        </TableRow>
                      </TableBody>
                  </Table>
                  </div>
  
                  <h3 className="text-black font-bold text-md py-5">Paralelismo</h3>

                  <div>
                    <Table className="border-2 justify-center w-[80%]">
                      <TableHeader>
                        <TableRow>
                          <TableHead></TableHead>
                          <TableHead>Paralelismo (mm)</TableHead>
                          <TableHead>Incerteza (mm)</TableHead>
                          <TableHead>K</TableHead>
                          <TableHead>Veff</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                            <TableHead>Bicos</TableHead>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                            <TableCell>#DIV/0!</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* TITULO */}
                <h4 className="text-black font-extrabold text-base w-full py-3 px-4 uppercase">
                  5- OBSERVAÇÕES
                </h4> 
                <div className="p-6 w-[90%]">
                <h3 className="text-black font-semibold text-md">- A terminologia utilizada é compativel com Vocabulário Internacional de Metrologia.</h3>
                <h3 className="text-black font-semibold text-md">- Os ajustes efetuados no instrumento não fazem parte do escopo da Acreditação.</h3>
                <h3 className="text-black font-semibold text-md">- A incerteza expandida de medição relatada é declarada como a incerteza padrão de medição 
                multiplicada pelo fator de abrangência k, o qual para uma distribuição t com veff graus de liberdade efetivos, corresponde a uma probabilidade
                 de abrangência de aproximidade 95%. A incerteza padrão da medição foi determinada de acordo com a publicação EA-4/02.</h3>
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
                    <h1>F50302 V.03</h1>
                    <h1>Aprovação: 03/06/2019</h1>
                    <h1>Fase do documento: Produção</h1>
                  </div>
                </div>


            </div>


          <div className="w-[90%] flex flex-row justify-end items-center py-5 gap-3">
            <Button className="w-[200px]">Adicionar</Button>
            <Button className="w-[200px] border-[#858585] border-2 bg-transparent text-[#949494] font-semibold hover:bg-[#858585] hover:text-white">
              Cancelar
            </Button>
            <Button onClick={handlePrint} >Imprimir</Button>
          </div>
        </form>

    );
}
