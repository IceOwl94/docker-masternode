FROM amd64/ubuntu:16.04

WORKDIR /root/mcc

RUN apt-get update && apt-get -y upgrade 
RUN apt-get install wget unzip -y

RUN wget -qO- -O tmp.zip https://github.com/mcc-project/mccproject/releases/download/v1.1/linux-v1.1.zip && unzip tmp.zip && rm tmp.zip

RUN mkdir -p /root/.mcc/

ADD ./start.sh .
RUN chmod 777 start.sh

CMD ["./start.sh"]

EXPOSE 29868
