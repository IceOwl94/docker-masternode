#!/bin/bash

echo -e "rpcallowip=127.0.0.1\nrpcuser=solarisrpc\nrpcpassword=$(date +%s | sha256sum | base64 | head -c 32 ;  )\nstaking=0\nserver=1\ndaemon=1\nlisten=1\nport=60020\nmasternode=1\nmasternodeaddr=$MY_IP:60020\nexternalip=$MY_IP:60020\nmasternodeprivkey=$MNPRVKEY" > /root/.solaris/solaris.conf

./solarisd
/bin/bash