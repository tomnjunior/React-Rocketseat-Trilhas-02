import logoImg from '../../assets/logo.svg'
import { Container } from './styles'


export function Header() {
    return (
        <Container>
            <Content></Content>
            <img src={logoImg} alt="dt money" />
            <button type="button">
                Nova Transação
            </button>
        </Container>
    )
}