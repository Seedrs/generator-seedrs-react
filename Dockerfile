FROM node:8.10.0-stretch

ARG NPM_TOKEN

WORKDIR /usr/src/app

RUN apt-get update && \
  apt-get -y install apt-transport-https && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | \
  apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | \
  tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && \
  apt-get -y install yarn

COPY package.json .
RUN yarn install
COPY . .
