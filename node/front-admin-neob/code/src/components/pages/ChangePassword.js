/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      LogIn.js
//Descripción:  Página LogIn del front-end de NeoB utilizada por los administradores para iniciar 
sesión en el sistema */

import React from 'react';
import './LogIn.css'
import { useHistory } from "react-router-dom";
import { Button } from '../Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Cross from '../Cross';
import { Checkmark } from 'react-checkmark';
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

export default function ChangePassword() {
    const classes = useStyles();

    const history = useHistory();

    const [errorCurrentPasswd, setErrorCurrentPasswd] = React.useState(false); //Contraseña actual vacía

    const [errorNewPasswd, setErrorNewPasswd] = React.useState(false); //Nueva contraseña vacía

    const [errorNewPasswd2, setErrorNewPasswd2] = React.useState(false); //Nueva contraseña vacía (la de repetir)

    const [failMatchPasswds, setFailMatchPasswds] = React.useState(false); //No coincide la nueva contraseña

    const [currentPassword, setCurrentPassword] = React.useState("");

    const [newPassword, setNewPassword] = React.useState("");

    const [newPassword2, setNewPassword2] = React.useState("");

    const [loading,setLoading] = React.useState(false);

    const [correct,setCorrect] = React.useState(false);

    const [reply ,setReply] = React.useState(false);

    const [message ,setMessage] = React.useState("");

    const user = AuthenticationDataService.getCurrentUser();

    const onChangeCurrentPassword = (e) => {
        setCurrentPassword(e.target.value);
        if (e.target.value === ""){
            setErrorCurrentPasswd(true);
        }
        else{
            setErrorCurrentPasswd(false);
        }
    }

    const onChangeNewPassword = (e) => {
        setNewPassword(e.target.value)
        if (e.target.value === ""){
            setErrorNewPasswd(true);
        }
        else{
            setErrorNewPasswd(false);
        }
        setFailMatchPasswds(false);
    }

    const onChangeNewPassword2 = (e) => {
        setNewPassword2(e.target.value)
        if (e.target.value === ""){
            setErrorNewPasswd2(true);
        }
        else{
            setErrorNewPasswd2(false);
        }
        if (e.target.value === newPassword){
            setFailMatchPasswds(false);
        }
        else{
            setFailMatchPasswds(true);
        }
    }


    const handleChangePassword = () => {
        var noErrors = true;
        if(newPassword !== newPassword2){ //no coinciden las contraseñas
            setFailMatchPasswds(true);
            noErrors= false;
        }
        if(newPassword === ""){ //la contraseña nueva no puede ser vacía
            setErrorNewPasswd(true)
            setErrorNewPasswd2(true)
            noErrors= false;
        }
        if(currentPassword === ""){ //la contraseña actual no puede ser vacía
            setErrorCurrentPasswd(true);
            noErrors = false;
        }
        if (noErrors){
            setLoading(true);
            var data = {
                usuario: user.usuario,
                newContrasenya: newPassword,
                currentContrasenya: currentPassword
            };
            AuthenticationDataService.changePassword(data)
            .then(response => {
                if(response.data.message === "Contraseña cambiada correctamente"){
                    setCorrect(true);
                }else if(response.data.message === "La contraseña introducida es incorrecta") {
                    setCorrect(false);
                }else{
                    setCorrect(false);
                }
                setMessage(response.data.message)
                setReply(true);
                setLoading(false);
            })
            .catch(e => {
                setCorrect(false);
                setMessage("Algo salío mal ...")
                setReply(true);
                setLoading(false);
            });
        }
    }

    return (
        <div>
        { user ?

            <Grid container component="main" className={classes.root}>
                <CssBaseline />
            <Grid item xs={12} sm={8} md={5} style={{margin: 'auto', marginTop: '0', marginBottom: '0'}} component={Paper} elevation={6} square>
            { loading ?
                <div className={classes.paper}>
                    <ReactLoading className = 'check' type='bars' color='#000c41' height={256} width={256} />
                </div>
            :
                <div>
                    { reply ?
                        <div className={classes.paper}>
                            <h1> {message} </h1>
                            <br></br>
                            {correct ?
                                < Checkmark className="check" size={256}/>
                            :
                                <Cross />
                            }
                            <br></br>
                            <Button
                                className='btns'
                                buttonStyle='btn--outline3'
                                buttonSize='btn--large'
                                path="/administracion">
                                Finalizar
                            </Button>
                        </div>
                    :
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h5">
                                Cambiar contraseña
                            </Typography>
                            <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="currentPassword"
                                label="Contraseña actual"
                                type="password"
                                id="currentPassword"
                                autoComplete="current-password"
                                onChange={onChangeCurrentPassword}
                                value={currentPassword}
                                error={errorCurrentPasswd } 
                                helperText={errorCurrentPasswd ? 'La contraseña no puede ser vacía' : ' ' }
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="newPassword"
                                label="Contraseña nueva"
                                type="password"
                                id="newPassword"
                                autoComplete="new-Password"
                                onChange={onChangeNewPassword}
                                value={newPassword}
                                error={errorNewPasswd || failMatchPasswds} 
                                helperText={errorNewPasswd ? 'La contraseña nueva no puede ser vacía' : failMatchPasswds ? 'Las contraseñas no coinciden' : ' ' }
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="newPassword2"
                                label="Repetir la nueva contraseña"
                                type="password"
                                id="newPassword2"
                                autoComplete="new-Password-2"
                                onChange={onChangeNewPassword2}
                                value={newPassword2}
                                error={errorNewPasswd2 || failMatchPasswds} 
                                helperText={errorNewPasswd2 ? 'La contraseña nueva no puede ser vacía' : failMatchPasswds ? 'Las contraseñas no coinciden' : ' ' }
                            />
                            <Button classname='buttonAdmin'
                                buttonStyle='btn--outline2'
                                onClick={handleChangePassword}
                                to=""
                            >
                                CAMBIAR CONTRASEÑA
                            </Button>
                            </form>
                        </div>
                    }
                </div>
            }    
            </Grid>
            </Grid>
        :
            history.push("/") //Si no hay usuario logeado, se va a login
        }
        </div>
    );
}


/*


*/