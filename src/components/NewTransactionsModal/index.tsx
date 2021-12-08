import Modal from 'react-modal'
import { Container } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

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

    <button type='button' className='react-modal-close' onClick={onRequestClose}>
      <img src={closeImg} alt="Fechar Modal" />
    </button>

    <Container>
      <h2>Cadastrar transação</h2>

      <input type="text" placeholder='Título'/>
      <input type="number" placeholder='Valor'/>

      <div className='transactionsType'>
        <button type='button'>
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </button>
        <button type='button'>
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </button>
      </div>

      <input type="text" placeholder='Categoria'/>

      <button type='submit'>Cadastrar</button>
    </Container>
  </Modal>
  )
}