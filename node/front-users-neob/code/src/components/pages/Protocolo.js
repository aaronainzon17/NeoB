/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      Protocolo.js
//Descripción:  Página Protocolo del front-end de NeoB la cual detalla el protocolo covid del sistema*/

import React from 'react';
import '../../App.css';
import './Protocolo.css';
import { Button } from '../Button';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Checkmark } from 'react-checkmark';
import Cross from '../Cross';
import ReactLoading from 'react-loading';
import ReportDataService from "../../services/report.service";
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from "@material-ui/core/FormLabel";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: theme.spacing(35),
      marginRight: theme.spacing(30),
      margin: theme.spacing(3)
  },
  textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(15),
      margin: theme.spacing(3),
      width: "30ch"
  }
}));


export default function Protocolo() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [reported, setReported] = React.useState(false);

  const [reply, setReply] = React.useState(false);

  const [correct, setCorrect] = React.useState(false);

  const [errorMail, setErrorMail] = React.useState(false);

  const [errorDate, setErrorDate] = React.useState(false);

  const [mail, setMail] = React.useState("");

  const [date, setDate] = React.useState("");

  const[checkbox, setCheck] = React.useState(false);

  const[errbox, setErrorBox] = React.useState(false);

  const emailRegEx = /^\S+@unizar\.es$/;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setReported(false);
    setReply(false);
    setCorrect(false);
    setOpen(false);
  };

  

  const handleReport = () => {
    var noErrors = true;
    if(!emailRegEx.test(mail)){
      setErrorMail(true);
      noErrors= false;
    }
    if(date === ""){
      setErrorDate(true);
      noErrors = false;
    }
    if(checkbox === false){
      setErrorBox(true);
      noErrors = false;

    }
    if (noErrors){
      setReported(true);
      var data = {
        usuario : mail.split("@")[0],
        fecha : date
      };
      ReportDataService.sendReport(data)
        .then(response => {
          if(response.data.status === "REPORTADO"){
            setCorrect(true);
          }else{
            setCorrect(false);
          }
          setReply(true);
        })
        .catch(e => {
          //console.log("error");
          setCorrect(false);
          //console.log(e);
        });
    }
  }
  
  const handleCheck = (e) =>{
    setCheck(e.target.checked);
    if(e.target.checked===false){
      setErrorBox(true);
    }else{
      setErrorBox(false);
    }
  };

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

  const onChangeDate = (e) => {
    setDate(e.target.value);
    if (e.target.value === ""){
      setErrorDate(true);
    }
    else
    {
      setErrorDate(false);
    }
  }

  function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  return(
    <div className='protocolo-container'> 
      <div className='protocolo_body'>
          <h1>Nuestro Protocolo Covid</h1>
          <div className='protocolo_body'>
            <img className='protocolo-img' align='right' src="/images/covid_temperatura.png" alt="Tomado de temperatura"/>
            <p>Todo estudiante debe tomarse la temperatura antes de salir de casa y abstenerse de acceder a la biblioteca en el caso de que su temperatura sea mayor a 37,5 Cº.
            <br></br>Si este fuese el caso, dicho estudiante deberá cancelar su reserva de plaza para que pueda ser utilizada por otros.</p>
          </div>
          <div className='protocolo_body'>
          <img className='protocolo-img-mask' align='left' src="/images/covid_mask_handswashing.png" alt="Lavado de manos y mascarilla"/>
            <br></br><br></br><p>Al entrar, el usuario deberá desinfectarse las manos y permanecer con mascarilla durante todo momento.</p>
          </div>
          <div className='protocolo_body'>
          <img className='protocolo-img-mask' align='right' src="/images/covid_limpieza_finalizar.png" alt="Limpieza y finalizar la estancia"/>
            <br></br><br></br><p>Al finalizar el uso de una plaza, si no se ha cumplido el tiempo total de una reserva, se deberá indicar en la app que la estancia ha finalizado
            para que los equipos de limpieza puedan realizar las labores de desinfección para que el asiento pueda ser nuevamente ocupado.</p>
          </div>
          <div className='protocolo_body'>
          <img className='protocolo-img-mask' align='left' src="/images/covid_gente_database.png" alt="Aglomeraciones de gente y bases de datos"/>
          <br></br><br></br><p>La base de datos de NeoB almacenará información sobre qué estudiantes estuvieron estudiando cerca tuyo.</p>
          </div>
          <div className='protocolo_body'>
          <p>
          <br></br><br></br>
          Si tienes sospechas de que puedes estar infectado por el COVID-19, contacta con las autoridades sanitarias y sigue sus indicaciones.
          En caso de recibir un test pcr positivo,  haznoslo saber mediante el botón sotuado debajo de este párrafo. 
          Así se podrá notificarar a todos los estudiantes que hayan coincidido contigo en un radio de 7 metros en los 4 días anteriores al pcr positivo. 
          </p>
          </div>
          <div className='hero-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline2'
                buttonSize='btn--large'
                onClick={handleClickOpen}
              >
                REPORTAR POSITIVO
            </Button>
        </div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">REPORTAR POSITIVO</DialogTitle>
          { reported ?
          <div>
            { reply ?
            <div>
              { correct ?
              <div>
                <h1>
                Muchas gracias por colaborar!!!!
                </h1>
                < Checkmark size={256}/>
              </div>
              :
              <div>
                <h1>
                Algo salio mal... intentalo de nuevo más tarde
                </h1>
                <Cross/>
              </div>
              }
              <DialogActions>
              <Button onClick={handleClose} buttonStyle='btn--outline2'>
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
                Introduzca los datos solicidatos.
              </DialogContentText>
                  <TextField
                      required
                      label="Correo UNZAR"
                      onChange={onChangeMail}
                      id="outlined-margin-normal"
                      placeholder= "example@unizar.es"
                      className={classes.textField}
                      margin="normal"
                      InputLabelProps={{
                          shrink: true
                      }}
                      fullWidth
                      variant="outlined"
                      value={mail}
                      error={errorMail} 
                      helperText={errorMail ? 'Introduce tu correo' : ' '}
                  />
                  <TextField
                      required
                      label="Fecha del positivo"
                      onChange={onChangeDate}
                      id="outlined-margin-normal"
                      type="date"
                      className={classes.textField}
                      margin="normal"
                      InputLabelProps={{
                          shrink: true
                      }}
                      InputProps={{inputProps: { min: sumarDias(new Date(),-14).toISOString().split("T")[0] ,max: new Date().toISOString().split("T")[0] } }}
                      mindate={new Date()}
                      variant="outlined"
                      value={date}
                      error={errorDate} 
                      helperText={errorDate ? 'Selecciona una fecha' : ' '}
                    />
                  <TextField
                      id="outlined-full-width"
                      label="Comentario"
                      style={{ margin: 8 }}
                      placeholder="Infromacion relevante sobre el caso"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                          shrink: true
                      }}
                      variant="outlined"
                  />
                  <Accordion className='checkMark'>
                    <AccordionSummary 
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                    <Typography className='bocadillo'>Términos de servicio</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className='bloque'>
                        De acuerdo a la ley orgánica de proteccion de datos 3/2018, tus datos no serán compartidos con terceros y serán tratados de forma anónima.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <FormControl error={errbox} required className='checkMark'>
                  <FormLabel component="legend">Por favor lea el documento anterior antes de proceder</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={checkbox} onChange={handleCheck} name="checkedB" color="primary" />}
                      label="He leido y acepto los términos de privacidad COVID"
                    />
                  </FormGroup>
                  <FormHelperText>Debes confirmar esta opción</FormHelperText>
                  </FormControl>

            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} buttonStyle='btn--outline2'>
                Cancelar
              </Button>
              <Button onClick={handleReport} buttonStyle='btn--outline2'>
                Reportar
              </Button>
            </DialogActions>
          </div>
          }         
        </Dialog>
      </div>
    </div>
  
  );
}
