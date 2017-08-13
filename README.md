# mimercato-nfce

[![Circle CI](https://circleci.com/gh/phelipealves/mimercato-nfce/tree/master.svg?style=shield&circle-token=e70cd357a0f887110f203b717fb11d7b7d2b1611)](https://circleci.com/gh/phelipealves/mimercato-nfce)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![Build Status](https://travis-ci.com/phelipealves/mimercato-nfce.svg?token=sjQEfNaGu5jbKdMKXFeX&branch=master)](https://travis-ci.com/phelipealves/mimercato-nfce)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/mimercato-nfce/mimercato-nfce)

## Dependencies

### Install Nodejs 7 [via package-manager](https://nodejs.org/en/download/package-manager/):
```
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
```
```
sudo apt-get install -y build-essential
```
```
sudo apt-get install nodejs
```
### Install Npm:
```
sudo npm install -g npm@latest
```

### Install phamtonjs 2 [on ubuntu](https://gist.github.com/phelipealves/9cd14402ecbf93ef9715e3268362358c#file-00-howto_install_phantomjs-md):
```
sudo apt-get install build-essential chrpath libssl-dev libxft-dev libfreetype6-dev libfreetype6 libfontconfig1-dev libfontconfig1 -y
```
```
sudo wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
```
```
sudo tar xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2 -C /usr/local/share/
```
```
sudo ln -s /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/
```
## Run project
### Download
```
git clone https://github.com/phelipealves/mimercato-nfce.git
```
```
cd mimercato-nfce
```

### Install npm dependencies.
```
npm install
```

### Test
```
npm test
```
