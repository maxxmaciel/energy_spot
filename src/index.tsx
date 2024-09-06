import BlockIcon from '@mui/icons-material/Block';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './AppContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Estilos personalizados
const styles = {
  icon: {
    fontSize: '4rem',
    color: 'red',
    marginBottom: '1rem',
  },
};

// Componente ErrorBoundary funcional básico
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleError = () => {
      setHasError(true);
      setOpen(true); // Abre a modal quando ocorrer um erro
      return true; // Suprime a mensagem de erro padrão
    };

    window.onerror = handleError;

    return () => {
      window.onerror = null;
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    // Optionally, you can reload the page or navigate the user to a safe route.
    // window.location.reload();
  };
//process.env.NODE_ENV === 'production' && 
  return (
    <>
      {(
        <Dialog
          open={open}
          onClose={handleClose}
          disableEscapeKeyDown
          aria-labelledby="error-dialog-title"
          sx={{ '.MuiDialog-paper': { width: '350px', padding: '16px' } }} // Define a largura da modal e o padding
        >
          <DialogTitle id="error-dialog-title" sx={{ textAlign: 'center' }}>
            <BlockIcon style={styles.icon} /> {/* Substitui o ícone de erro pelo componente personalizado */}
          </DialogTitle>
          <DialogContent>
            <Typography variant="h6" align="center" gutterBottom fontWeight="600">
              Ocorreu um erro
            </Typography>
            <Typography align="center">
              Algo deu errado ao processar sua solicitação. Por favor, tente novamente mais tarde.
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button onClick={handleClose} variant="contained" color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {hasError ? null : children}
    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ErrorBoundary>
    <AppProvider>
      <App />
    </AppProvider>
  </ErrorBoundary>
);


reportWebVitals();
