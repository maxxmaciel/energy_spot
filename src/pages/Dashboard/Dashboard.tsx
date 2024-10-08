import ClearIcon from "@mui/icons-material/Clear";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";


import CondoList from "./CondoList";
import ContactContent from "./ContactContent";
import PrincipalContent from "./PrincipalContent";
import RecargaContent from "./RecargaContent";
import { userData } from "./userData";
import VehicleContent from "./VehicleContent";

const Dashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  const renderContent = () => {
    const selectedContent = userData.menu[selectedTab].content;

    switch (userData.menu[selectedTab].label) {
      case "Principal":
        if (!Array.isArray(selectedContent) && "lastAccess" in selectedContent) {
          return <PrincipalContent content={selectedContent as any} />;
        }
        break;

      case "Veículos":
        if (
          Array.isArray(selectedContent) &&
          selectedContent.length > 0 &&
          "tipo_veiculo" in selectedContent[0]
        ) {
          return <VehicleContent content={selectedContent as any} />;
        }
        break;
    /*
      case "Endereço":
        if (!Array.isArray(selectedContent) && "currentAddress" in selectedContent) {
          return <AddressContent content={selectedContent as any} />;
        }
        break;
        */
      case "Contatos":
        if (!Array.isArray(selectedContent) && "email" in selectedContent) {
          return <ContactContent content={selectedContent as any} />;
        }
        break;
        case "Condomínios":
          return <CondoList />;

      case "Recargas":
        if (
          Array.isArray(selectedContent) &&
          selectedContent.length > 0 &&
          "date" in selectedContent[0]
        ) {
          return <RecargaContent content={selectedContent as any} />;
        }
        break;

      default:
        return null;
    }
  };

  return (
    <Grid container sx={{ backgroundColor: "rgb(31, 45, 61)", color: "#fff" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "rgb(31, 45, 61)",
            color: "#fff",
          },
        }}
      >
        <List>
          {userData.menu.map((item, index) => (
            <ListItem
              button
              key={item.label}
              onClick={() => handleTabChange(index)}
              sx={{
                "&:hover": {
                  backgroundColor: "#1B77F4",
                },
                ...(selectedTab === index && {
                  backgroundColor: "#1B77F4",
                }),
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Grid item xs>
        <Box
          sx={{
            p: 3,
            backgroundColor: "#f5f5f5",
            minHeight: "100vh",
            color: "#000",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 3,
            }}
          >
            <Typography variant="h4" sx={{ color: "rgb(31, 45, 61)" }}>
              {userData.menu[selectedTab].label}
            </Typography>
            <Box>
              <IconButton>
                <RefreshIcon sx={{ color: "rgb(31, 45, 61)" }} />
              </IconButton>
              <IconButton>
                <ClearIcon sx={{ color: "rgb(31, 45, 61)" }} />
              </IconButton>
            </Box>
          </Box>
          {renderContent()}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
