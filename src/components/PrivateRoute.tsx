import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
