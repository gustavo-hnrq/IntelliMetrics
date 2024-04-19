import { TabelaFlex } from './table-flex';
import clientes from './data';
import ModalInstrumento from '../modals/instrumento';

const columns = [
  { key: 'name', label: 'Nome' },
  { key: 'email', label: 'Email' },
  { key: 'cargo', label: 'Cargo' },
];

export function Tabela() {
  return(
    <div>
      <TabelaFlex nome={"Adicionar Instrumento"} data={clientes} columns={columns} button={<ModalInstrumento/>} />
    </div>
  )
  
}