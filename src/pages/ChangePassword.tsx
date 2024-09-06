import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const ChangePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('As senhas não são iguais.');
      return;
    }
    setError('');
    // Lógica para processar a mudança de senha
    console.log('Senha Atual:', currentPassword);
    console.log('Nova Senha:', newPassword);
    console.log('Confirmar Nova Senha:', confirmPassword);
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
          Alterar Senha
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
                label="Nova Senha"
                type="password"
                fullWidth
                variant="outlined"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirmar Nova Senha"
                type="password"
                fullWidth
                variant="outlined"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Alterar Senha
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ChangePassword;
