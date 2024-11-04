import React from 'react';
import { Routes, Route, useNavigate  } from 'react-router-dom';
import { Drawer, List, AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import ListItemLink from '../components/ListItemLink';
import { auth } from '../services/firebaseConfig';
import { signOut } from 'firebase/auth';

const drawerWidth = 240;

const Dashboard: React.FC = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login')
    } catch (error){
      console.error('Erro ao deslogar:', error)
    }
  };

  return (
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" style={{ zIndex: 1201 }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <List>
            <ListItemLink to="profile" icon={<PersonIcon />} primary="Perfil do Usuário" />
            <ListItemLink to="add-transaction" icon={<AddIcon />} primary="Adicionar Transação" />
            <ListItemLink to="list-transactions" icon={<ListIcon />} primary="Listagem de Transações" />
            <ListItemLink to="login" onClick={handleLogout} icon={<ExitToAppIcon />} primary="Sair" />
          </List>
        </Drawer>
        <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerWidth }}>
          <Toolbar />
          <Routes>
            <Route path="add-transaction" element={<TransactionForm />} />
            <Route path="list-transactions" element={<TransactionList />} />
            <Route path="profile" element={<div>Perfil do Usuário</div>} />
          </Routes>
        </main>
      </div>
  );
};

export default Dashboard;
