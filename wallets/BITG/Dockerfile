FROM amd64/ubuntu:16.04

WORKDIR /root/mn

RUN apt-get update && apt-get -y upgrade

RUN apt-get install -y nano htop git wget software-properties-common build-essential libtool autotools-dev pkg-config libssl-dev \
libboost-all-dev libevent-dev libminiupnpc-dev autoconf automake unzip

RUN add-apt-repository  -y  ppa:bitcoin/bitcoin
RUN apt-get update
RUN apt-get install -y libdb4.8-dev libdb4.8++-dev

ENV CONFIG_FILE="bitgreen.conf"
ENV CONFIG_FOLDER="/root/.bitgreen"
ENV COIN_BLOCKS="https://github.com/IceOwl94/docker-masternode/releases/download/0.1.1/bitg-bootstrap734000.zip"
ENV WALLET="https://github.com/bitgreen/bitgreen/releases/download/v1.3.1/bitgreen-1.3.1-x86_64-linux-gnu.tar.gz"

RUN wget -O wallet.tar.gz $WALLET \
&& tar -xzf wallet.tar.gz \
&& rm wallet.tar.gz

RUN mkdir -p $CONFIG_FOLDER

# Bootstrap blockchain
RUN cd  $CONFIG_FOLDER \
&& wget $COIN_BLOCKS -O bootstrap.zip \
&& unzip bootstrap.zip \
&& rm bootstrap.zip

ADD ./start.sh .
RUN chmod 777 start.sh

CMD ["./start.sh"]

EXPOSE 42000-42100
