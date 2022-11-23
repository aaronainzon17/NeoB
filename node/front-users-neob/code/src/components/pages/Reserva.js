/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      Reservas.js
//Descripción:  Página Reservas del front-end de NeoB utilizada para realizar reservas de asientos en aulas*/

import React from 'react';
import '../../App.css';
import Application from "../application.module.scss"
import Calendar from 'react-calendar'
import { Button } from '../Button';
import '../SelectDate.css'
import TextField from '@material-ui/core/TextField';
import SelectSeat from '../SelectSeat';
import { Checkmark } from 'react-checkmark';
import MailDataService from "../../services/mail.service";
import ReservationService from "../../services/reservation.service";
import SeatService from "../../services/seat.service.js";
import ReactLoading from 'react-loading';
import Cross from '../Cross';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { animateScroll as scroll} from 'react-scroll';
import { Link } from 'react-router-dom';

export default function Reservar(props) {
  var nombreBiblio ="Biblioteca Hypatia de Alejandría";

  const idaula = props.match.params.sala_id;
  
  const [titulo, setTitulo] = React.useState("Selecciona una fecha");

  const emailRegEx = /^\d\d\d\d\d\d+@unizar\.es$/;

  const [errorName, setErrorName] = React.useState(false);

  const [errorMail, setErrorMail] = React.useState(false);

  const [errorAsiento, setErrorAsiento] = React.useState(false);

  const [errorHour, setErrorHour] = React.useState(false);

  const [date, setDate] = React.useState(new Date());

  const [name, setName] = React.useState("");

  const [mail, setMail] = React.useState("");

  const [asiento, setAsiento] = React.useState("No has seleccionado un asiento");

  const [estadoAsientos, setEstadoAsientos] = React.useState();

  const [hour, setHour] = React.useState('');

  const [aforoActual, setAforoActual] = React.useState();

  const [MAX_RESERVATIONS] = React.useState(4);

  const bookingNext1 = () => {
    if(hour === ''){
      setErrorHour(true);
    }
    else{
      scroll.scrollToTop();

      setTitulo("Estamos comprobando la disponibilidad de la sala");
      setFase("2_espera");
      //Cargar asientos
      loadInfoAula(idaula);
      loadAsientos(idaula);
    }
  };
  
  const bookingNext2 = () => {
    if(asiento === "No has seleccionado un asiento")
    {
      setErrorAsiento(true);
    }
    else
    {
      scroll.scrollToTop();
      setErrorAsiento(false);
      setTitulo("Confirmación y datos personales");
      setFase("3");
    }
  };
  
  const bookingNext3 = () => {
    var error = false;
    if(name === "")
    {
      error=true;
      setErrorName(true);
    }
    if (!emailRegEx.test(mail))
    {
      error=true;
      setErrorMail(true);
    }
    if(!error)
    {
      scroll.scrollToTop();
      setTitulo("Enviando email de confirmación...");
      setFase("4_espera");
      newReservation();
    }
    
  };

  const bookingPrev1 = () => {
    scroll.scrollToTop();
    setTitulo("Selecciona una fecha y una hora");
    setFase("1");
  };
  
  const bookingPrev2 = () => {
    scroll.scrollToTop();
    setTitulo("Estamos comprobando la disponibilidad de la sala");
    setFase("2_espera");
    //Cargar asientos
    loadAsientos(idaula);
  };

  const newReservation = () => {
    var data1 = {
      idalumno: mail.split("@")[0],
      idasiento: asiento,
      idaula: idaula, //OJO ESTÁ FORZADA Hypatia de Alejandria
      fecha: date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      horainicio: hour.split(" - ")[0],
      horafin: hour.split(" - ")[1],
      estadoasiento: "O", //Ahora está ocupado
      confirmadaDeadline: (Date.now() + 900000),//Timestamp en millisegundos dentro de 15 mins
      confirmada: 0,
      finalizada: 0,
      escaneada: 0,
    };
    //console.log(data1);

    ReservationService.createNewReservation(data1,MAX_RESERVATIONS)
    .then(response => {
      if(response.data.status === "OK"){//Puedo enviar mail
        bookingMail(response.data.idreserva);
      }else if(response.data.status === "Max_alcanzado"){
        setTitulo("");
        setFase("4_max");
      }else if(response.data.status === "Reserva_Duplicada"){
        setTitulo("");
        setFase("4_max2");
      }else{
        setFase("4_error");
      }
    })
    .catch(e => {
      console.log(e);
    });

  };

  const bookingMail = (idreserva) => {
      var data = {
        hourUser: hour,
        seatUser: asiento, 
        nameUser: name,
        dateUser: date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }),
        mailUser: mail,
        idaula: idaula,
        hash: idreserva,
      };
      MailDataService.sendBookingRequest(data)
        .then(response => {
          if(response.data.status === "Confirmado"){
            setFase("4");
          }
          else{
            setFase("4_error");
          }
        })
        .catch(e => {
          //console.log(e);
        });
  };

  const loadAsientos = (idaula) => {
    var data = {
      fecha: date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      horainicio: hour.split(" - ")[0],
      idaula: idaula
    }
    SeatService.getSeatsStatus(data)
    .then(response =>{
      if(response.status === "ok"){
        setEstadoAsientos(new Map(response.estados));
        setAforoActual(response.aforoactual);
        setTitulo("Selecciona un asiento");
        setFase("2");
      }else{
        setFase("4_error");
      }
    }).catch(err =>{
      //console.log(err);
      setFase("4_error");
    });
  };

  const loadInfoAula = (idaula) =>{
    ReservationService.findAula(idaula)
    .then(d =>{
        nombreBiblio = d.data.nombre;
    }).catch(e =>{
      //console.log(e);
    })
  }
  
  const onChangeDate = (value ,event) => {
    setDate(value);
    setHour('');
  }

  function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  const onChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value === ""){
      setErrorName(true);
    }
    else
    {
      setErrorName(false);
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

  const onChangeHour = (e) => {
    setHour(e.target.value);
    if (e.target.value === ''){
      setErrorHour(true);
    }
    else
    {
      setErrorHour(false);
    }
  }

  const setSeat = new_seat => {
    setAsiento(new_seat);
    if (new_seat !== "No seleccionado")
    {
      setErrorAsiento(false);
    }
  }

  const [fase, setFase] = React.useState("1");

  return (
        <div>
          <h1>{nombreBiblio}</h1>
          <h1>{titulo}</h1>
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
                    Selecciona una franja horaria
                  </InputLabel>
                  <Select
                    value={hour}
                    onChange={onChangeHour}
                  >
                  <MenuItem value={"08:15 - 14:00"} disabled={(new Date().toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }) === date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }) && new Date().getHours() >= 14)}>Mañana (08:15 - 14:00)</MenuItem>
                  <MenuItem value={"14:00 - 20:30"} disabled={(new Date().toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }) === date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }) && new Date().getHours() >= 21)}>Tarde (14:00 - 20:30) </MenuItem>
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
          <div className={Application.select}>
            <div className={Application.seatpick}>
              <SelectSeat setSeat={setSeat} value={asiento} sala_id={idaula} aforoActual={aforoActual} estadoAsientos={estadoAsientos}/>
            {errorAsiento ? 
              <p className="errorAsientoVacio">Tu selección: {asiento}</p>
            :
              <p>Tu selección: {asiento}</p>
            }
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
                    buttonStyle='btn--outline2'
                    buttonSize='btn--large'
                    onClick={bookingNext2}
                  >
                    Siguiente
                </Button>
              </div>
            </div>
          </div>
          :
          fase === "2_espera" ?
          <div className={Application.select}>
            <div className={Application.calendar}>
            <div calssName='mailReservar_body'>
              <ReactLoading type='bars' color='#000c41' height={256} width={256} />
            </div>
            </div>
          </div>
          : 
          fase === "3" ?
          <div className={Application.select}>
            <form className={Application.calendar} noValidate>
            <TextField className = 'Nombre1'
              required
              onChange={onChangeName}
              id="outlined-required"
              label="Nombre y apellidos"
              variant="outlined"
              error={errorName} 
              helperText={errorName ? 'Introduce tú nombre' : ' '}
            />
            <TextField
              required
              onChange={onChangeMail}
              id="outlined-required"
              label="Correo electónico"
              variant="outlined"
              value={mail}
              error={errorMail} 
              placeholder = "NIP@unizar.es"
              helperText={errorMail ? 'Introduce un correo de UNIZAR' : ' '}
            />
            </form>
            <div className={Application.botones}>
              <div className={Application.anterior}>
                <Button
                    className='btns'
                    buttonStyle='btn--outline2'
                    buttonSize='btn--large'
                    onClick={bookingPrev2}
                  >
                    Anterior
                </Button>
              </div>
              <div className={Application.siguiente}>
                <Button
                    className='btns'
                    buttonStyle='btn--outline3'
                    buttonSize='btn--large'
                    onClick={bookingNext3}
                  >
                    Confirmar
                </Button>
              </div>
            </div>
          </div>
          :
          fase === "4" ?
          <div className={Application.select}>
            <div className={Application.calendar}>
              <div calssName='mailReservar_body'>
                < Checkmark className="check" size={256}/>
                <br></br>
                <br></br>
                <h1>Debes confirmar la reserva antes de 15 minutos desde el mail introducido.</h1>
              </div>
            </div>
            <div className={Application.boton}>
                <div className={Application.finalizar}>
                <Button
                    className='btns'
                    buttonStyle='btn--outline3'
                    buttonSize='btn--large'
                    path="/"
                  >
                    Finalizar
                </Button>
                </div>
            </div>
          </div>
          :
          fase === "4_espera" ?
          <div className={Application.select}>
            <div className={Application.calendar}>
            <div calssName='mailReservar_body'>
              <ReactLoading type='bars' color='#000c41' height={256} width={256} />
            </div>
            </div>
          </div>
          :
          fase === "4_error" ?
          <div className={Application.select}>
            <div className={Application.calendar}>
              <div calssName='mailReservar_body'>
                <Cross />
                <br></br>
                <br></br>
                <h1>Algo no ha salido como esperábamos...</h1>
              </div>
            </div>
            <div className={Application.boton}>
                <div className={Application.finalizar}>
                  <Link to="/" className={Application.finoutline3}>Finalizar</Link>
                </div>
            </div>
          </div>
          :
          fase === "4_max" ?
          <div className={Application.select}>
            <div className={Application.calendar}>
              <div calssName='mailReservar_body'>
                <Cross />
                <br></br>
                <br></br>
                <h1>Has alcanzado el máximo de reservas diario... intentalo de nuevo mañana.</h1>
              </div>
            </div>
            <div className={Application.boton}>
                <div className={Application.finalizar}>
                  <Link to="/" className={Application.finoutline3}>Finalizar</Link>
                </div>
            </div>
          </div>
          :
           fase === "4_max2" ?
           <div className={Application.select}>
             <div className={Application.calendar}>
                <div calssName='mailReservar_body'>
                  <Cross />
                  <br></br>
                  <br></br>
                  <h1>No puedes volver a hacer una reserva en esta sala.</h1>
                </div>
             </div>
             <div className={Application.boton}>
                <div className={Application.finalizar}>
                  <Link to="/" className={Application.finoutline3}>Finalizar</Link>
                </div>
            </div>
           </div>
          :
          <div></div>
          }
        </div>
  );
}
