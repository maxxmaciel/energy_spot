import React, { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';

// Definir os tipos das props e do estado
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorCode: string | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorCode: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Atualiza o estado para exibir a modal de erro
    return { hasError: true, errorCode: generateErrorCode() };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Registra o erro em um serviço de log no modo de produção
    if (process.env.NODE_ENV === 'production') {
      logErrorToService(error, errorInfo);
    } else {
      // No modo de desenvolvimento, ainda mostrar o erro no console
      console.error("Erro capturado por ErrorBoundary:", error, errorInfo);
    }
  }

  handleClose = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorModal 
          errorCode={this.state.errorCode!}
          onClose={this.handleClose}
        />
      );
    }

    return this.props.children;
  }
}

function generateErrorCode(): string {
  // Função para gerar um código de erro aleatório
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function logErrorToService(error: Error, errorInfo: React.ErrorInfo) {
  // Função para enviar os detalhes do erro para um serviço de log
  console.log('Log de erro enviado ao serviço:', error, errorInfo);
}

interface ErrorModalProps {
  errorCode: string;
  onClose: () => void;
}

function ErrorModal({ errorCode, onClose }: ErrorModalProps) {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby="error-dialog-title"
      aria-describedby="error-dialog-description"
    >
      <DialogTitle id="error-dialog-title">Ocorreu um erro</DialogTitle>
      <DialogContent>
        <DialogContentText id="error-dialog-description">
          Desculpe, algo deu errado. Por favor, forneça o seguinte código de erro ao suporte: <strong>{errorCode}</strong>
        </DialogContentText>
      </DialogContent>
      <Button onClick={onClose} color="primary" autoFocus>
        Fechar
      </Button>
    </Dialog>
  );
}

export default ErrorBoundary;
