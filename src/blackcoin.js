const blackcoin = require("node-blackcoin");

const clientConfig = require('./config.js');

if (!clientConfig.user || !clientConfig.pass || !clientConfig.host || !clientConfig.port) {
  console.log(`Config is missing values.  Make sure host, port, user and pass are filled in.`);
  process.exit(0);
}

const client = new blackcoin.Client(clientConfig);

function getUnspent() {
  return new Promise((resolve, reject) => {
    client.cmd('listunspent', 10, 9999999, function(err, data){
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function createRawTxn(utxos, output) {
  return new Promise((resolve, reject) => {
    client.cmd('createrawtransaction', utxos, output, function(err, data){
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function decodeRawTxn(raw) {
  return new Promise((resolve, reject) => {
    client.cmd('decoderawtransaction', raw, function(err, data){
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function signRawTxn(raw) {
  return new Promise((resolve, reject) => {
    client.cmd('signrawtransaction', raw, function(err, data){
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function sendRawTxn(raw) {
  return new Promise((resolve, reject) => {
    client.cmd('sendrawtransaction', raw, function(err, data){
      if (err) return reject(err);
      resolve(data);
    });
  });
}

module.exports = (function(){
  return {
    createRawTxn,
    decodeRawTxn,
    getUnspent,
    sendRawTxn,
    signRawTxn,
  }
})();
