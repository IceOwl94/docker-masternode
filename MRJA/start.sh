#!/bin/bash

echo -e "rpcuser=ganjamasternode\nrpcpassword=$(date +%s | sha256sum | base64 | head -c 32 ;  )\nrpcallowip=localhost\nrpcport=10560\nport=10559\nexternalip=$MY_IP\nserver=1\nlisten=1\ndaemon=1\nlogtimestamps=1\ntxindex=$TX_HASH\nmaxconnections=500\nmnconflock=1\nmasternode=1\nmasternodeaddr=$MY_IP:10559\nmasternodeprivkey=$MNPRVKEY\nstake=0\nstaking=0\nseednode=138.197.44.71" > /root/.MRJA/GanjaProject.conf 

./Ganjad
/bin/bash