/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      NoConfirmar.js
//Descripción:  Página NoConfirmar del front-end de BibliUz a la cual se accede desde un 
                email de reserva para no confirmar un asiento reservado*/

import React from 'react';
import '../../App.css';
import ReservationService from "../../services/reservation.service";
import { Checkmark } from 'react-checkmark';
import Cross from '../Cross';
import ReactLoading from 'react-loading';
import './NoConfirmar.css'


class NoConfirmar extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);

    this.state = {
      hashid: this.props.match.params.confirmar_id,
      deleted: false,
      response: 
      <div calssName='confirmar_body'>
        <ReactLoading className = 'check' type='bars' color='#000c41' height={256} width={256} />
        <br></br>
        <br></br>
        <h1>Estamos eliminando tu reserva...</h1>
      </div>
    };
  };

  delete(){
    if (!this.state.deleted){
        var data = {
            hash: this.state.hashid
        };
        ReservationService.dontConfirmReservation(data)
        .then(response => {
          //console.log(response);
          if(response.status === "Deleted"){
            ReservationService.findAula(response.idaula)
            .then(response => {
              this.setState({
                deleted: true,
                response: 
                    <div calssName='confirmar_body'>
                    < Checkmark className="check" size={256}/>
                    <br></br>
                    <br></br>
                    <h1>Tu reserva en la biblioteca {response.data.nombre} ha sido eliminada.</h1>
                    </div>
              });
            })
            .catch(err =>{
              //console.log(err);
            });
          }else if(response.status === "already confirmed"){
            this.setState({
                deleted: true,
                response: 
                    <div calssName='confirmar_body'>
                    < Cross className="check"/>
                    <br></br>
                    <br></br>
                    <h1>Esta reserva ya ha sido confirmada</h1>
                    </div>
            });
          }else if (response.status === "already deleted"){
            this.setState({
                deleted: true,
                response: 
                    <div calssName='confirmar_body'>
                    < Cross className="check"/>
                    <br></br>
                    <br></br>
                    <h1>Esta reserva ya ha sido eliminada</h1>
                    </div>
            });
          }else{
            this.setState({
                deleted: true,
                response: 
                    <div calssName='confirmar_body'>
                    < Cross className="check" />
                    <br></br>
                    <br></br>
                    <h1>Fallo al eliminar la reserva.</h1>
                    </div>
                });
          }
        }).catch(err =>{
            //console.log(err);
            this.setState({
                deleted: true,
                response: 
                    <div calssName='confirmar_body'>
                    < Checkmark className="check"/>
                    <br></br>
                    <br></br>
                    <h1>Fallo al eleminar la reserva.</h1>
                    </div>
            });
        });
    }
  };

  render() {
    this.delete();
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <div className='confirmar_body'>
          {this.state.response}
        </div>
      </div>
    );
  }
}

export default NoConfirmar;
