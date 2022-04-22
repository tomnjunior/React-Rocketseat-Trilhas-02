import { createContext, useState } from 'react';

export const TransactionsContext = createContext([]);

export function TransactionsProvider() {
          
    const [transactions, setTransactions] =useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);
}