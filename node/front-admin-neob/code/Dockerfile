FROM node:14.16.0


#ENV TZ=Europe/Madrid
#ENV TIMEZONE=Europe/Madrid
#ENV REACT_APP_BACKEND_IP=172.17.0.3
#ENV REACT_APP_BACKEND_PORT=8080
#ENV BACK_PROTOCOL=http
#ENV REACT_APP_AUTH_TOKEN="auTh-Token-sTr726445"
#ENV REACT_APP_AUTH_SECRET="C0ntra5enya-s3creta-t0ken"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#RUN npm install ahora en run sh
# If you are building your code for production
#RUN npm ci --only=production

#RUN npm run build

# Bundle app source
# COPY . . Está copiando todo el repositorio
#ADD front-admin-neob .
COPY . .

EXPOSE 3000
#CMD ["npm","run build"]
#CMD ["cd","build"]
#CMD ["npx","serve"]
CMD ["/bin/bash","run.sh"]