import { Box, Typography } from "@mui/material";
import React from "react";

type ContactContentProps = {
  content: {
    email: string;
    phone: string;
    emergencyContact: {
      name: string;
      relation: string;
      phone: string;
    };
  };
};

const ContactContent: React.FC<ContactContentProps> = ({ content }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Email: {content.email}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Telefone: {content.phone}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Contato de Emergência:
      </Typography>
      <Typography>
        {`${content.emergencyContact.name} (${content.emergencyContact.relation})`}
      </Typography>
      <Typography>Telefone: {content.emergencyContact.phone}</Typography>
    </Box>
  );
};

export default ContactContent;
