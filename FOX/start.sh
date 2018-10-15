#!/bin/bash

echo -e "\
rpcallowip=127.0.0.1\n\
rpcuser=foxrpc\n\
rpcpassword=$(date +%s | sha256sum | base64 | head -c 32 ;  )\n\
server=1\n\
daemon=1\n\
listen=1\n\
masternode=1\n\
port=40428\n\
masternodeaddr=$MY_IP:40428\n\
externalip=$MY_IP\n\
masternodeprivkey=$MNPRVKEY" > /root/.fox/fox.conf

./foxd-linux-64
tail -f /dev/null