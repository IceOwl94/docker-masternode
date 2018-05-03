#!/bin/bash

echo -e "rpcuser=smartcashrpc\nrpcpassword=$(date +%s | sha256sum | base64 | head -c 32 ;  )\nrpcallowip=127.0.0.1\nport=9678\ndaemon=1\nlisten=1\nserver=1\nsmartnode=1\ntxindex=1\nsmartnodeprivkey=$MNPRVKEY\nexternalip=$MY_IP:9678\nmaxconnections=64" > /root/.smartcash/smartcash.conf

./smartcash-1.1.1/bin/smartcashd
/bin/bash