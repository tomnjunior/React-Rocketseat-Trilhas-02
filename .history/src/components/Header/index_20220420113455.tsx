import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';


interface HeaderProps {
    onOpenNewTransactionModal: ()
}

export function Header(props.) {

    return (
        <Container>
            <Content>
                <img className='logoImg' src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova Transação
                </button>

            </Content>
        </Container>
    )
}