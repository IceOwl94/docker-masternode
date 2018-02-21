FROM amd64/ubuntu:16.04

RUN apt-get update && apt-get -y upgrade && apt-get -y install libwww-perl build-essential libtool automake autotools-dev autoconf pkg-config libssl-dev libgmp3-dev libevent-dev bsdmainutils libdb++-dev libminiupnpc-dev libboost-all-dev libqrencode-dev unzip git 
RUN mkdir -p /root/.MRJA/ && mkdir -p /root/dev && cd /root/dev && git clone https://github.com/legends420/GCFORK.git && cd /root/dev/GCFORK/src && make -f makefile.unix USE_UPNP= && strip Ganjad
RUN mv /root/dev/GCFORK/src/Ganjad /usr/local/bin/

ADD ./start.sh /root/
RUN chmod 777 /root/start.sh

CMD /root/start.sh

EXPOSE 10559 10560