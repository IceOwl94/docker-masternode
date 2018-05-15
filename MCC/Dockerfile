FROM amd64/ubuntu:16.04

WORKDIR /root/mcc

RUN apt-get update && apt-get -y upgrade 
RUN apt-get install curl -y

RUN curl -SL https://github.com/mcc-project/mccproject/releases/download/v1.1/linux-v1.1.zip | tar xzv
RUN mkdir -p /root/.mcc/

ADD ./start.sh .
RUN chmod 777 start.sh

CMD ["./start.sh"]

EXPOSE 29868
