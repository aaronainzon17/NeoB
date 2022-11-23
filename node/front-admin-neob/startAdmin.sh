#!/bin/bash

echo "AVISO!"
echo "Este script ha sido desarrollado para su uso exclusivamente durante la fase de desarrollo"


# Lanzar el front users 
export REACT_APP_BACKEND_IP=localhost
export REACT_APP_BACKEND_PORT=8080
export BACK_PROTOCOL=http
export REACT_APP_AUTH_TOKEN="auTh-Token-sTr726445"
export REACT_APP_AUTH_SECRET="C0ntra5enya-s3creta-t0ken"

cd ./code/ && npm start #> /dev/null 2>&1 & 

echo "Lanzando el front-end de los administradores"
