FROM node:10
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
CMD [ "npm", "start" ]