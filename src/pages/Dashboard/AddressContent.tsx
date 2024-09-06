import { Box, Paper, Typography } from "@mui/material";
import React from "react";

type AddressContentProps = {
  content: {
    currentAddress: {
      street: string;
      number: string;
      complement: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
    };
    previousAddresses: {
      street: string;
      number: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
    }[];
  };
};

const AddressContent: React.FC<AddressContentProps> = ({ content }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Endereço Atual:
      </Typography>
      <Typography>
        {`${content.currentAddress.street}, ${content.currentAddress.number} ${content.currentAddress.complement}`}
      </Typography>
      <Typography>
        {`${content.currentAddress.neighborhood} - ${content.currentAddress.city} - ${content.currentAddress.state}`}
      </Typography>
      <Typography>{`CEP: ${content.currentAddress.zipCode}`}</Typography>
      <Typography variant="h6" gutterBottom>
        Endereços Anteriores:
      </Typography>
      {content.previousAddresses.map((address, index) => (
        <Paper key={index} sx={{ padding: 2, marginBottom: 2, cursor: 'pointer' }}>
          <Typography>{`${address.street}, ${address.number}`}</Typography>
          <Typography>
            {`${address.neighborhood} - ${address.city} - ${address.state}`}
          </Typography>
          <Typography>{`CEP: ${address.zipCode}`}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default AddressContent;
