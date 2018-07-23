FROM amd64/ubuntu:16.04

WORKDIR /root/bitg

RUN apt-get update && apt-get -y upgrade

RUN apt-get install -y nano htop git wget software-properties-common build-essential libtool autotools-dev pkg-config libssl-dev \
libboost-all-dev libevent-dev libminiupnpc-dev autoconf automake unzip

RUN add-apt-repository  -y  ppa:bitcoin/bitcoin
RUN apt-get update
RUN apt-get install -y libdb4.8-dev libdb4.8++-dev

RUN wget https://github.com/bitcoingreen/bitcoingreen/releases/download/1.2.1/bitcoingreen-1.2.1-x86_64-linux-gnu.tar.gz

RUN tar -xzf bitcoingreen*.tar.gz
RUN mv  bitcoingreen*/bin/* .

RUN mkdir -p /root/.bitcoingreen/

ADD ./start.sh .
RUN chmod 777 start.sh

CMD ["./start.sh"]

EXPOSE 42000-42100
