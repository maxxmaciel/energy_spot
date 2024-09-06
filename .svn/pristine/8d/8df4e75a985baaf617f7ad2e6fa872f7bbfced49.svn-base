import { Box, Typography } from "@mui/material";
import React from "react";

type PrincipalContentProps = {
  content: {
    lastAccess: string;
    accountStatus: string;
    notifications: string[];
    recentActions: string[];
  };
};

const PrincipalContent: React.FC<PrincipalContentProps> = ({ content }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Último Acesso: {content.lastAccess}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Status da Conta: {content.accountStatus}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Notificações:  
      </Typography>
      <ul>
        {content.notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <Typography variant="h6" gutterBottom>
        Ações Recentes:
      </Typography>
      <ul>
        {content.recentActions.map((action, index) => (
          <li key={index}>{action}</li>
        ))}
      </ul>
    </Box>
  );
};

export default PrincipalContent;
