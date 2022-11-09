FROM node:lts

WORKDIR /usr/src/wait

RUN 	wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN 	chmod u+x wait-for-it.sh

WORKDIR /usr/src/app

COPY 	package*.json ./

RUN 	npm cache verify

RUN 	npm install

COPY 	./src .

EXPOSE 4000

CMD [ "npm", "start" ]