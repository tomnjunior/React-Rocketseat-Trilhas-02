import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


export function Header() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);

    }

    function handleCloseNewTransactionModal() {

    }

    return (
        <Container>
            <Content>
                <img className='logoImg' src={logoImg} alt="dt money" />
                <button type="button">
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}