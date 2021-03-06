FROM amd64/ubuntu:16.04

WORKDIR /root/mn

RUN apt-get update && apt-get -y upgrade

RUN apt-get install -y nano htop git software-properties-common build-essential libtool autotools-dev pkg-config libssl-dev \
libboost-all-dev libevent-dev libminiupnpc-dev autoconf automake unzip libzmq3-dev cron curl

RUN add-apt-repository  -y  ppa:bitcoin/bitcoin
RUN apt-get update
RUN apt-get install -y libdb4.8-dev libdb4.8++-dev

ARG COIN_NAME
ARG CONFIG_FILE
ARG CONFIG_FOLDER
ARG DAEMON_FILE
ARG COIN_PORT
ARG WALLET
ARG COIN_BLOCKS

ENV COIN_PORT=$COIN_PORT
ENV COIN_NAME=$COIN_NAME
ENV DAEMON_FILE=$DAEMON_FILE

RUN curl -Lo wallet.tar.gz $WALLET \
&& tar -xzf wallet.tar.gz \
&& rm wallet.tar.gz

RUN mkdir -p $CONFIG_FOLDER

# Bootstrap blockchain
RUN test $COIN_BLOCKS \
&& cd  $CONFIG_FOLDER \
&& curl -Lo  bootstrap.zip $COIN_BLOCKS \
&& unzip bootstrap.zip \
&& rm bootstrap.zip || exit 0

# Cron for restart deamon if killed
RUN echo "* * * * *  (pgrep $DAEMON_FILE > /dev/null 2>&1 || (echo \"[\$(date)] Not found\"; /root/mn/$DAEMON_FILE)) >> /var/log/cron.log \n" > /etc/cron.d/keepalive-cron
RUN chmod +x /etc/cron.d/keepalive-cron
RUN crontab /etc/cron.d/keepalive-cron

COPY ./commons/start.sh .
RUN chmod +x start.sh

CMD cron && ./start.sh

EXPOSE $COIN_PORT
