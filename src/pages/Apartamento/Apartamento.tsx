import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Apartamento = () => {
  const [formValues, setFormValues] = useState({
    tx_building_id: "",
    tx_unity: "",
    num_unity: "",
    tx_floor: "",
    tx_email: "",
    tx_fone: "",
    en_type: "",
    en_sit: "",
    dt_create: "",
    ts_change: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para envio do formulário
    console.log("Apartamento Registrado:", formValues);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Cadastro de Apartamento
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Preencha os campos abaixo para cadastrar um novo apartamento.
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nome/ID do Prédio"
              name="tx_building_id"
              value={formValues.tx_building_id}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Unidade do Apartamento"
              name="tx_unity"
              value={formValues.tx_unity}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Número da Unidade"
              name="num_unity"
              value={formValues.num_unity}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Andar"
              name="tx_floor"
              value={formValues.tx_floor}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="tx_email"
              value={formValues.tx_email}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Telefone"
              name="tx_fone"
              value={formValues.tx_fone}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Tipo de Apartamento"
              name="en_type"
              value={formValues.en_type}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            >
              <MenuItem value="Administrativa">Administrativa</MenuItem>
              <MenuItem value="Residencial">Residencial</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Situação"
              name="en_sit"
              value={formValues.en_sit}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            >
              <MenuItem value="Ativa">Ativa</MenuItem>
              <MenuItem value="Inativa">Inativa</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="datetime-local"
              label="Data de Criação"
              name="dt_create"
              value={formValues.dt_create}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="datetime-local"
              label="Última Alteração"
              name="ts_change"
              value={formValues.ts_change}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button type="submit" variant="contained" color="primary" size="large" style={{ padding: '10px 20px' }}>
              Registrar Apartamento
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Apartamento;
