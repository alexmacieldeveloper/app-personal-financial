import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';


const App: React.FC = () => {
  const isAuthenticated = true;

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/*" element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>  
  );
}

export default App;
