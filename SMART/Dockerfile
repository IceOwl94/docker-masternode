FROM amd64/ubuntu:16.04

WORKDIR /root/smartcash

RUN apt-get update && apt-get -y upgrade 
RUN apt-get install curl -y

RUN curl https://github.com/SmartCash/smartcash/releases/download/v1.1.1/smartcash-1.1.1-x86_64-linux-gnu.tar.gz | tar xzv
RUN mkdir -p /root/.smartcash/

# Download blockchain snapshot
RUN cd /root/.smartcash/ && curl https://github.com/IceOwl94/docker-masternode/releases/download/0.1.0/2018-03-smartcash.tar.gz | tar xzv

ADD ./start.sh .
RUN chmod 777 start.sh

CMD ["./start.sh"]

EXPOSE 9678
