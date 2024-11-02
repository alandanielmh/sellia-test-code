import {
  Avatar,
  Box,
  Button,
  Drawer,
  Typography,
  Grid2,
  useTheme
} from "@mui/material";
import { useSelector } from "react-redux";
import ActiveIcon from '../../assets/svg/Active_Icon_1.svg';
import CallIcon from '../../assets/svg/Icono_Llamada.svg';
import EmailIcon from '../../assets/svg/Icono_Correo.svg';
import VideoCallIcon from '../../assets/svg/Icono _VideoLlamada.svg';
import ChatIcon from '../../assets/svg/Icono _Chat.svg';
import CheckIcon from '../../assets/svg/Check_Icon.svg';
import PauseIcon from '../../assets/svg/Pause_Icon.svg';
import CloseIcon from '../../assets/svg/Close_Icon.svg';
import { buttonMultimediaStyle, buttonRightStyle, drawerPaperRight } from "../../theme/styles";

export const SideBarRight = ({ drawerWidth = 387 }) => {
  const theme = useTheme()
  const { active } = useSelector((state) => state.chat);
  const { name, photoURL, chats} = active

  const multimediaCount = chats.filter(message => message.message.multimedia).length;

  const drawerWidthNav = drawerWidth - 8;

  const circle = (component) => (
    <Box component="span" sx={{ 
      width: '10%', 
      height: '10%',
      borderRadius: '50%', 
      backgroundColor: '#FFFFFF', 
      color: '#000000', 
      fontSize: { xs: '14px', sm: '18px' },
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      {component}
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidthNav }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        anchor="right"
        sx={drawerPaperRight(drawerWidth, theme)}
      >
        <Grid2 container sx={{ mt: 2 }} justifyContent="center">
          <Avatar
            sx={{
              width: { xs: 200, sm: 275 },
              height: { xs: 200, sm: 275 },
            }}
            alt="User Avatar"
            src={photoURL}
          />
        </Grid2>

        <Grid2
          container
          sx={{
            alignItems: "center",
            justifyContent: "center",
            my: 2,
          }}
        >
          <Typography
            sx={{ color: "text.main", fontWeight: 'bold', fontSize: { xs: '20px', sm: '24px' } }}
          >
            { name}
          </Typography>
          <Grid2
            item
            display="flex"
            sx={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 1,
            }}
          >
            <ActiveIcon style={{ height: "15px", width: "15px", marginRight: '8px' }} />
            <Typography sx={{ color: "text.main", fontSize: { xs: '14px', sm: '18px' } }}>
              Activo Ahora
            </Typography>
          </Grid2>
        </Grid2>

        {/* Action Icons */}
        <Grid2 container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Grid2 item xs={3}><CallIcon style={{ width: '100%' }} /></Grid2>
          <Grid2 item xs={3}><EmailIcon style={{ width: '100%' }} /></Grid2>
          <Grid2 item xs={3}><VideoCallIcon style={{ width: '100%' }} /></Grid2>
          <Grid2 item xs={3}><ChatIcon style={{ width: '100%' }} /></Grid2>
        </Grid2>

        <Grid2 item sx={{ mt: 2, width: '100%', m: 'auto' }}>
          <Button
            variant="contained"
            sx={buttonMultimediaStyle}
          >
            <Typography sx={{ color:'text.terniary'}}>Ver Multimedia</Typography>
            {circle(multimediaCount)}
          </Button>
        </Grid2>

        <Typography sx={{ color: 'text.main', m: 'auto' }}>
          Marcar estatus de la conversacion como:
        </Typography>
        

        <Grid2 item sx={{ mt: 2, width: '100%', m: 'auto' }}>
          {[{color:'#439F6E', tittle: 'Activo', icon: <CheckIcon />}, {color:'#FFB82E', tittle: 'Pausado', icon: <PauseIcon />}, {color:'#F93232', tittle: 'Cerrado', icon: <CloseIcon />}].map((item, index) => (
            <Button
              key={index}
              variant="contained"
              sx={buttonRightStyle(item)}
            >
              <Typography sx={{color : 'text.terniary'}}>{item.tittle}</Typography>
              {circle(item.icon)}
            </Button>
          ))}
        </Grid2>
      </Drawer>
    </Box>
  );
};
