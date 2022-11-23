/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      Administracion.js
//Descripción:  Página Administracion del front-end de BibliUz solo accesible para los administradores de salas*/

import React from 'react';
import '../../App.css';
import '../SelectDate.css'
import { makeStyles } from '@material-ui/core/styles';
import Application from "../application.module.scss"
import AuthenticationDataService from "../../services/auth.service";
import CambioEstadoDataService from "../../services/cambiarEstado.service";
import AulasDataService from "../../services/aulas.service";
import ReactLoading from 'react-loading';
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import MoreIcon from "@material-ui/icons/ExpandMore";
import LessIcon from "@material-ui/icons/ExpandLess";
import List from "@material-ui/core/List";
import { useHistory } from "react-router-dom";
import UserService from "../../services/user.service";
import AuthService from "../../services/auth.service";
import { Button } from '../Button';
import SelectSeat from '../SelectSeat';
import Calendar from 'react-calendar'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Checkmark } from 'react-checkmark';
import Cross from '../Cross';
import SeatService from "../../services/seat.service.js";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Switch from '@material-ui/core/Switch';

const rolesDisponibles = [
  {
    value: 'ROLE_ADMIN',
    label: 'Administrador'
  },
  {
    value: 'ROLE_MODERATOR',
    label: 'Moderador'
  }
]

const statusDisponibles = [
  {
    value: 'N',
    label: 'No disponible'
  },
  {
    value: 'L',
    label: 'Libre'
  },
  {
    value: 'O',
    label: 'Ocupado'
  },
  {
    value: 'S',
    label: 'Sucio'
  },
  {
    value: 'E',
    label: 'Escaneado'
  }
]

