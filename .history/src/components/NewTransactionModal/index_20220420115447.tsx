import Modal from 'react-modal';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOp }) {
    return (
        <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
    >
        <h2>Cadastrar transação</h2>
    </Modal>
    )
}