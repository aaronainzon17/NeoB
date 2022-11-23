/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      About.js
//Descripción:  Página About del front-end de NeoB*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './About.css';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Información General y FAQs</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography className='bocadillo'>¿Cómo funciona NeoB?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='bloque'>
            NeoB es una plataforma para estudiantes que permite la reserva de plazas en salas de estudio y bibliotecas de UNIZAR,
            asegurando un nivel de seguridad constante frente a la emergencia sanitaria del COVID19.
            NeoB persigue así limitar el riesgo de contagio por COVID en el ámbito de estudio universitario, respetando
            la distancia de seguridad interpersonal y evitando las aglomeraciones en las inmediaciones de las facultades
            cuando el aforo ya está completo o para reservar espacio de manera presencial.
            Por otro lado, pretende también ofrecer comodidad a los estudiantes a la hora de elegir una sala de estudio.
            Por último, permite a los administradores de las bibliotecas conocer el estado actual de las salas en materia de aforo,
            disposición y necesidad de desinfección de plazas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='bocadillo'>¿Quién puede usar el sistema?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='bloque'>
            Este sistema puede ser utilizado por todo aquel estudiante de UNIZAR
            que posea una cuenta de correo electronico de la universidad.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='bocadillo'>¿Cómo reservo una plaza?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='bloque'>
            Para reservar una plaza es necesario contar con un correo de UNIZAR. El proceso de reserva
            es muy sencillo, simplemente en la pantalla de incicio, se hace click sobre reservar plaza,
            se elige la sala en la que se quiere estudiar, el horario y el sitio.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='bocadillo'>¿Quienes somos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='bloque'>
           Somos Pablo García, Aarón Ibáñez y Arturo Calvera, tres estudiantes de ingeniería informática en la EINA.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