const useStyles = makeStyles((theme) => ({
    root: {
      width: "90%",
      backgroundColor: theme.palette.background.paper,
      margin: "auto"
    },
    cont: {
      width: "100%",
      margin: "auto"
    },
    aux: {
     overflow: "auto" 
    }
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();

  const [loaded,setLoaded] = React.useState(false);

  const [users,setUsers] = React.useState([]);

  const [expanded,setExpanded] = React.useState("");

  const [expandedLoaded,setExpandedLoaded] = React.useState(false);

  const [expansion,setExpansion] = React.useState([]);

  const [reported, setReported] = React.useState(false);

  const [reply, setReply] = React.useState(false);

  const [correct, setCorrect] = React.useState(false);

  const [message, setMessage] = React.useState("");
  
  //const [errorPassword, setErrorPassword] = React.useState(false);

  const [errorMail, setErrorMail] = React.useState(false);

  //const [password, setPassword] = React.useState("");

  const [mail, setMail] = React.useState("");

  const [user2Del, setUser2Del] = React.useState("");

  const [aula2Del,setAula2Del] = React.useState("");

  const [rol, setRol] = React.useState("ROLE_ADMIN");

  const [newStatus, setNewStatus] = React.useState("N");

  const [errorRol, setErrorRol] = React.useState("");

  const [aula,setAula] = React.useState("CRE.1201.00.400");

  const [openAddUser, setOpenAddUser] = React.useState(false);

  const [openDelUser, setOpenDelUser] = React.useState("");

  const [openAddAula,setOpenAddAula] = React.useState(false);

  const [openDelAula,setOpenDelAula] = React.useState(false);

  const [aulasDisponibles,setAulasDisponibles] = React.useState([]);

  const [errorAula,setErrorAula] = React.useState(false);

  const [aulas,setAulas] = React.useState([]);

  const [fase, setFase] = React.useState("1");

  const [errorAsiento, setErrorAsiento] = React.useState(false);

  const [errorHour, setErrorHour] = React.useState(false);

  const [date, setDate] = React.useState(new Date());

  const [asiento, setAsiento] = React.useState("No has seleccionado un asiento");

  const [estadoAsientos, setEstadoAsientos] = React.useState();

  const [aforoActual, setAforoActual] = React.useState();

  const [aforo1, setAforo1] = React.useState(100);

  const [dstreport, setDstReport] = React.useState(1);

  const [reservados, setReservados] = React.useState(0);

  const [escaneados, setEscaneados] = React.useState(0);

  const [hour, setHour] = React.useState('');

  const [errorStatus, setErrorStatus] = React.useState(false);

  const [permanentAdmin, setPermanentAdmin] = React.useState(true);

  const [fechaVencimiento, setFechaVencimiento] = React.useState(new Date());

  const [permanentAdministra, setPermanentAdministra] = React.useState(true);

  const [fechaFinAdministra, setFechaFinAdministra] = React.useState(new Date());

  const emailRegEx = /^\S+@unizar\.es$/;


  const handleClickOpenAddUser = () => {
    setOpenAddUser(true);
  };

  const handleCloseAddUser = () => {
    setReported(false);
    setReply(false);
    setCorrect(false);
    setOpenAddUser(false);
  };

  const handleCloseDelUser = () => {
    setReported(false);
    setReply(false);
    setCorrect(false);
    setOpenDelUser(false);
  };

  const handleDelUser = () => {
    setReported(true);
    UserService.delUser(user2Del)
      .then(response => {
        //console.log(response);
        if(response.data.status === "Eliminado"){
          setCorrect(true);
        }
        setReply(true);
      })
      .catch(e => {
        //console.log(e);
      });
  }

  const handleAddUser = () => {
    var noErrors = true;
    /*if(password === ""){
      setErrorPassword(true);
      noErrors = false;
    }*/
    if(!emailRegEx.test(mail)){
      setErrorMail(true);
      noErrors= false;
    }

    var fechafin = "PERMANENTE"
    if (!permanentAdmin){
      fechafin = fechaVencimiento.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })
    }
    
    if (noErrors){
      setReported(true);
      AuthService.signup(mail.toString().split("@")[0],rol, fechafin)
        .then(response => {
    
          if(response.data.message === "User was registered successfully!"){
            setMessage("Usuario añadido con éxito")
            setCorrect(true);
          }else if(response.data.message === "User ya existe"){
            setMessage("El usuario ya existe")
            setCorrect(false);
          }
          setReply(true);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }


  const handleClickOpenAddAula = () => {
    AulasDataService.getAulas()
    .then(response => {
      setAulasDisponibles(response.data);
    })
    .catch(e => {
      //console.log(e);
    });
    setOpenAddAula(true);
  };

  const handleCloseAddAula = () => {
    setReported(false);
    setReply(false);
    setCorrect(false);
    setOpenAddAula(false);
  };

  const handleCloseDelAula = () => {
    setReported(false);
    setReply(false);
    setCorrect(false);
    setOpenDelAula(false);
  };

  const handleDelAula = () => {
    setReported(true);
    AulasDataService.delAula(user2Del,aula2Del)
      .then(response => {
        if(response.data.message === "Eliminado"){
          setCorrect(true);
        }
        setReply(true);
      })
      .catch(e => {
        //console.log(e);
      });
  }

  const handleAddAula = () => {
    var noErrors = true;
    if(aula === ""){
      setErrorAula(true);
      noErrors= false;
    }
    
    if (noErrors){
      setReported(true);
      var hoy = new Date()
      var fechaini = hoy.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })
      var fechafin = "PERMANENTE"
      if (!permanentAdministra){
        fechafin = fechaFinAdministra.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })
      }
      AulasDataService.addAula(expanded,aula,fechaini,fechafin)
        .then(response => {
          if(response.data.message === "Correcto"){
            setMessage("Aula añadida con éxito");
            setCorrect(true);
          }else if(response.data.message === "Already exists"){
            setMessage("El Aula ya está añadida");
          }
          setReply(true);
        })
        .catch(e => {
          //console.log(e);
        });
    }
  }

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

  const onChangeRol = (e) => {
    setRol(e.target.value);
    if (e.target.value === ""){
      setErrorRol(true);
    }
    else
    {
      setErrorRol(false);
    }
  }

  const onChangeStatus = (e) => {
    setNewStatus(e.target.value);
    if (e.target.value === ""){
      setErrorStatus(true);
    }
    else
    {
      setErrorStatus(false);
    }
  }

  const onChangeAula = (e) => {
    setAula(e.target.value);
    if (e.target.value === ""){
      setErrorAula(true);
    }
    else
    {
      setErrorAula(false);
    }
  }

  
 // Funciones para la gestion de la duracion de una cuenta
 // de administracion 
  const onChangePermanentAdmin = (e) => {
    setPermanentAdmin(!permanentAdmin)
  }
  
  const onChangeFechaVencimiento = (value ,event) => {
    setFechaVencimiento(value);
  }

  function selectVencimiento() {
    if (!permanentAdmin) {
      return (
      <List>
        <ListItem>
          Seleccione la fecha de vencimiento de la cuenta
        </ListItem>

        <ListItem>
          <Calendar className="react-calendar"
                  value={fechaVencimiento}
                  onChange={onChangeFechaVencimiento}
                  defaultValue = {new Date()}
                  minDate={new Date()}
          />
        </ListItem>
      </List>
      

      )
    }
  }

  // Funciones para la gestion de la duracion de un periodo de 
  // administracion de una sala por un administrador

  const onChangePermanentAdministra = (e) => {
    setPermanentAdministra(!permanentAdministra)
  }

  const onChangeFechaFinAdministra = (value ,event) => {
    setFechaFinAdministra(value);
  }


  function selectFechaFinAdministra() {
    if (!permanentAdministra) {
      return (
        <List> 
          <ListItem>
            Seleccione la fecha de finalización de la administración
          </ListItem>
          <ListItem> 
            <Calendar className="react-calendar"
                value={fechaFinAdministra}
                onChange={onChangeFechaFinAdministra}
                defaultValue = {new Date()}
                minDate={new Date()}
            />
          </ListItem>
        </List>
      
      )
    }
  }

  const bookingNext1 = () => {
    if(hour === ''){
      setErrorHour(true);
    }
    else{
      setFase("2_espera");
      //Cargar asientos
      loadAsientos();
    }
  };

  const bookingPrev1 = () => {
    setFase("1");
  };

  const cambiarEstadoAsiento = (idaula) => {
    var fecha = date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
    var horainicio = hour.split(" - ")[0];
    var horafin = hour.split(" - ")[1];
    if(asiento === "No has seleccionado un asiento"){
      setErrorAsiento(true);
    }else{
      CambioEstadoDataService.updateSeat(idaula,asiento,newStatus,user.usuario,fecha,horainicio,horafin)
      .then(response => {
          setAsiento("No has seleccionado un asiento");
          setFase("2_espera");
          loadAsientos();
      }).catch(err => {
        setFase("error");
      })  
    }
  };

  const cambiarEstadoAula = (idaula) => {
    CambioEstadoDataService.updateAula(idaula,{aforoactual:aforo1 ,politicareport: dstreport})
    .then(response => {
      setFase("2_espera");
      loadAsientos();
    }).catch(err => {
      setFase("error");
    })
  };

  const loadAsientos = () => {
    var data = {
      fecha: date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      horainicio: hour.split(" - ")[0],
      idaula: expanded 
    }
    SeatService.getSeatsStatus(data)
    .then(response =>{
      if(response.status === "ok"){
        setEstadoAsientos(new Map(response.estados));
        setAforoActual(response.aforoactual);
        setAforo1(response.aforoactual)
        setEscaneados(response.escaneados);
        setReservados(response.ocupados);
        setFase("2");
      }else{
        setFase("error");
      }
    }).catch(err =>{
      setFase("error");
    });
  };

  const onChangeDate = (value ,event) => {
    setDate(value);
    setHour('');
  }

  function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  const onChangeHour = (e) => {
    setHour(e.target.value);
    if (e.target.value === ""){
      setErrorHour(true);
    }
    else
    {
      setErrorHour(false);
    }
  }

  const onChangeAforo = (e) => {
    setAforo1(e.target.value);
  }

  const onChangeDst = (e) => {
    setDstReport(e.target.value);
  }


  const setSeat = new_seat => {
    setAsiento(new_seat);
    if (new_seat !== "No seleccionado")
    {
      setErrorAsiento(false);
    }
  }

  const user = AuthenticationDataService.getCurrentUser();

  const history = useHistory();
  
  function generateExpansion(usuario) {
    return expansion.map((value) => {
      var activo 
      value.activo ? activo = "Activo" : activo= "Caducado"
      return(
        <ListItem button className="listItem">
            <ListItemText
            primary={value.nombre}
            
            secondary={"Aforo máximo: " + value.aforomax}
            />
            <ListItemText ><p>{activo}</p></ListItemText>
            <ListItemSecondaryAction>
            
            <IconButton edge="end" aria-label="delete aula" onClick= {() => { setAula2Del(value.idaula); setUser2Del(usuario); setOpenDelAula(true) }}>
                <DeleteIcon />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
      )
    })
  }  

  const retrieveExpansion = (usuario) => {
    if (expandedLoaded){
      return(
          <List className={classes.root}>
            {generateExpansion(usuario)}
            <ListItem button className="listItem" onClick={handleClickOpenAddAula}>
              <ListItemText
              primary="Añadir una sala"
              />
              <IconButton edge="end" aria-label="add user">
                  <AddIcon />
              </IconButton>
            </ListItem>
          </List>);
    }else{
      UserService.getModBoard(usuario)
      .then(response => {
        //console.log(response);
        setExpansion(response.data.administra);
      })
      .catch(e => {
        //console.log(e);
      });
      setExpandedLoaded(true);
    }
    return (
      <div></div>
    )
  }

  function generate() {
    return users.map((value) => {
      ////console.log("map users");
      ////console.log(value);
      return(
        <ListItem className={classes.cont}>
          <List className={classes.cont}>
            <ListItem button className="listItem" onClick={ expanded === value.usuario ? 
                                                          () => {setExpanded(-1); setExpandedLoaded(false) } :
                                                          "ROLE_ADMIN" === value.rol ? 
                                                          () => {setExpanded(value.usuario); setExpandedLoaded(false) } :
                                                          () => {}}>
                <ListItemText
                primary={value.usuario}
                secondary={value.rol === "ROLE_MODERATOR" ? "Usuario moderador " : "Usuario administrador"}
                />
                <ListItemSecondaryAction>
                { expanded === value.usuario ?
                  <IconButton edge="end" aria-label="less" onClick={() => { setExpanded(-1); setExpandedLoaded(false) }}>
                    <LessIcon />
                  </IconButton>
                  : "ROLE_ADMIN" === value.rol ?
                  <IconButton edge="end" aria-label="more" onClick={() => { setExpanded(value.usuario); setExpandedLoaded(false) }}>
                    <MoreIcon />
                  </IconButton>
                  :
                  <div></div>
                }
                <IconButton edge="end" aria-label="delete user" onClick= {() => { setUser2Del(value.usuario); setOpenDelUser(true) }}>
                    <DeleteIcon />
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            { expanded === value.usuario ?
              <ListItem>
                {retrieveExpansion(value.usuario)}
              </ListItem>
              :
              <div></div>
            }
          </List>
        </ListItem>
      )
    })
  }

  const retrieveAllUsers = () => {
    if (loaded){
      return(
          <List className={classes.root}>
            {generate()}
            <ListItem className={classes.cont}>
              <List className={classes.cont}>
                <ListItem button className="listItem" onClick={handleClickOpenAddUser}>
                  <ListItemText
                  primary="Añadir usuario"
                  />
                  <IconButton edge="end" aria-label="add user">
                      <AddIcon />
                  </IconButton>
                </ListItem>
              </List>
            </ListItem>
          </List>);
    }else{
      UserService.getModeratorBoard()
      .then(response => {
        //console.log(response);
        setUsers(response.data);
      })
      .catch(e => {
        //console.log(e);
        AuthenticationDataService.logout();
      });
      setLoaded(true);
    }
  }

  const retrieveExpansionAula = (aula,aforoMax) => {
    if (expandedLoaded){
      return(
          <List className={classes.root}>
            <ListItem>
            {fase === "1" ?
              <div className={Application.select}>
                <div className={Application.calendar}>
                  <Calendar className="react-calendar"
                    value={date}
                    onChange={onChangeDate}
                    defaultValue = {new Date()}
                    minDate={new Date()}
                    maxDate={sumarDias(new Date(),7)}
                  />
                  <div>
                    <FormControl 
                      variant="outlined" 
                      fullWidth 
                      style={{ padding: '3rem' }}
                      error={errorHour}
                    >
                      <InputLabel style={{ padding: '3rem' }}>
                        Franja horaria
                      </InputLabel>
                      <Select
                        value={hour}
                        onChange={onChangeHour}
                      >
                      <MenuItem value={"08:15 - 14:00"} >Mañana (08:15 - 14:00)</MenuItem>
                      <MenuItem value={"14:00 - 20:30"} >Tarde (14:00 - 20:30) </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className={Application.botones}>
                  <div className={Application.anterior}>
                  </div>
                  <div className={Application.siguiente}>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline2'
                        buttonSize='btn--large'
                        onClick={bookingNext1}
                      >
                        Siguiente
                    </Button>
                  </div>
                </div>
              </div>
              :
              fase === "2" ?
              <div className={Application.select2}>
                <div className={Application.aforo}>
                  <div className = {Application.aforoMax}>
                    <FormControl 
                      variant="outlined" 
                      fullWidth 
                      style={{ padding: '3rem'}}
                    >
                    <InputLabel 
                      fullWidth
                      style={{ padding: '3rem'}}>
                      Aforo de la sala
                    </InputLabel>
                    <Select value={aforo1}
                      onChange={onChangeAforo}>
                      <MenuItem value={25} >25%</MenuItem>
                      <MenuItem value={50} >50%</MenuItem>
                      <MenuItem value={100} >100%</MenuItem>
                    </Select>
                    </FormControl>
                  </div>
                  <div className = {Application.maxHoras}>
                    <FormControl 
                      variant="outlined" 
                      fullWidth 
                      style={{ padding: '3rem'}}
                    >
                    <InputLabel 
                      fullWidth
                      style={{ padding: '3rem' }}>
                      Distancia Report
                    </InputLabel>
                    <Select value= {dstreport}
                       onChange={onChangeDst}>
                      <MenuItem value={1} >1 asiento</MenuItem>
                      <MenuItem value={2} >2 asientos</MenuItem>
                      <MenuItem value={3} >3 asientos</MenuItem>
                      <MenuItem value={4} >4 asientos</MenuItem>
                      <MenuItem value={5} >5 asientos</MenuItem>
                      <MenuItem value={6} >6 asientos</MenuItem>
                    </Select>
                    </FormControl>
                  </div>
                </div>
                <div className={Application.botones1}>
                  <div className={Application.anterior}>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline2'
                        buttonSize='btn--large'
                        onClick={bookingPrev1}
                      >
                        Anterior
                    </Button>
                  </div>
                  <div className={Application.siguiente}>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline3'
                        buttonSize='btn--large'
                        onClick={() => {cambiarEstadoAula(aula)}}
                      >
                        Actualizar Sala
                    </Button>
                  </div>
                </div>
                <div className={Application.stats}>Asientos reservados: {reservados}, alumnos en sala: {escaneados}, aforo permitido {aforoMax*aforo1/100}</div>
                <div className={Application.calendar}>
                  <SelectSeat setSeat={setSeat} value={asiento} sala_id={aula} aforoActual= {aforoActual} estadoAsientos={estadoAsientos} use="Admin"/>
                  <List>
                  <ListItem>
                  {errorAsiento ? 
                    <p className="errorAsientoVacio">Tu selección: {asiento}</p>
                  :
                    <p>Tu selección: {asiento}</p>
                  }
                  </ListItem>
                    <ListItem>
                      <TextField
                        label="Estado"
                        select
                        disabled={asiento === "No has seleccionado un asiento"} 
                        onChange={onChangeStatus}
                        id="outlined-margin-normal"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                        value={newStatus}
                        error={errorStatus} 
                        helperText={errorStatus ? 'Selecciona un estado' : ' '}
                        >
                        {statusDisponibles.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </ListItem>
                  </List>
                </div>
                <div className={Application.botones}>
                  <div className={Application.anterior}>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline2'
                        buttonSize='btn--large'
                        onClick={bookingPrev1}
                      >
                        Anterior
                    </Button>
                  </div>
                  <div className={Application.siguiente}>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline3'
                        buttonSize='btn--large'
                        onClick={() => {cambiarEstadoAsiento(aula)}}
                      >
                        Cambiar Estado
                    </Button>
                  </div>
                </div>
              </div>
              :
              fase === "2_espera" ?
              <div className={Application.select}>
                <div className={Application.calendar}>
                <div className='mailReservar_body'>
                  <ReactLoading type='bars' color='#000c41' height={256} width={256} />
                </div>
                </div>
              </div>
              :
              fase === "error" ?
              <div className={Application.select}>
                <div className={Application.calendar}>
                <div className='mailReservar_body'>
                  <Cross/>
                  <h1>Algo salió mal...</h1>
                </div>
                </div>
              </div>
              :
              <div></div>
            }
            </ListItem>
          </List>);
    }else{
        setExpandedLoaded(true);
        setFase("1");
    }
  }

  function generateAulas(){
    return aulas.map((value) => {
      if(aulas.length === 0){
        return(
          <h2>No tienes salas asignadas todavía</h2>
        )
      }else{
        return(
          <ListItem className={classes.cont}>
            <List className={classes.cont}>
              <ListItem button className="listItem" onClick={ expanded === value.idaula ? 
                                                            () => {setExpanded(-1); setExpandedLoaded(false)} 
                                                            :
                                                            () => {setExpanded(value.idaula); setExpandedLoaded(false)} }>
                  <ListItemText
                  primary={value.nombre}
                  secondary={"Aforo máximo: " + value.aforomax}
                  />
                  <ListItemSecondaryAction>
                  { expanded === value.idaula ?
                    <IconButton edge="end" aria-label="less" onClick={() => { setExpanded(-1); setExpandedLoaded(false) }}>
                      <LessIcon />
                    </IconButton>
                    :
                    <IconButton edge="end" aria-label="more" onClick={() => { setExpanded(value.idaula); setExpandedLoaded(false) }}>
                      <MoreIcon />
                    </IconButton>
                  }
                  </ListItemSecondaryAction>
              </ListItem>
              { expanded === value.idaula ?
                <ListItem className={classes.aux}>
                  {retrieveExpansionAula(value.idaula,value.aforomax)}
                </ListItem>
                :
                <div></div>
              }
            </List>
          </ListItem>
        )
      }
    })
  }

  const retrieveAllAulas = () => {
    if (loaded){
      return(
      <List className={classes.root}>
        {generateAulas()}
      </List>);
    }else{
      UserService.getAdminBoard(user.usuario)
      .then(response => {
        setAulas(response.data.administra);
      })
      .catch(e => {
        //console.log(e);
      });
      setLoaded(true);
    }
  }

  return (
      <div className={classes.root}>
        { user ?
        user.roles === "ROLE_MODERATOR" ?
        <div >
          <h1>Gestión de cuentas y roles</h1>
          {retrieveAllUsers()}
          <Dialog open={openDelUser} onClose={handleCloseDelUser} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">ELIMINAR USUARIO</DialogTitle>
            { reported ?
            <div>
              { reply ?
              <div>
                { correct ?
                <div>
                  <h1>
                  Usuario eliminado con éxito!!!
                  </h1>
                  < Checkmark size={256}/>
                </div>
                :
                <div>
                  <h1>
                  Algo salió mal...
                  </h1>
                  <Cross/>
                </div>
                }
                <DialogActions>
                <Button onClick={() => {handleCloseDelUser(); setLoaded(false)}} buttonStyle='btn--outline2'>
                  Aceptar
                </Button>
              </DialogActions>
              </div>
              :
              <div>
                <h1>
                  Espera...
                </h1>
                <ReactLoading className = 'check' type='bars' color='#000c41' height={256} width={256} />
              </div>
              }
            </div>
            :
            <div>
              <DialogActions>
                <Button onClick={handleCloseDelUser} buttonStyle='btn--outline2'>
                  Cancelar
                </Button>
                <Button onClick={handleDelUser} buttonStyle='btn--outline2'>
                  Eliminar
                </Button>
              </DialogActions>
            </div>
            }         
          </Dialog>

          <Dialog open={openAddUser} onClose={handleCloseAddUser} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">AÑADIR USUARIO</DialogTitle>
            { reported ?
            <div>
              { reply ?
              <div>
                <div>
                  <h1>
                    {message}
                  </h1>
                  { correct ? < Checkmark size={256}/> : <Cross/>}
                </div>
                <DialogActions>
                  <Button onClick={() => {handleCloseAddUser(); setLoaded(false)}} buttonStyle='btn--outline2'>
                    Aceptar
                  </Button>
                </DialogActions>
              </div>
              :
              <div>
                <h1>
                  Espera...
                </h1>
                <ReactLoading className = 'check' type='bars' color='#000c41' height={256} width={256} />
              </div>
              }
            </div>
            :
            <div>
              <DialogContent>
                <DialogContentText>
                  Introduzca los datos del usuario.
                </DialogContentText>
                <List dense={true}>
                  <ListItem>
                    <TextField
                        required
                        label="Rol"
                        select
                        onChange={onChangeRol}
                        id="outlined-margin-normal"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                        value={rol}
                        error={errorRol} 
                        helperText={errorRol ? 'Selecciona un rol' : ' '}
                    >
                      {rolesDisponibles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </ListItem>
                  <ListItem>
                    <TextField
                        required
                        label="Correo UNZAR"
                        onChange={onChangeMail}
                        id="outlined-margin-normal"
                        placeholder= "example@unizar.es"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                        value={mail}
                        error={errorMail} 
                        helperText={errorMail ? 'Introduce tu correo' : ' '}
                    />
                  </ListItem>
                  <ListItem>
                    Administrador Permanente
                    <Switch
                        checked={permanentAdmin}
                        onChange={onChangePermanentAdmin}
                        //onClick={() => permanentAdmin ? null : <ListItem>Selecciona la fecha de vencimiento de la cuenta <Calendar/></ListItem>}
                        name="loading"
                        color="primary"
                        //defaultChecked
                    />
                  </ListItem>
                  {selectVencimiento()}
                </List>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseAddUser} buttonStyle='btn--outline2'>
                  Cancelar
                </Button>
                <Button onClick={handleAddUser} buttonStyle='btn--outline2'>
                  Añadir
                </Button>
              </DialogActions>
            </div>
            }         
          </Dialog>

          <Dialog open={openDelAula} onClose={handleCloseDelAula} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">ELIMINAR AULA</DialogTitle>
            { reported ?
            <div>
              { reply ?
              <div>
                { correct ?
                <div>
                  <h1>
                  Aula eliminada con éxito!!!
                  </h1>
                  < Checkmark size={256}/>
                </div>
                :
                <div>
                  <h1>
                  Algo salio mal...
                  </h1>
                  <Cross/>
                </div>
                }
                <DialogActions>
                <Button onClick={() => {handleCloseDelAula(); setExpandedLoaded(false)}} buttonStyle='btn--outline2'>
                  Aceptar
                </Button>
              </DialogActions>
              </div>
              :
              <div>
                <h1>
                  Espera...
                </h1>
                <ReactLoading className = 'check' type='bars' color='#000c41' height={256} width={256} />
              </div>
              }
            </div>
            :
            <div>
              <DialogActions>
                <Button onClick={handleCloseDelAula} buttonStyle='btn--outline2'>
                  Cancelar
                </Button>
                <Button onClick={handleDelAula} buttonStyle='btn--outline2'>
                  Eliminar
                </Button>
              </DialogActions>
            </div>
            }         
          </Dialog>

          <Dialog open={openAddAula} onClose={handleCloseAddAula} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">AÑADIR AULA</DialogTitle>
            { reported ?
            <div>
              { reply ?
              <div>
                <div>
                  <h1>
                    {message}
                  </h1>
                  { correct ? < Checkmark size={256}/> : <Cross/>}
                </div>
                <DialogActions>
                  <Button onClick={() => {handleCloseAddAula(); setExpandedLoaded(false)}} buttonStyle='btn--outline2'>
                    Aceptar
                  </Button>
                </DialogActions>
              </div>
              :
              <div>
                <h1>
                  Espera...
                </h1>
                <ReactLoading className = 'check' type='bars' color='#000c41' height={256} width={256} />
              </div>
              }
            </div>
            :
            <div>
              <DialogContent>
                <DialogContentText>
                  Selecciona qué aula que quieres añadir.
                </DialogContentText>
                <List dense={true}>
                  <ListItem>
                    <TextField
                        required
                        label="Aula"
                        select
                        onChange={onChangeAula}
                        id="outlined-margin-normal"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                        value={aula}
                        error={errorAula} 
                        helperText={errorAula ? 'Selecciona un aula' : ' '}
                    >
                      {aulasDisponibles.map((option) => (
                        <MenuItem key={option.idaula} value={option.idaula}>
                          {option.nombre}
                        </MenuItem>
                      ))}
                    </TextField>
                  </ListItem>
                  <ListItem>
                    Administración de la sala permanente
                    <Switch
                        checked={permanentAdministra}
                        onChange={onChangePermanentAdministra}
                        name="Administración de la sala permanente"
                        color="primary"
                    />
                  </ListItem>
                  {selectFechaFinAdministra()}
                </List>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseAddAula} buttonStyle='btn--outline2'>
                  Cancelar
                </Button>
                <Button onClick={handleAddAula} buttonStyle='btn--outline2'>
                  Añadir
                </Button>
              </DialogActions>
            </div>
            }         
          </Dialog>
        </div>

        :
        user.roles === "ROLE_ADMIN" ?
        <div>
          <h1>Mis aulas</h1>
          {retrieveAllAulas(user.usuario)}
        </div>
        :
        <div></div>
        :
        history.push("/")
      }
    </div>      
  );
}



/*
<ListItem>
                  <TextField
                      required
                      label="Contraseña"
                      onChange={onChangePassword}
                      id="outlined-margin-normal"
                      className={classes.textField}
                      InputLabelProps={{
                          shrink: true
                      }}
                      variant="outlined"
                      value={password}
                      error={errorPassword} 
                      helperText={errorPassword ? 'Introduce una contraseña' : ' '}
                  />
                  </ListItem>
*/