import logoImg from '../../assets/logo.svg'


export function Header() {
    return (
        <Container>
            <img src={logoImg} alt="dt money" />
            <button type="button">
                Nova Transação
            </button>
        </Container>
    )
}