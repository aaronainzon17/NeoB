#!/bin/bash

npm install
npm audit fix
npm run build
npm install -g serve
serve -s build
#cd build
#npx serve -s