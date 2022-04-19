import incomeImg from '../../assets/income.svg';

import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src="incomeImg" alt="Entradas" />
                </header>
            </div>
        </Container>
    )
}