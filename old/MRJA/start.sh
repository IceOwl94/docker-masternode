#!/bin/bash

echo -e "rpcuser=$(date +%s | sha256sum | base64 | head -c 32 ;  )\n\
rpcpassword=$(date +%s | sha512sum | base64 | head -c 32 ;  )\n\
rpcallowip=localhost\n\
rpcport=$PORT\n\
port=11420\n\
externalip=$MY_IP\n\
server=1\n\
listen=1\n\
daemon=1\n\
logtimestamps=1\n\
maxconnections=500\n\
mnconflock=1\n\
masternode=1\n\
masternodeaddr=$MY_IP:$PORT\n\
masternodeprivkey=$MNPRVKEY\n\
stake=0\n\
staking=0\n\
seednode=138.197.44.71" > /root/.Ganjaproject/Ganjaproject.conf 

./ganjacoind
/bin/bash