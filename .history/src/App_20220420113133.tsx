import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'reac'
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />

      
      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}

