import { Tabela } from './table-flex';
import clientes from './data';
import ModalInstrumento from '../modals/instrumento';

const columns = [
  { key: 'name', label: 'Nome' },
  { key: 'email', label: 'Email' },
  { key: 'cargo', label: 'Cargo' },
];

export function MinhaTabela() {
  return(
    <div>

      <Tabela data={clientes} columns={columns} button={<ModalInstrumento/>} />
    </div>
  )
  
}