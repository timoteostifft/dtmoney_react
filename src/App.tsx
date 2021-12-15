// import styled from 'styled-components'
import { GlobalSyle } from './styles/global';
import { Header } from './components/header/index'
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { useState } from 'react';
import { NewTransactionsModal } from './components/NewTransactionsModal';
import {TransactionsProvider} from './hooks/useTransactions';

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      
      <Dashboard/>
      
      <NewTransactionsModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalSyle/>
    </TransactionsProvider>
  );
}

