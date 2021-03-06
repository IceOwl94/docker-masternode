#!/bin/bash

# Set timezone to UTC
timedatectl set-timezone UTC

# Docker setup
apt-get remove -y docker docker-engine docker.io

apt-get update
apt-get upgrade -y
apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
apt-key fingerprint 0EBFCD88
add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
apt-get update
sudo apt-get install -y docker-ce

# Docker Compose setup
sudo curl -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Nodejs setup
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install dependencies
npm i

# Install pm2
npm install pm2 -g

# Setup pm2 startup
pm2 start npm -- start --log-date-format="YYYY-MM-DD HH:mm:ss.SSSS Z"
pm2 startup
pm2 save

# Add swap space
fallocate -l 8G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
cp /etc/fstab /etc/fstab.bak
echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab
(crontab -l ; echo "@reboot cd $(pwd) && /usr/local/bin/docker-compose up -d")| crontab -

reboot
