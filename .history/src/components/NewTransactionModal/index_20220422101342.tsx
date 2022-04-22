import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event:FormEvent) {
        event}

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" className="closeImg" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                
                <input
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <TransactionTypeContainer>
                    <RadioBox
                       type="button"
                       onClick={() => { setType('deposit'); }}
                       isActive={type === 'deposit'}
                       activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" className='incomeImg' />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                       type="button"
                       onClick={() => { setType('withdraw'); }}
                       isActive={type === 'withdraw'}
                       activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" className='outcomeImg' />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}