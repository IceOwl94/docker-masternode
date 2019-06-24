FROM amd64/ubuntu:16.04

WORKDIR /root/bitg

RUN apt-get update && apt-get -y upgrade

RUN apt-get install -y nano htop git wget software-properties-common build-essential libtool autotools-dev pkg-config libssl-dev \
libboost-all-dev libevent-dev libminiupnpc-dev autoconf automake unzip

RUN add-apt-repository  -y  ppa:bitcoin/bitcoin
RUN apt-get update
RUN apt-get install -y libdb4.8-dev libdb4.8++-dev

RUN wget -O wallet.tar.gz https://github.com/bitgreen/bitgreen/releases/download/v1.3.1/bitgreen-1.3.1-x86_64-linux-gnu.tar.gz

RUN tar -xzf wallet.tar.gz
RUN mv  bitgreen*/bin/* .

RUN mkdir -p /root/.bitgreen/

ADD ./start.sh .
RUN chmod 777 start.sh

CMD ["./start.sh"]

EXPOSE 42000-42100
