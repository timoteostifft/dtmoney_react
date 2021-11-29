// import styled from 'styled-components'
import { GlobalSyle } from './styles/global';
import { Header } from './components/header/index'
import { Dashboard } from './components/Dashboard';


export function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <GlobalSyle/>
    </div>
  );
}

