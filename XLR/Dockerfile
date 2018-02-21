FROM amd64/ubuntu:16.04

WORKDIR /root/solaris

RUN apt-get update && apt-get -y upgrade 
RUN apt-get install wget -y

RUN wget https://github.com/Solaris-Project/Solaris/releases/download/v2.4.0.0/solaris-daemon-2.4.0.0-linux64.tar.gz
RUN tar xzvf solaris-daemon-2.4.0.0-linux64.tar.gz
RUN mkdir -p /root/.solaris/

ADD ./start.sh .
RUN chmod 777 start.sh

CMD ["./start.sh"]

EXPOSE 60020
