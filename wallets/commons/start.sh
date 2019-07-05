#!/bin/bash

echo -e "\
rpcallowip=127.0.0.1\n\
rpcuser=rpcuser-${RANDOM}\n\
rpcpassword=$(date +%s | sha256sum | base64 | head -c 32 ;  )\n\
server=1\n\
daemon=1\n\
listen=1\n\
masternode=1\n\
port=${COIN_PORT}\n\
masternodeaddr=$MY_IP:${COIN_PORT}\n\
externalip=$IP_WITHOUT_SQUARE_BRACKETS\n\
masternodeprivkey=$MNPRVKEY

" > /root/.${COIN_NAME}/${COIN_NAME}.conf

$(find -name ${DAEMON_FILE})
tail -f /dev/null
