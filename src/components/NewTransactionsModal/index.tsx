import Modal from 'react-modal'

interface newTransactionsModalProps{
  isOpen: boolean,
  onRequestClose: () => void;
}

export function NewTransactionsModal({isOpen, onRequestClose}: newTransactionsModalProps){
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
  >
    <h2>Cadastrar informação</h2>
  </Modal>
  )
}