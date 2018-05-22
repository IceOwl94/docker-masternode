FROM amd64/ubuntu:16.04

WORKDIR /root/mrja

RUN apt-get update && apt-get -y upgrade && apt-get -y install libwww-perl build-essential libtool automake autotools-dev autoconf pkg-config libssl-dev libgmp3-dev libevent-dev bsdmainutils libdb++-dev libminiupnpc-dev libboost-all-dev libqrencode-dev unzip git 
RUN git clone https://github.com/legends420/GanjaCoin.git && cd GanjaCoin/src && make -f makefile.unix
RUN mv /root/mrja/GanjaCoin/src/ganjacoind /root/mrja
RUN mkdir -p /root/.Ganjaproject/

ADD ./Ganjacoind .
ADD ./start.sh .
RUN chmod 777 ./start.sh

CMD ./start.sh

EXPOSE 42001-42999