import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import Login from "../../pages/Login/Login";

type ModalShouldLoginProps = {
  open: boolean;
  onClose: () => void;
};

const ModalShouldLogin: React.FC<ModalShouldLoginProps> = ({ open, onClose }) => {
    
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 540,
          bgcolor: "background.paper",
          p: 4,
          boxShadow: 24,
          borderRadius: 2,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" component="h2">
            Login 
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Login />
      </Box>
    </Modal>
  );
};

export default ModalShouldLogin;
