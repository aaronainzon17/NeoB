FROM node:14.16.0

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 8080

CMD ["/bin/bash","run.sh"]