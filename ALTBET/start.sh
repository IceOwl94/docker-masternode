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
masternodeprivkey=$MNPRVKEY

addnode=185.206.146.209:2238
addnode=185.206.147.210:2238
addnode=185.206.144.217:2238
addnode=185.141.61.104:2238
addnode=54.173.99.0:2238
addnode=108.61.84.52:2238
addnode=144.202.60.189:2238
addnode=167.86.66.74:2238
addnode=207.154.237.224:2238
addnode=173.249.19.46:2238
addnode=167.99.223.218:2238
addnode=207.180.198.69:2238
addnode=178.62.116.86:2238
addnode=149.248.36.196:2238
addnode=45.77.53.182:2238
addnode=95.179.150.156:2238
addnode=13.59.222.81:2238
addnode=3.84.13.102:2238
addnode=104.207.145.214:2238
addnode=8.9.36.49:2238
" > /root/.altbet/altbet.conf

./altbetd
tail -f /dev/null