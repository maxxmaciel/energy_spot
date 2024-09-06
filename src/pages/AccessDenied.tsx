import React from 'react';
import BlockIcon from '@mui/icons-material/Block';
import Unauthorized from './Unauthorized';

const AccessDenied = () => {
  return (
    <Unauthorized
      title="Acesso Negado"
      message="Você não tem permissão para acessar esta página."
      IconComponent={BlockIcon}
    />
  );
};

export default AccessDenied;
