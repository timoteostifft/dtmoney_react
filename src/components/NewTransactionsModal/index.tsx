import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState, useContext } from 'react'

import { api } from '../../services/api'

import { Container, RadioBox } from './styles'
import { useTransactions } from '../../hooks/useTransactions'


interface newTransactionsModalProps{
  isOpen: boolean,
  onRequestClose: () => void;
}

export function NewTransactionsModal({isOpen, onRequestClose}: newTransactionsModalProps){
  
  const {createTransactions} =  useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const  [category, setCategory] = useState('')



  const[type,setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()
  
  await createTransactions({
    title,
    amount,
    category,
    type
  })
    
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }
  
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

    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar transação</h2>

      <input type="text" placeholder='Título' value={title} onChange={event => setTitle(event.target.value)}/>
      
      <input type="number" placeholder='Valor' value={amount} onChange={event => setAmount(Number(event.target.value))}/>

      <div className='transactionsType'>
        
        <RadioBox 
          type='button' 
          onClick={()=>{setType('deposit')}}
          isActive={type ===  'deposit'}
          activeColor='green'
        >
          
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </RadioBox>
       
        <RadioBox 
          type='button' 
          onClick={()=>{setType('withdraw')}}
          isActive={type ===  'withdraw'}
          activeColor='red'
        >
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </RadioBox>
      </div>

      <input type="text" placeholder='Categoria' value={category} onChange={event => setCategory(event.target.value)}/>

      <button type='submit'>Cadastrar</button>
    </Container>
  </Modal>
  )
}