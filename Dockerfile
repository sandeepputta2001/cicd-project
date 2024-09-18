#Use offical node image as the parent/ base image

FROM node:latest

#Set working directory inside the image

WORKDIR /usr/src/app

#Copy package.json and package-lock.json into working directory.

COPY package.json package-lock.json ./

#Install dependencies 

RUN npm install --silent

#Copy other files 

COPY . .

#expose the image on port

EXPOSE 3002

#Runs image with executable of the application...............

CMD [ "node" , "app/app.js" ] 