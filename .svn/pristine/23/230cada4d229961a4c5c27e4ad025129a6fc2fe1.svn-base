import { Button, SvgIconProps } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface UnauthorizedProps {
  title: string;
  message: string;
  IconComponent: React.ComponentType<SvgIconProps>;
}

const Unauthorized: React.FC<UnauthorizedProps> = ({
  title,
  message,
  IconComponent,
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Retorna à página anterior
  };

  return (
    <div style={styles.container}>
      <IconComponent style={styles.icon} />
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.message}>{message}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoBack}
        style={styles.button}
      >
        Voltar
      </Button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center' as const,
    backgroundColor: '#f8f8f8',
    padding: '0 20px',
  },
  icon: {
    fontSize: '4rem',
    color: 'red',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#555',
    maxWidth: '400px',
  },
  button: {
    fontSize: '1rem',
    padding: '10px 20px',
  },
};

export default Unauthorized;
