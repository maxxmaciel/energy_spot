import { Box, Paper, Typography } from "@mui/material";
import React from "react";

type RecargaContentProps = {
  content: {
    date: string;
    amount: string;
    status: string;
  }[];
};

const RecargaContent: React.FC<RecargaContentProps> = ({ content }) => {
  return (
    <Box>
      {content.map((recarga, index) => (
        <Paper key={index} sx={{ padding: 2, marginBottom: 2,cursor:"pointer" }} >
          <Typography>Data: {recarga.date}</Typography>
          <Typography>Valor: {recarga.amount}</Typography>
          <Typography>Status: {recarga.status}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default RecargaContent;
