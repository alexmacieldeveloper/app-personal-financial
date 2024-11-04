import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, Button, CssBaseline } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TransitionForm from '../components/TransitionForm';
import TransactionList from '../components/TransactionList';
import ListItemLink from '../components/ListItemLink'

const drawerWidth = 240;

const Dashboard: React.FC = () => {
  const handleLogout = () => {
    console.log('Usuário deslogado');
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
            <ListItem  onClick={handleLogout}>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
          </List>
        </Drawer>
        <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerWidth }}>
          <Toolbar />
          <Routes>
            <Route path="add-transaction" element={<TransitionForm />} />
            <Route path="list-transactions" element={<TransactionList />} />
            <Route path="profile" element={<div>Perfil do Usuário</div>} />
          </Routes>
        </main>
      </div>
  );
};

export default Dashboard;
