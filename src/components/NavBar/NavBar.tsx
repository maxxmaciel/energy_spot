import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    Typography
} from '@mui/material';
import { useState } from 'react';
import { matchPath, useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

// Define types for the props
interface HamburgerMenuProps {
  onClick: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => (
  <IconButton edge="start" color="inherit" aria-label="menu" onClick={onClick}>
    <MenuIcon />
  </IconButton>
);

// Define types for the Menu component
interface MenuProps {
  onButtonClick: (buttonName: string) => void;
}

// Define the menu structure type
interface HandleMenu {
  [key: string]: {
    navBar: string[];
  };
}

const handleMenu: HandleMenu = {
  "Franqueado": {
    navBar: ["Home", "Upload", "Arquivo"]
  },
  "Analytics": {
    navBar: []
  }
}

export const Menu: React.FC<MenuProps> = ({ onButtonClick }) => (
  <Box
    sx={{
      width: 250,
      height: '100%',
      bgcolor: 'background.paper',
      display: 'flex',
      flexDirection: 'column',
      padding: 2,
    }}
  >
    {Object.entries(handleMenu).map(([key, value], idx) => (
      <Button key={idx} color="inherit" onClick={() => onButtonClick(key)}>
        {key}
      </Button>
    ))}
  </Box>
);

export const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { section = '', navbar = '' } = useParams<{ section?: string; navbar?: string }>();
  const handleMenuClick = () => {
    setOpen(!open);
  };

  const PathArray = location.pathname.split('/').filter(path => path);

  const handleButtonClick = (buttonName: string) => {
    console.log(`${buttonName} button clicked`);
    const navBar_0 = handleMenu[buttonName]?.navBar[0];

    const newPath = `/${buttonName}${navBar_0 ? "/" + navBar_0 : ""}`;

    const isCurrentPath = (path: string) => matchPath({ path, end: true }, location.pathname);

    if (!isCurrentPath(newPath) && !isCurrentPath(newPath + '/:section')) {
      navigate(newPath);
    }
    setOpen(false);
  };

  return (
    <NavBarStyled>
      <AppBar position="static" className='h'>
        <div className="tool">
          <HamburgerMenu onClick={handleMenuClick} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          </Typography>
        </div>

        <div className="tool">
          <ul>
            {
              handleMenu[PathArray[0]?.toString()]?.navBar.map((str, idx) =>
                <li key={idx} onClick={() => navigate("/" + navbar + "/" + str)}>{str}</li>
              )
            }
          </ul>
        </div>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Menu onButtonClick={handleButtonClick} />
      </Drawer>
    </NavBarStyled>
  );
};

const NavBarStyled = styled.div`
.h{
    height: 34px; 
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: rgb(31, 45, 61) ;
    padding: 0px 25px;
    align-content: space-between;
    justify-content: space-between;
    flex-direction: row-reverse;

    .tool {
      background-color: #212121;
      border: 1px solid #212121;
   
      display: flex;
      align-items: center;
      flex-direction: row-reverse;

      >ul{
      cursor: pointer;
        >li{
         user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        }
      }
}
}
`;
