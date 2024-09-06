import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';

interface CondoFormData {
  nm_condo: string;
  tx_cnpj: string;
  tx_fone: string;
  tx_email: string;
  tx_description: string;
  tx_address: string;
  tx_complement: string;
  tx_city: string;
  tx_state: string;
  tx_obs: string;
  en_sit: string;
}

const CondoForm: React.FC = () => {
  const [formData, setFormData] = useState<CondoFormData>({
    nm_condo: '',
    tx_cnpj: '',
    tx_fone: '',
    tx_email: '',
    tx_description: '',
    tx_address: '',
    tx_complement: '',
    tx_city: '',
    tx_state: '',
    tx_obs: '',
    en_sit: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as string]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode fazer a lógica para enviar os dados, como uma chamada API
    console.log(formData);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        maxWidth: 400, 
        margin: 'auto', 
        marginTop: 4,
        textAlign: 'center'
      }}
    >
      <Typography variant="h5" component="h2">
        Cadastro de Condomínio
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
        Preencha os dados abaixo para cadastrar um novo condomínio.
      </Typography>
      <TextField
        label="Nome do Condomínio"
        name="nm_condo"
        value={formData.nm_condo}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="CNPJ"
        name="tx_cnpj"
        value={formData.tx_cnpj}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="Telefone"
        name="tx_fone"
        value={formData.tx_fone}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Email"
        name="tx_email"
        value={formData.tx_email}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Descrição"
        name="tx_description"
        value={formData.tx_description}
        onChange={handleInputChange}
        fullWidth
        multiline
        rows={3}
      />
      <TextField
        label="Endereço"
        name="tx_address"
        value={formData.tx_address}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="Complemento"
        name="tx_complement"
        value={formData.tx_complement}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Cidade"
        name="tx_city"
        value={formData.tx_city}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="Estado"
        name="tx_state"
        value={formData.tx_state}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="Observações"
        name="tx_obs"
        value={formData.tx_obs}
        onChange={handleInputChange}
        fullWidth
        multiline
        rows={3}
      />
      <FormControl fullWidth required>
        <InputLabel>Situação</InputLabel>
        <Select
          label="Situação"
          name="en_sit"
          value={formData.en_sit}
          onChange={handleSelectChange}
        >
          <MenuItem value="Ativo">Ativo</MenuItem>
          <MenuItem value="Inativo">Inativo</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </Box>
  );
};

export default CondoForm;
