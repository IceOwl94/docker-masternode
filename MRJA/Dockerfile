FROM amd64/ubuntu:16.04

WORKDIR /root/mrja

RUN apt-get update && apt-get -y upgrade
RUN mkdir -p /root/.MRJA/

ADD ./Ganjad .
ADD ./start.sh .
RUN chmod 777 ./start.sh

CMD ./start.sh

EXPOSE 10559 10560