import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled(Box)`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

interface EnergyStation {
  cod_station: string;
  nm_vendor: string;
  nm_model: string;
  tx_serial: string;
  tx_version_hw: string;
  tx_version_hw_desc: string;
  tx_version_fw: string;
  tx_version_fw_desc: string;
  dt_create: string;
  ts_change: string;
}

const initialFormState: EnergyStation = {
  cod_station: '',
  nm_vendor: '',
  nm_model: '',
  tx_serial: '',
  tx_version_hw: '',
  tx_version_hw_desc: '',
  tx_version_fw: '',
  tx_version_fw_desc: '',
  dt_create: '',
  ts_change: '',
};

const EnergyStationForm: React.FC = () => {
  const [formState, setFormState] = useState<EnergyStation>(initialFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
    // Aqui você pode adicionar a lógica de envio do formulário
  };

  return (
    <Container component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Cadastro de Estação de Energia
      </Typography>
      <Typography variant="body1" paragraph>
        Preencha os campos abaixo para criar uma nova estação de energia. Insira
        todas as informações necessárias, fornecedor,
        modelo, versões de hardware e firmware, entre outros dados relevantes.
      </Typography>
      <Grid container spacing={2}>
       {
          /*
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Código da Estação"
            name="cod_station"
            value={formState.cod_station}
            onChange={handleInputChange}
          />
        </Grid>    
            
           */
        }
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nome do Fornecedor"
            name="nm_vendor"
            value={formState.nm_vendor}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nome do Modelo"
            name="nm_model"
            value={formState.nm_model}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Número de Série"
            name="tx_serial"
            value={formState.tx_serial}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Versão de Hardware"
            name="tx_version_hw"
            value={formState.tx_version_hw}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Descrição da Versão HW"
            name="tx_version_hw_desc"
            value={formState.tx_version_hw_desc}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Versão de Firmware"
            name="tx_version_fw"
            value={formState.tx_version_fw}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Descrição da Versão FW"
            name="tx_version_fw_desc"
            value={formState.tx_version_fw_desc}
            onChange={handleInputChange}
          />
        </Grid>
        {
            /*
                <Grid item xs={6}>
          <TextField
            fullWidth
            label="Data de Criação"
            name="dt_create"
            type="datetime-local"
           
            value={formState.dt_create}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Data da Última Alteração"
            name="ts_change"
        
            type="datetime-local"
            value={formState.ts_change}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
            */
        }
    
      </Grid>
      <Box mt={3}>
        <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </Box>
    </Container>
  );
};

export default EnergyStationForm;
