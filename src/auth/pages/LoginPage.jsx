import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid2 as Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';
import { textFieldStyleLogin } from '../../theme/styles';

const formData = {
  email: '',
  password: ''
}


export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)


  const dispatch = useDispatch()
  const {formState,email, password, onInputChange} = useForm(formData)

  const isAuthenticated = useMemo(()=> status === 'checking', [status] )

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(startLoginWithEmailPassword(formState))
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn())
  }


  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__slow'>
          <Grid container >
            <Grid item xs={ 12 } sx={{ mt: 2, width: '100%' }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                sx={textFieldStyleLogin}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2, width: '100%'}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
                sx={textFieldStyleLogin}
              />
            </Grid>
            <Grid container display={ !!errorMessage ? '' : 'none'} sx={{mt: 1, width: '100%'}}>
              <Grid item xs={ 12 } >
                <Alert severity='error'>
                  { errorMessage }
                </Alert>
              </Grid>
            </Grid>
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1, width: '100%' }}>
              <Grid item xs={ 12 } sm={ 6 } sx={{ width: '47.5%'}}>
                <Button disabled={isAuthenticated} type='submit' variant='contained' fullWidth sx={{backgroundColor: 'buttonLayout.secondary', color: 'login.text'}}>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } sx={{ width: '47.5%'}}>
                <Button disabled={isAuthenticated} onClick={ onGoogleSignIn } variant='contained' fullWidth sx={{backgroundColor: 'buttonLayout.secondary', color: 'login.text'}}>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end' sx={{color: 'button.color'}}>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
