FROM amd64/ubuntu:16.04

WORKDIR /root/bitg

RUN apt-get update && apt-get -y upgrade

RUN apt-get install -y nano htop git wget software-properties-common build-essential libtool autotools-dev pkg-config libssl-dev \
libboost-all-dev libevent-dev libminiupnpc-dev autoconf automake unzip

RUN add-apt-repository  -y  ppa:bitcoin/bitcoin
RUN apt-get update
RUN apt-get install -y libdb4.8-dev libdb4.8++-dev

RUN wget https://github.com/smartfoxteam/smartfox/releases/download/v1.2.2.1/foxd-linux-64

RUN mkdir -p /root/.fox/

ADD ./start.sh .
RUN chmod +x start.sh

CMD ["./start.sh"]

EXPOSE 42000-42100
