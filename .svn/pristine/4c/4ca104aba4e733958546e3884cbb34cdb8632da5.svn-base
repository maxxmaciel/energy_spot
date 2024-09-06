import { Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

interface GatewayFormProps {
  cod_gateway: string;
  rm_vendor: string;
  rm_model: string;
  tx_serial: string;
  en_at_wireless: boolean;
  en_ip_dynamic: boolean;
  ip_local: string;
  ip_wan: string;
  tx_mac: string;
  tx_ssid: string;
  tx_rssi: string;
  tx_psk: string;
  tx_version_fw: string;
  tx_version_hw: string;
  tx_version_fw_desc: string;
  tx_version_hw_desc: string;
  dt_create: string;
  ts_change: string;
}

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const GatewayForm: React.FC = () => {
  const [formData, setFormData] = useState<GatewayFormProps>({
    cod_gateway: '',
    rm_vendor: '',
    rm_model: '',
    tx_serial: '',
    en_at_wireless: false,
    en_ip_dynamic: false,
    ip_local: '',
    ip_wan: '',
    tx_mac: '',
    tx_ssid: '',
    tx_rssi: '',
    tx_psk: '',
    tx_version_fw: '',
    tx_version_hw: '',
    tx_version_fw_desc: '',
    tx_version_hw_desc: '',
    dt_create: '',
    ts_change: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Lógica para enviar os dados para a API
  };

  return (
    <Container maxWidth="sm">
      <StyledPaper elevation={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Cadastro de Gateway
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Código do Gateway"
                name="cod_gateway"
                value={formData.cod_gateway}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Fornecedor"
                name="rm_vendor"
                value={formData.rm_vendor}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Modelo"
                name="rm_model"
                value={formData.rm_model}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Número de Série"
                name="tx_serial"
                value={formData.tx_serial}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="en_at_wireless"
                    checked={formData.en_at_wireless}
                    onChange={handleChange}
                  />
                }
                label="Wireless Ativo"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="en_ip_dynamic"
                    checked={formData.en_ip_dynamic}
                    onChange={handleChange}
                  />
                }
                label="IP Dinâmico"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="IP Local"
                name="ip_local"
                value={formData.ip_local}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="IP WAN"
                name="ip_wan"
                value={formData.ip_wan}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="MAC Address"
                name="tx_mac"
                value={formData.tx_mac}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="SSID"
                name="tx_ssid"
                value={formData.tx_ssid}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="RSSI"
                name="tx_rssi"
                value={formData.tx_rssi}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="PSK"
                name="tx_psk"
                value={formData.tx_psk}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Versão do Firmware"
                name="tx_version_fw"
                value={formData.tx_version_fw}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Versão do Hardware"
                name="tx_version_hw"
                value={formData.tx_version_hw}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Descrição da Versão do Firmware"
                name="tx_version_fw_desc"
                value={formData.tx_version_fw_desc}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Descrição da Versão do Hardware"
                name="tx_version_hw_desc"
                value={formData.tx_version_hw_desc}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Data de Criação"
                name="dt_create"
                value={formData.dt_create}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Data de Modificação"
                name="ts_change"
                value={formData.ts_change}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Cadastrar Gateway
              </Button>
            </Grid>
          </Grid>
        </form>
      </StyledPaper>
    </Container>
  );
};

export default GatewayForm;
