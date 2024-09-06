import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const VerifyCode: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [isCodeResent, setIsCodeResent] = useState(false);

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!verificationCode) {
      setError('Por favor, insira o código de verificação.');
      return;
    }
    setError('');
    // Lógica para processar a verificação do código
    console.log('Código de Verificação:', verificationCode);
  };

  const handleResendCode = () => {
    // Lógica para reenviar o código de verificação
    setIsCodeResent(true);
    console.log('Código de verificação reenviado.');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Confirmar Código de Verificação
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {error && (
              <Grid item xs={12}>
                <Typography color="error">{error}</Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                label="Código de Verificação"
                fullWidth
                variant="outlined"
                value={verificationCode}
                onChange={handleCodeChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Confirmar Código
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="text"
                color="primary"
                fullWidth
                onClick={handleResendCode}
                disabled={isCodeResent}
              >
                {isCodeResent ? 'Código Reenviado' : 'Reenviar Código'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default VerifyCode;
