FROM node:8.11.1

WORKDIR /usr/src/app

ARG NPM_TOKEN

RUN apt-get update && apt-get -y install apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get -y install yarn

COPY . .

RUN yarn install

CMD ["yarn","start"]
