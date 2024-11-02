import React from 'react';
import { useAuth } from '../context/AuthContext';
import { TextField, Button, Typography, Container, Paper, IconButton } from '@mui/material';
import TransactionForm from '../components/TransitionForm';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
    return (
      <Container>
        <h2>Bem-vindo ao seu Dashboard {user?.email}</h2>
        <p>Aqui você pode visualizar e gerenciar suas finanças.</p>
        <Paper style={{ padding: '24px'}}>
          <Typography variant="h5" style={{ textAlign: 'center'}}>Adicionar transações:</Typography>
          <TransactionForm />
        </Paper>
      </Container>
    );
  };
  
  export default Dashboard;
