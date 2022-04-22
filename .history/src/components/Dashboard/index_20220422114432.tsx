import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {

    const [transactions, setTransactions] =useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
       <Container>
           <Summary />
           <TransactionsTable />
       </Container> 
    );
}