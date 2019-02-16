FROM amd64/ubuntu:16.04

WORKDIR /root/mn

RUN apt-get update && apt-get -y upgrade

RUN apt-get install -y nano htop git wget software-properties-common build-essential libtool autotools-dev pkg-config libssl-dev \
libboost-all-dev libevent-dev libminiupnpc-dev autoconf automake unzip

RUN add-apt-repository  -y  ppa:bitcoin/bitcoin
RUN apt-get update
RUN apt-get install -y libdb4.8-dev libdb4.8++-dev

RUN wget https://github.com/altbet/abet/releases/download/v1.3.0.1/altbet-v1.3.0.1-ubu1604.tar.gz 

RUN tar -xzf altbet*.tar.gz
RUN mv  altbet*/bin/* .

RUN mkdir -p /root/.altbet/

ADD ./start.sh .
RUN chmod 777 start.sh

CMD ["./start.sh"]

EXPOSE 42000-42100
