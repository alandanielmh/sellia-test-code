import { Button, Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { useThemeContext } from '../../theme';
import { boxLayoutAuth, buttonTheme } from '../../theme/styles';


export const AuthLayout = ({ children, title = '' }) => {

  const { isDarkMode, toggleTheme } = useThemeContext();
  const theme = useTheme()

  const imagen = isDarkMode ? '/src/assets/img/Logo_Login.png' : '/src/assets/img/Logo_Login2.png'
  return (
    
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'layout.main'}}
    >
      <img src={imagen} loading='lazy' style={{ position: 'absolute', top: '1%', width: '35%', height: '20%'}}/>
      <Grid sx={{ position: 'absolute', top: '5%', right: '5%'}}>
      <Button onClick={toggleTheme} sx={buttonTheme(theme)} className="btn btn-theme" id="button-theme"><i className="fa-solid fa-sun" id="icon_theme"></i> Theme </Button>
      </Grid>
      <Grid item
       className='box-shadow'
       xs={ 3 }
       sx={boxLayoutAuth}>
          
          <Typography variant='h5' sx={{ mb: 1, color:'button.color' }}>{ title }</Typography>

            
            { children }

        </Grid>

    </Grid>

  )
}
