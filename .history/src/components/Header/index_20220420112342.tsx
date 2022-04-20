import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import Modal from 'react-modal';

import { Container, Content } from './styles';


export function Header() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <img className='logoImg' src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova Transação
                </button>

                <Modal />
            </Content>
        </Container>
    )
}