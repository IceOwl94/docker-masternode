#!/bin/bash

echo -e "rpcuser=ganjamasternode\nrpcpassword=$(date +%s | sha256sum | base64 | head -c 32 ;  )\nrpcallowip=localhost\nport=$PORT\nexternalip=$MY_IP\nserver=1\nlisten=1\ndaemon=1\nlogtimestamps=1\nmaxconnections=500\nmnconflock=1\nmasternode=1\nmasternodeaddr=$MY_IP:$PORT\nmasternodeprivkey=$MNPRVKEY\nstake=0\nstaking=0\nseednode=138.197.44.71" > /root/.MRJA/GanjaProject.conf 

/usr/local/bin/Ganjad
/bin/bash