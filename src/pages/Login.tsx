import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, loginWithGoogle } from '../services/auth/authService';
import { TextField, Button, Typography, Container, Grid, Paper } from '@mui/material';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Erro desconhecido ao fazer login.');
      }
      console.error('Erro de login:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Erro desconhecido ao fazer login com Google.');
      }
      console.error('Erro de login com Google:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography component="h1" variant="h5">Login</Typography>
        <form onSubmit={handleLogin}>
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
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Entrar
          </Button>
          <Button fullWidth variant="outlined" color="primary" style={{ marginTop: '16px' }} onClick={handleGoogleLogin}>
            Entrar com Google
          </Button>
          {error && <Typography color="error" style={{ marginTop: '16px' }}>{error}</Typography>}
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
