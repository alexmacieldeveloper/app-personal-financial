import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from '@mui/material';

interface Transaction {
  id: string;
  type: string;
  date: string;
  category: string;
  amount: number;
  description: string;
}

const TransactionList: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Função para buscar transações do Firestore
  const fetchTransactions = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'transactions'));
      const transactionList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Transaction[];
      setTransactions(transactionList);
    } catch (error) {
      console.error('Erro ao buscar transações:', error);
    }
  };

  // Carrega as transações ao montar o componente
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '20px' }}>
      <Typography variant="h6" align="center" style={{ padding: '16px' }}>
        Lista de Transações
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={fetchTransactions}
        style={{ marginBottom: '16px' }}
      >
        Atualizar
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tipo</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Descrição</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionList;
