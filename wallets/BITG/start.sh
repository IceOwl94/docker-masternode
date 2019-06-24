#!/bin/bash

echo -e "\
rpcallowip=127.0.0.1\n\
rpcuser=bitgrpc\n\
rpcpassword=$(date +%s | sha256sum | base64 | head -c 32 ;  )\n\
server=1\n\
daemon=1\n\
listen=1\n\
masternode=1\n\
port=$PORT\n\
masternodeaddr=$MY_IP:$PORT\n\
externalip=$MY_IP\n\
masternodeprivkey=$MNPRVKEY" > /root/.bitgreen/bitgreen.conf

./bitgreen**/bin/bitgreend
tail -f /dev/null
