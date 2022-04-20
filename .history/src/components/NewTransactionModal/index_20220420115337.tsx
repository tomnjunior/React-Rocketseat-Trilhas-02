import Modal from 'react-modal';


interface NewtransactionModalProps {
    isOpen: boolean;
    
}

export function NewTransactionModal() {
    return (
        <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
    >
        <h2>Cadastrar transação</h2>
    </Modal>
    )
}