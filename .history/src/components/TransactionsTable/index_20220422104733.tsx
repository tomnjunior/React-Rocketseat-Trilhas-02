import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsTable() {

    const [transaction, setTransactions] =useState([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {TransactionsTable.map(transaction => (
                        <tr>
                            <td>Desenvolvimento de website</td>
                            <td className="deposit">R$12.000,00</td>
                            <td>Desenvolvimento</td>
                            <td>19/04/2022</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </Container>
    )
}