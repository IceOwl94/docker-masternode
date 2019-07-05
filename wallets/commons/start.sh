#!/bin/bash

echo -e "\
rpcallowip=127.0.0.1\n\
rpcuser=rpcuser-$(RANDOM)\n\
rpcpassword=$(date +%s | sha256sum | base64 | head -c 32 ;  )\n\
server=1\n\
daemon=1\n\
listen=1\n\
masternode=1\n\
port=${ENV_COIN_PORT}\n\
masternodeaddr=$MY_IP:${ENV_COIN_PORT}\n\
externalip=$MY_IP\n\
masternodeprivkey=$MNPRVKEY

" > /root/.${ENV_COIN_NAME}/${ENV_COIN_NAME}.conf

./**/${ENV_DAEMON_FILE}
tail -f /dev/null
