import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth/authService';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import WaveBackground from '../components/WaveBackground';


const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas não correspondem.');
      return;
    }

    try {
      await registerUser(email, password);
      navigate('/'); 
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Erro desconhecido ao registrar.');
      }
      console.error('Erro de registro:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ paddingTop: '24px'}}>
      <WaveBackground />
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography component="h1" variant="h5">Faça seu registro</Typography>
        <form onSubmit={handleRegister}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Senha"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Confirmar Senha"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Registrar
          </Button>
          {error && <Typography color="error" style={{ marginTop: '16px' }}>{error}</Typography>}
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
