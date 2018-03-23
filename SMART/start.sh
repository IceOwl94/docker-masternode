#!/bin/bash

echo -e "rpcuser=smartcashrpc\nrpcpassword=$(date +%s | sha256sum | base64 | head -c 32 ;  )\ntxindex=1\nport=$PORT\ndaemon=1\nlisten=1\nserver=1\nsmartnode=1\nsmartnodeprivkey=$MNPRVKEY" > /root/.smartcash/smartcash.conf

./smartcash-1.1.1/bin/smartcashd
/bin/bash