FROM amd64/ubuntu:16.04

WORKDIR /root/mn

RUN apt-get update && apt-get -y upgrade

RUN apt-get install -y nano htop git wget software-properties-common build-essential libtool autotools-dev pkg-config libssl-dev \
libboost-all-dev libevent-dev libminiupnpc-dev autoconf automake unzip libzmq3-dev cron

RUN add-apt-repository  -y  ppa:bitcoin/bitcoin
RUN apt-get update
RUN apt-get install -y libdb4.8-dev libdb4.8++-dev

ENV CONFIG_FILE="safeinsure.conf"
ENV CONFIG_FOLDER="/root/.safeinsure"
#ENV COIN_BLOCKS="https://github.com/altbet/bootstraps/releases/download/352483/bootstrap.zip"
ENV WALLET="https://github.com/SafeInsure/sins-coin/releases/latest/download/safeinsure-1.0.0-x86_64-linux-gnu.tar.gz"
ENV COIN_NAME="safeinsure"
ENV DAEMON_FILE="${COIN_NAME}d"
ENV COIN_PORT=39105

RUN wget -O wallet.tar.gz $WALLET \
&& tar -xzf wallet.tar.gz --strip-components=1 \
&& rm wallet.tar.gz

RUN mkdir -p $CONFIG_FOLDER

## Bootstrap blockchain
#RUN cd  $CONFIG_FOLDER \
#&& wget $COIN_BLOCKS -O bootstrap.zip \
#&& unzip bootstrap.zip \
#&& rm bootstrap.zip

# Cron for restart deamon if killed
RUN echo "* * * * *  (pgrep $DAEMON_FILE > /dev/null 2>&1 || (echo \"[\$(date)] Not found\"; /root/mn/$DAEMON_FILE)) >> /var/log/cron.log \n" > /etc/cron.d/keepalive-cron
RUN chmod +x /etc/cron.d/keepalive-cron
RUN crontab /etc/cron.d/keepalive-cron

COPY SINS/start.sh .
RUN chmod +x start.sh

CMD cron && ./start.sh

EXPOSE $COIN_PORT
