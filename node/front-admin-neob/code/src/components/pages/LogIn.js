/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      LogIn.js
//Descripción:  Página LogIn del front-end de BibliUz utilizada por los administradores para iniciar 
                sesión en el sistema */

import React from 'react';
import './LogIn.css'
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { Button } from '../Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AuthenticationDataService from "../../services/auth.service";
import ReactLoading from 'react-loading';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    margin: 'auto',
  },
  image: {
    backgroundImage: 'url(/images/biblioteca.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const classes = useStyles();

  const history = useHistory();

  //const [logedin, setLogedin] = React.useState(false);

  const [errorMail, setErrorMail] = React.useState(false);

  const [errorPasswd, setErrorPasswd] = React.useState(false);

  const [failAuth, setFailAuth] = React.useState(false);

  const [mail, setMail] = React.useState("");

  const [passwd, setPasswd] = React.useState("");

  const [loading,setLoading] = React.useState(false);

  const emailRegEx = /^\S+@unizar\.es$/;

  const user = AuthenticationDataService.getCurrentUser();

  const onChangeMail = (e) => {
    setMail(e.target.value);
    if (!emailRegEx.test(e.target.value)){
      setErrorMail(true);
    }
    else
    {
      setErrorMail(false);
    }
  }

  const onChangePasswd = (e) => {
    setPasswd(e.target.value);
    if (e.target.value === ""){
      setErrorPasswd(true);
    }
    else
    {
      setErrorPasswd(false);
    }
  }

  const handleLogin = () => {
    var noErrors = true;
    if(!emailRegEx.test(mail)){
      setErrorMail(true);
      noErrors= false;
    }
    if(passwd === ""){
      setErrorPasswd(true);
      noErrors = false;
    }
    if (noErrors){
      setLoading(true);
      var data = {
        usuario: mail.split("@")[0],
        contrasenya: passwd
      };
      AuthenticationDataService.login(data.usuario,data.contrasenya)
        .then(response => {
          if(response.accessToken){
            window.location.reload();
          }else{
            setLoading(false);
            setFailAuth(true);
          }
        })
        .catch(e => {
          //console.log(e);
          setLoading(false);
          setFailAuth(true);
        });
    }
  }

  return (
    <div>
    { user ?
      history.push("/administracion")
    :
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={12} sm={8} md={5} style={{margin: 'auto', marginTop: '0', marginBottom: '0'}} component={Paper} elevation={6} square>
      { loading ?
        <div className={classes.paper}>
          <ReactLoading className = 'check' type='bars' color='#000c41' height={256} width={256} />
        </div>
        :
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Bienvenido
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              required
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              className={classes.textField}
              autoFocus
              onChange={onChangeMail}
              value={mail}
              error={errorMail || failAuth} 
              helperText={errorMail ? 'Introduzca su correo de administrador' : failAuth ? 'Correo o contraseña incorrectos' : ' ' }
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChangePasswd}
              value={passwd}
              error={errorPasswd || failAuth} 
              helperText={errorPasswd ? 'La contraseña no puede ser vacía' : failAuth ? 'Correo o contraseña incorrectos' : ' ' }
            />
            <Button classname='buttonAdmin'
              buttonStyle='btn--outline2'
              onClick={handleLogin}
              to=""
            >
              INICIAR SESIÓN
            </Button>
          </form>
        </div>
      }      
      </Grid>
    </Grid>
    }
    </div>
  );
}
