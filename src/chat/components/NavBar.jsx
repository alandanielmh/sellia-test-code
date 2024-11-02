import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Button, Grid2 } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../store/auth';
import { useThemeContext } from "../../theme";
import { buttonTheme } from "../../theme/styles";

export const NavBar = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { displayName, photoURL } = useSelector(state => state.auth)

  const dispatch = useDispatch()



    const onLogOut = () => {
        dispatch( startLogout())
    }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [{tittle: "Logout"}];

  return (
    <AppBar
      position="fixed"
      sx={
        {
         backgroundColor: 'secondary.main',
          height: '80px',
          justifyContent: 'center'
        }
      }
    >
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Box>Image</Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Grid2 sx={{mr: '100px'}}>
          <Grid2>
            <Button onClick={toggleTheme} sx={buttonTheme} className="btn btn-theme" id="button-theme"><i className={`fa-solid  ${isDarkMode ? 'fa-moon' : 'fa-sun'}`} id="icon_theme"></i> Theme </Button>
          </Grid2>
          </Grid2>
          <Typography>{ displayName}</Typography>
          <Tooltip title="Abrir Opciones" arrow >
            <Badge
              onClick={handleOpenUserMenu}
              sx={{ p: 0,  '& .MuiBadge-badge': {
                height: '22px',
                Width: '22px',
                cursor: 'pointer'
              }, }}
              color="success"
              overlap="circular"
              badgeContent=" "
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ width: 80, height: 80 }} alt="Remy Sharp" src={photoURL} />
              </IconButton>
            </Badge>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => onLogOut()}>
                <Typography sx={{ textAlign: "center" }}>{setting.tittle}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
