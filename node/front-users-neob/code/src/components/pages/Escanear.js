import React from 'react';
import '../../App.css';
import Application from "../application.module.scss";
import { Button } from '../Button';
import ReservationService from "../../services/reservation.service";
import MailDataService from "../../services/mail.service";
import ReactLoading from 'react-loading';
import Cross from '../Cross';
import TextField from '@material-ui/core/TextField';
import { animateScroll as scroll} from 'react-scroll';
import { Checkmark } from 'react-checkmark';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default function Escanear(props) {

    const idaula = props.match.params.sala_id;
    const idasiento = props.match.params.asiento_id;
    const [titulo, setTitulo] = React.useState("¿Tienes una reserva?"); //Introduce los datos de la reserva
    const [mail, setMail] = React.useState("");
    const [fase, setFase] = React.useState("0");
    const emailRegEx = /^\d\d\d\d\d\d+@unizar\.es$/;

    const [errorMail, setErrorMail] = React.useState(false);

    const onClickSi = (e) => {
        setTitulo("Introduce los datos de la reserva")
        setFase("1")
    }

    const onClickNo = (e) => {
        setTitulo("Introduce tu mail para realizar la reserva ahora")
        setFase("1_reserva")
    }

    const onClickAtras = (e) => {
        setTitulo("¿Tienes una reserva?")
        setFase("0")
    }

    const onChangeMail = (e) => {
        setMail(e.target.value);
        if (!emailRegEx.test(e.target.value)){
            setErrorMail(true);
        }else{
            setErrorMail(false);
        }
    }

    const bookingNext1 = () => {
        var error = false;
        if (!emailRegEx.test(mail)){
            error=true;
            setErrorMail(true);
        }
        if(!error){
            var hoy = new Date()
            var horaInicio = "08:15"
            var horaFin = "14:00"
            if (hoy.getHours() >= 14){
                horaInicio = "14:00"
                horaFin = "20:30"
            }
            scroll.scrollToTop();
            setTitulo("Confirmando con la base de datos ...");
            setFase("2_espera");
            escaneado(idaula,idasiento,mail,horaInicio);
        }
    };

    const bookingNext_instant = async () => {
        var error = false;
        if (!emailRegEx.test(mail)){
            error=true;
            setErrorMail(true);
        }
        if(!error){
            var hoy = new Date()
            var horaInicio = "08:15"
            var horaFin = "14:00"
            if (hoy.getHours() >= 14){
                horaInicio = "14:00"
                horaFin = "20:30"
            }
            var data = {
                idalumno: mail.split("@")[0],
                idasiento: idasiento,
                idaula: idaula,
                fecha: hoy.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }),
                horainicio: horaInicio,
                horafin: horaFin,
                estadoasiento: "O", //Ahora está ocupado
                confirmadaDeadline: (Date.now() + 900000),//Timestamp en millisegundos dentro de 15 mins
                confirmada: 1,
                horaconfirmacion: hoy.getHours().toString() + ":" + hoy.getMinutes().toString(),
                finalizada: 0,
                escaneada: 0,
            };
            
            const reserva = await ReservationService.createNewReservation(data)
            scroll.scrollToTop();
            setTitulo("Confirmando con la base de datos ...");
            setFase("2_espera");
            escaneado(idaula,idasiento,mail,horaInicio,reserva.data.idreserva);
        }
    };

    const escaneado = (idaula,idasiento,mail, horainicio, hashid) => {
        var data = {
            idaula: idaula,
            idasiento: idasiento,
            horainicio: horainicio,
            idalumno: mail.split("@")[0],
        };
        ReservationService.scanReservation(data)
        .then(response => {
            if(response.status === "Scanned"){//fin del proceso
                var dataMail = {
                    hashUser: mail.split("@")[0],
                    hashId: hashid,
                    idaula: idaula,
                    comesFrom: "escaner",
                }
                MailDataService.sendBookingConfirmation(dataMail)
                setFase("2");
            }else if (response.status === "already scanned"){
                setFase("2_ya_scanned");
            }else if (response.status === "not found"){
                setFase("2_not_found");
            }else if (response.status === "not confirmed"){
                setFase("2_not_confirmed");
            }else if (response.status === "ya ocupado"){
                setFase("2_ocupado");
            }else{
                setFase("2_error");
            }
        })
        .catch(e => {
            //console.log(e);
        });
    };

    return(
        <div className={Application.escanear}>
          <h1>{titulo}</h1>
            {fase === "0" ? 
            <div className={Application.botones_si_no}>
                <div/>
                <Button
                className='btns'
                buttonStyle='btn--outline3'
                buttonSize='btn--large'
                onClick={onClickSi}
                >
                    SI
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline3'
                    buttonSize='btn--large'
                    onClick={onClickNo}
                >
                    NO
                </Button>
                <div/>
            </div>
            : 
            fase === "1" ?
            <div className={Application.select}>
                <div className={Application.calendar}>
                <List>
                <ListItem>
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
                </ListItem>
                <ListItem>
                    <div className={Application.botones_si_no}>
                        <Button
                            className='btns'
                            buttonStyle='btn--outline3'
                            buttonSize='btn--large'
                            onClick={onClickAtras}
                        >
                            Atras
                        </Button>
                        <Button
                            className='btns'
                            buttonStyle='btn--outline3'
                            buttonSize='btn--large'
                            onClick={bookingNext1}
                        >
                            Confirmar
                        </Button>
                     </div>
                </ListItem>
                </List>
                </div>
            </div>
            :
            fase === "1_reserva" ?
            <div className={Application.select}>
                <div className={Application.calendar}>
                <List>
                <ListItem>
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
                </ListItem>
                <ListItem>
                    <div className={Application.botones_si_no}>
                        <Button
                            className='btns'
                            buttonStyle='btn--outline3'
                            buttonSize='btn--large'
                            onClick={onClickAtras}
                        >
                            Atras
                        </Button>
                        <Button
                            className='btns'
                            buttonStyle='btn--outline3'
                            buttonSize='btn--large'
                            onClick={bookingNext_instant}
                        >
                            Confirmar
                        </Button>
                     </div>
                </ListItem>
                </List>
                </div>
            </div>
            :
            fase === "2" ?
            <div className={Application.select}>
                <div className={Application.calendar}>
                <div calssName='mailReservar_body'>
                    < Checkmark className="check" size={256}/>
                    <br></br>
                    <br></br>
                    <h1>Reserva escaneada correctamente, ya puedes comenzar a estudiar!</h1>
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
            fase === "2_error" ?
            <div className={Application.select}>
                <div className={Application.calendar}>
                <div calssName='mailReservar_body'>
                <Cross />
                <br></br>
                <br></br>
                <h1>Algo no ha salido como esperábamos...</h1>
                </div>
                </div>
            </div>
            :
            fase === "2_ya_scanned" ?
            <div className={Application.select}>
                <div className={Application.calendar}>
                <div calssName='mailReservar_body'>
                <Cross />
                <br></br>
                <br></br>
                <h1>Ya has escaneado esta reserva...</h1>
                </div>
                </div>
            </div>
            :
            fase === "2_not_found" ?
            <div className={Application.select}>
                <div className={Application.calendar}>
                <div calssName='mailReservar_body'>
                <Cross />
                <br></br>
                <br></br>
                <h1>No se ha encontrado la reserva...</h1>
                </div>
                </div>
            </div>
            :
            fase === "2_not_confirmed" ?
            <div className={Application.select}>
                <div className={Application.calendar}>
                <div calssName='mailReservar_body'>
                <Cross />
                <br></br>
                <br></br>
                <h1>Esta reserva no ha sido confirmada todavía...</h1>
                </div>
                </div>
            </div>
            :
            fase === "2_ocupado" ? 
            <div className={Application.select}>
                <div className={Application.calendar}>
                <div calssName='mailReservar_body'>
                <Cross />
                <br></br>
                <br></br>
                <h1>Este asiento ya se encuentra reservado por otra persona</h1>
                <p>Puedes comprobar la disponibilidad en el apartado de salas de estudio</p>
                </div>
                </div>
            </div>
            :
            <div></div>
            }
        </div>
)

          

}