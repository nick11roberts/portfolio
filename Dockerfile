FROM node:4.3.2

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@2.15.8

ENV HOME=/home/app

USER app
WORKDIR $HOME/portfolio

USER root
RUN npm install -g harp
COPY . $HOME/portfolio
RUN chown -R app:app $HOME/*
USER app

RUN cd portfolio
RUN npm install
RUN cd portfolio
RUN npm install
CMD ["harp", "server", "portfolio"]
