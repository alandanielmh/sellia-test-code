import { Grid2, Typography } from '@mui/material';
import ChatIcon from '../../assets/svg/Icono _Chat.svg';
import { Height } from '@mui/icons-material';


export const NothingSelectedView = () => {
  return (
    <Grid2
      className='animate__animated animate__fadeIn animate__slow'
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100%', backgroundColor: '#425473', borderRadius: 3, flex: 1}}
    >
        <Grid2 item xs={ 12 }>
            <ChatIcon style={{ width: '100px', height: '100px', color: 'white' }} />
        </Grid2>
        <Grid2 item xs={ 12 }>
            <Typography color="white" variant='h5'>Selecciona un chat</Typography>
        </Grid2>
    </Grid2>
  )
}
