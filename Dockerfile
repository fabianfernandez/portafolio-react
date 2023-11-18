FROM node

WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 3000

ENV HOLA=OK

CMD [ "yarn start" ]