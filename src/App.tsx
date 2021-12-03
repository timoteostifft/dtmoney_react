// import styled from 'styled-components'
import { GlobalSyle } from './styles/global';
import { Header } from './components/header/index'
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { useState } from 'react';

Modal.setAppElement('#root')

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
   
  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Modal isOpen={isNewTransactionModalOpen}onRequestClose={handleCloseNewTransactionModal}
      >
      <h2>Cadastrar transação</h2>
      </Modal>


      <Dashboard/>
      <GlobalSyle/>
    </div>
  );
}

