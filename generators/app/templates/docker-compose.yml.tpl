version: '3'
services:
  <%= snakeCaseName %>:
    build:
      context: .
      args:
        - NPM_TOKEN
    ports:
      - '<%= port %>:<%= port %>'
    environment:
      - NPM_TOKEN
    volumes:
      - ./:/usr/src/app
      - /usr/src/app/node_modules

