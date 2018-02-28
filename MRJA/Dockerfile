FROM amd64/ubuntu:16.04

WORKDIR /root/mrja

RUN apt-get update && apt-get -y upgrade && apt-get -y install libwww-perl build-essential libtool automake autotools-dev autoconf pkg-config libssl-dev libgmp3-dev libevent-dev bsdmainutils libdb++-dev libminiupnpc-dev libboost-all-dev libqrencode-dev unzip git 
RUN mkdir -p /root/.MRJA/

ADD ./Ganjad .
ADD ./start.sh .
RUN chmod 777 ./start.sh

CMD /root/start.sh

EXPOSE 10559 10560