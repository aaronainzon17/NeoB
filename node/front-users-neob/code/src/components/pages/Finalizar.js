/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      Finalizar.js
//Descripción:  Página Finalizar del front-end de NeoB a la cual se accede desde un 
                email de reserva confirmada para finalizar una estancia en un aula */

import React from 'react';
import '../../App.css';
import ReservationService from "../../services/reservation.service";
import { Checkmark } from 'react-checkmark';
import Cross from '../Cross';
import ReactLoading from 'react-loading';
import './Confirmar.css'


class Finalizar extends React.Component {
  constructor(props) {
    super(props);
    this.finalizar = this.finalizar.bind(this);

    this.state = {
      hashid: this.props.match.params.finalizar_id,
      finalizada: false,
      response: 
      <div calssName='confirmar_body'>
        <ReactLoading className = 'check' type='bars' color='#000c41' height={256} width={256} />
        <br></br>
        <br></br>
        <h1>Estamos finalizando tu reserva...</h1>
      </div>
    };
  };

  finalizar(){
    if (!this.state.finalizada){
        var data = {
            hash: this.state.hashid
        };
        ReservationService.endReservation(data)
        .then(response => {
          //console.log(response);
          if(response.status === "Ended"){
            this.setState({
                finalizada: true,
                response: 
                    <div calssName='confirmar_body'>
                    < Checkmark className="check" size={256}/>
                    <br></br>
                    <br></br>
                    <h1>Tu reserva en la biblioteca Betancourt ha sido finalizada.</h1>
                    </div>
            });
          }else if(response.status === "already ended"){
            this.setState({
                finalizada: true,
                response: 
                    <div calssName='confirmar_body'>
                    < Cross className="check"/>
                    <br></br>
                    <br></br>
                    <h1>Esta reserva ya ha sido finalizada</h1>
                    </div>
            });
          }else if(response.status === ""){
            this.setState({
                finalizada: true,
                response: 
                    <div calssName='not confirmed'>
                    < Cross className="check"/>
                    <br></br>
                    <br></br>
                    <h1>Esta reserva no ha sido confirmada</h1>
                    </div>
            });
          }else{
            this.setState({
                finalizada: true,
                response: 
                    <div calssName='confirmar_body'>
                    < Cross className="check" />
                    <br></br>
                    <br></br>
                    <h1>Fallo al finalizar la reserva.</h1>
                    </div>
                });
          }
        }).catch(err =>{
            //console.log(err);
            this.setState({
                finalizada: true,
                response: 
                    <div calssName='confirmar_body'>
                    < Checkmark className="check"/>
                    <br></br>
                    <br></br>
                    <h1>Fallo al finalizar la reserva.</h1>
                    </div>
            });
     
        });
    }
  };

  render() {
    this.finalizar();
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

export default Finalizar;
