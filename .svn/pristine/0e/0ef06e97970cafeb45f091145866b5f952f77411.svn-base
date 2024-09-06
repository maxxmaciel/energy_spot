import { Box, List, ListItem, ListItemText, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import CondoForm from '../Condominio/NewCondominioForm';

const condos = [
  { id: 1, name: "Condomínio A" },
  { id: 2, name: "Condomínio B" },
  { id: 3, name: "Condomínio C" },
  // Adicione mais condomínios conforme necessário
];

const CondoList: React.FC = () => {
  const [selectedCondo, setSelectedCondo] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (condoName: string) => {
    setSelectedCondo(condoName);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCondo(null);
  };

  return (
    <Box>
      <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
        Lista de Condomínios
      </Typography>
      <List>
        {condos.map((condo) => (
          <ListItem button key={condo.id} onClick={() => handleOpenModal(condo.name)}>
            <ListItemText primary={condo.name} />
          </ListItem>
        ))}
      </List>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box 
          sx={{ 
            p: 4, 
            backgroundColor: '#fff', 
            maxWidth: 500, 
            width: '90%', 
            margin: 'auto', 
            marginTop: '10%',
            overflowY: 'auto',
            maxHeight: '90vh',
            borderRadius: 1,
            boxShadow: 24,
            outline: 'none',
            '@media (max-width: 600px)': {
              marginTop: '20%',
              maxWidth: '95%',
            }
          }}
        >
          <Typography variant="h6" component="h3" sx={{ marginBottom: 2 }}>
            Editar {selectedCondo}
          </Typography>
          <CondoForm />
        </Box>
      </Modal>
    </Box>
  );
};

export default CondoList;
