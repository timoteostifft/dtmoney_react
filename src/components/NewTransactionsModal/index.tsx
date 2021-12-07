import Modal from 'react-modal'
import { Container } from './styles'

interface newTransactionsModalProps{
  isOpen: boolean,
  onRequestClose: () => void;
}

export function NewTransactionsModal({isOpen, onRequestClose}: newTransactionsModalProps){
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
  >
    <Container>
      <h2>Cadastrar transação</h2>

      <input type="text" placeholder='Título'/>
      <input type="number" placeholder='Valor'/>
      <input type="text" placeholder='Categoria'/>

      <button type='submit'>Cadastar</button>
    </Container>
  </Modal>
  )
}