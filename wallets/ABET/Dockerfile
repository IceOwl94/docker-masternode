FROM amd64/ubuntu:16.04

WORKDIR /root/mn

RUN apt-get update && apt-get -y upgrade

RUN apt-get install -y nano htop git wget software-properties-common build-essential libtool autotools-dev pkg-config libssl-dev \
libboost-all-dev libevent-dev libminiupnpc-dev autoconf automake unzip libzmq3-dev cron

RUN add-apt-repository  -y  ppa:bitcoin/bitcoin
RUN apt-get update
RUN apt-get install -y libdb4.8-dev libdb4.8++-dev

ENV CONFIG_FILE="altbet.conf"
ENV CONFIG_FOLDER="/root/.altbet"
ENV COIN_BLOCKS="https://github.com/altbet/bootstraps/releases/download/352483/bootstrap.zip"
ENV WALLET="https://github.com/altbet/abet/releases/download/v.2.0.0.3/altbet-v2.0.0.3-ubu1604.tar.gz"
ENV DAEMON_FILE="altbetd"

RUN wget -O wallet.tar.gz $WALLET \
&& tar -xzf wallet.tar.gz \
&& rm wallet.tar.gz

RUN mkdir -p $CONFIG_FOLDER

# Bootstrap blockchain
RUN cd  $CONFIG_FOLDER \
&& wget $COIN_BLOCKS -O bootstrap.zip \
&& unzip bootstrap.zip \
&& rm bootstrap.zip

# Cron for restart deamon if killed
RUN echo "* * * * *  (pgrep altbetd > /dev/null 2>&1 || (echo \"[\$(date)] Not found\"; /root/mn/altbetd)) >> /var/log/cron.log \n" > /etc/cron.d/keepalive-cron
RUN chmod +x /etc/cron.d/keepalive-cron
RUN crontab /etc/cron.d/keepalive-cron

COPY ABET/start.sh .
RUN chmod +x start.sh

CMD cron && ./start.sh

EXPOSE 2238
