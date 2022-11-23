FROM node:14.16.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#RUN npm install ahora en run sh
#RUN npm run-script build
# If you are building your code for production
#RUN npm ci --only=production

#RUN npm run build

# Bundle app source
# COPY . . Está copiando todo el repositorio
#ADD front-users-neob .
COPY . .

EXPOSE 3000
CMD ["/bin/bash","run.sh"]