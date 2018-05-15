FROM amd64/ubuntu:16.04

WORKDIR /root/mcc

RUN apt-get update
RUN apt-get install -y software-properties-common 
RUN add-apt-repository ppa:bitcoin/bitcoin && apt-get update && apt-get install libdb4.8-dev libdb4.8++-dev -y

RUN apt-get install -y -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" make software-properties-common \
build-essential libtool autoconf libssl-dev libboost-dev libboost-chrono-dev libboost-filesystem-dev libboost-program-options-dev \
libboost-system-dev libboost-test-dev libboost-thread-dev sudo automake git wget curl libdb4.8-dev bsdmainutils libdb4.8++-dev \
libminiupnpc-dev libgmp3-dev ufw pkg-config libevent-dev  libdb5.3++ libzmq5 unzip>/dev/null 2>&1

RUN apt-get install git -y

RUN git clone https://github.com/mcc-project/mccproject.git .
RUN chmod +x autogen.sh share/genbuild.sh
RUN ./autogen.sh && ./configure --enable-cxx --disable-shared --with-pic --prefix=$BDB_PREFIX 
RUN make && make install

RUN mkdir -p /root/.mcc/

ADD ./start.sh .
RUN chmod 777 start.sh

CMD ["./start.sh"]

EXPOSE 29868
