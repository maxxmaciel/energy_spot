import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import NewVeiculoForm, { VeiculoData } from "../Veiculo/NewVeiculoForm";

interface VehicleContentProps {
  content: VeiculoData[];
}

const VehicleContent: React.FC<VehicleContentProps> = ({ content }) => {
  const [open, setOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<VeiculoData | null>(null);

  const handleOpen = (vehicle?: VeiculoData) => {
    setSelectedVehicle(vehicle || null);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box>
      {content.map((vehicle, index) => (
        <Paper
          key={index}
          sx={{ padding: 2, marginBottom: 2 }}
          style={{ cursor: "pointer" }}
          onClick={() => handleOpen(vehicle)}
        >
          <Typography>Tipo de veículo: {vehicle.tipo_veiculo}</Typography>
          <Typography>Modelo: {vehicle.modelo}</Typography>
          <Typography>Ano de Fabricação: {vehicle.ano_fabricacao}</Typography>
          <Typography>Placa: {vehicle.tx_plate}</Typography>
        </Paper>
      ))}

      {/* Botão para adicionar veículos */}
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={() => handleOpen()}>
          Adicionar Veículos
        </Button>
      </Box>

      {/* Modal para adicionar/editar veículo */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
            boxShadow: 24,
          }}
        >
          <NewVeiculoForm vehicle={selectedVehicle || undefined} />
        </Box>
      </Modal>
    </Box>
  );
};

export default VehicleContent;
