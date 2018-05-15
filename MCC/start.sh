#!/bin/bash

echo -e "rpcallowip=127.0.0.1\nrpcuser=mccrpc\nrpcpassword=$(date +%s | sha256sum | base64 | head -c 32 ;  )\nserver=1\ndaemon=1\nlisten=0\nmasternode=1\nmasternodeaddr=$MY_IP:29868\nexternalip=$MY_IP\nbind=MY_IP\nmasternodeprivkey=$MNPRVKEY" > /root/.mcc/mcc.conf

mccd
/bin/bash