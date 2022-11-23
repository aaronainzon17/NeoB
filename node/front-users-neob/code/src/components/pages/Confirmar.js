/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      Confirmar.js
//Descripción:  Página Confirmar del front-end de NeoB a la cual se accede desde un 
                email de reserva para confirmar un asiento reservado*/

import React from 'react';
import '../../App.css';
import ReservationService from "../../services/reservation.service";
import MailDataService from "../../services/mail.service";
import { Checkmark } from 'react-checkmark';
import Cross from '../Cross';
import ReactLoading from 'react-loading';
import './Confirmar.css'


class Confirmar extends React.Component {
  constructor(props) {
    super(props);
    this.sendMail = this.sendMail.bind(this);
    this.confirm = this.confirm.bind(this);
    this.response = this.response.bind(this);
    console.log({'El hash:' : this.props.match.params.confirmar_id})
    this.state = {
      hashid: this.props.match.params.confirmar_id,
      email: "",
      idaula: "",
      nombreaula: "",
      infoConfirm: null,
      infoSend: null,
      response: 
      <div calssName='confirmar_body'>
        <ReactLoading className = 'check' type='bars' color='#000c41' height={256} width={256} />
        <br></br>
        <br></br>
        <h1>Estamos confirmando tu reserva...</h1>
      </div> ,
      sent: false,
      confirmed: false
    };
  };

  confirm(){
    if (!this.state.confirmed){
      var data = {
        hash: this.state.hashid
      };
      ////console.log(data);
      ReservationService.confirmReservation(data)
      .then(response => {
        this.setState({
          infoConfirm: response.status,
          confirmed: true,
          email: response.idalumno,
          idaula: response.idaula
        });
        //console.log(this.state.idaula);
        if(this.state.confirmed){
          this.sendMail();
        }
      }).catch(err =>{
        //console.log(err);
      });
    }
  };
  
  sendMail() {
    if(!this.state.sent){//ya se ha hecho la accion de confirmacion
      if(this.state.infoConfirm ==="Confirmed"){//confirmado en base de datos
        var dataemail = {
          hashUser: this.state.email,
          hashId: this.state.hashid,
          idaula: this.state.idaula,
          comesFrom: "reserva"
        };
        MailDataService.sendBookingConfirmation(dataemail)
        .then(response => {
          ////console.log(response);
          this.setState({
            sent: true,
            infoSend: response.data.status
          });
          ReservationService.findAula(this.state.idaula)
          .then(response => {
            this.setState({
              nombreaula: response.data.nombre
            });
            this.response();
          })
          .catch(err =>{
            //console.log(err);
          });
        }).catch(err =>{
          //console.log(err);
        });
      }else{//no confirmado en la base
        this.setState({
          sent: true,
          infoSend: "fail"
        });
        this.response();
      }
    }
  };

  response(){
    if(this.state.infoConfirm === "Confirmed" && this.state.infoSend === "Sent"){
      this.setState({
        response: 
        <div calssName='confirmar_body'>
          < Checkmark className="check" size={256}/>
          <br></br>
          <br></br>
          <h1>Tu reserva en la {this.state.nombreaula} ha sido confirmada.</h1>
        </div>
      });
    }else if(this.state.infoConfirm === "already confirmed"){
      this.setState({
        response:
        <div calssName='confirmar_body'>
          < Cross className="check" />
          <br></br>
          <br></br>
          <h1>Esta reserva ya ha sido confirmada.</h1>
        </div>,
      });
    }else if(this.state.infoConfirm === "deleted"){
        this.setState({
          response:
          <div calssName='confirmar_body'>
            < Cross className="check" />
            <br></br>
            <br></br>
            <h1>Esta reserva ya no existe.</h1>
          </div>,
        });
    }else if(this.state.infoConfirm === "Caducada"){
      this.setState({
        response:
        <div calssName='confirmar_body'>
          < Cross className="check" />
          <br></br>
          <br></br>
          <h1>Esta reserva ha caducado.</h1>
        </div>
      });
    }else if(this.state.infoConfirm === "previamente cancelada"){
      this.setState({
        response:
        <div calssName='confirmar_body'>
          < Cross className="check" />
          <br></br>
          <br></br>
          <h1>No se puede confirmar la reserva ya que previamente ha sido cancelada</h1>
        </div>
      });
    }else{
      this.setState({
        response: 
        <div calssName='confirmar_body'>
          < Cross className="check" />
          <br></br>
          <br></br>
          <h1>Fallo al confirmar la reserva.</h1>
        </div>,
      });
    }
  };

  render() {
    this.confirm();
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <div calssName='confirmar_body'>
          {this.state.response}
        </div>
      </div>
    );
  }
}

export default Confirmar;
