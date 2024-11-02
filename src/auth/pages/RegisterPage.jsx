import { useDispatch, useSelector} from 'react-redux'
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid2 as Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from '../../store/auth';
import { useMemo, useState } from 'react';
import { textFieldStyleRegister } from '../../theme/styles';

const initialForm = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Debe contener un @"],
  password: [(value) => value.length >= 6, "Debe ser al menos de 6 caracteres"],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector(state => state.auth)

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status] )

  const [formSubmitted, setformSubmitted] = useState(false)
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(initialForm, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true)
    if (!isFormValid) return ;
    dispatch(startCreatingUserWithEmailPassword(formState))

  };

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__slow'>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2, width: '100%' }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid ? displayNameValid : " "}
              sx={textFieldStyleRegister}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2, width: '100%' }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid ? emailValid : " "}
              sx={textFieldStyleRegister}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2, width: '100%' }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid ? passwordValid : " "}
              sx={textFieldStyleRegister}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1, width: '100%' }}>

          <Grid item xs={12} display={ !!errorMessage ? '' : 'none'}>
            <Alert severity='error'>
              { errorMessage }
            </Alert>
          </Grid>
            <Grid item xs={12} sx={{width: '60%'}}>
              <Button disabled={isCheckingAuthentication} type="submit" variant="contained" fullWidth sx={{backgroundColor: 'layout.main', color: 'text.main'}}>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end" sx={{color: 'button.color'}}>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
