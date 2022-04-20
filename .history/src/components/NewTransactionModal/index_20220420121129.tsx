import Modal from 'react-modal';
import { Container } from './styles';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
    >
        <Container>
            <h2>Cadastrar transação</h2>
            <input
                placeholder='Título'
            />
            
            <input
                type="number"
                placeholder='Valor'
            />

        </Container>
    </Modal>
    )
}