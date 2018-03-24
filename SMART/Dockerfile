FROM amd64/ubuntu:16.04

WORKDIR /root/smartcash

RUN apt-get update && apt-get -y upgrade 
RUN apt-get install wget -y

RUN wget https://github.com/SmartCash/smartcash/releases/download/v1.1.1/smartcash-1.1.1-x86_64-linux-gnu.tar.gz
RUN tar xzvf smartcash-1.1.1-x86_64-linux-gnu.tar.gz
RUN mkdir -p /root/.smartcash/

ADD ./start.sh .
RUN chmod 777 start.sh

CMD ["./start.sh"]

EXPOSE 9678
