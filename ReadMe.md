**Node js script to migrate UTXOs to a new address.**

* This script will find all unspent UTXOs, and sort them by address.
* It will then prompt you with a list of the found addresses.
* After selecting an address, enter the address you would like to migrate to.

**Requirements**
  * Node JS
  * Blackcoin RPC server

**How to run**

Enter RPC host, port, user, and pass in config.js.

run `npm install`

run `node src/index.js`


**Parameters**

If sendFrom and sendTo are passed as arguments, the script will run without user interaction.
example:

`node index.js --sendFrom='BF4HmRXfx5Vu6CF9ACW1txRUidqGGHMH64' --sendTo='B8YyHfCd6Kf1Zr68BriWKTbTuPUAQacnr1'`

You can specify the minimum utxo size to send.
Default is 100000000 (1 BLK).
example:

`node index.js --minUtxoSize=100000000`


**Known Issue**

Sometimes the script will fail with the following error while signing raw txns.  Running it a second time seems to fix the issue.

signRawTxn Error: Invalid params, response status code: 500
    at IncomingMessage.<anonymous> (/migrate-blk/node_modules/node-blackcoin/lib/jsonrpc.js:79:17)
    at IncomingMessage.emit (events.js:326:22)
    at endReadableNT (_stream_readable.js:1252:12)
    at processTicksAndRejections (internal/process/task_queues.js:80:21) {
  code: -32602
}
Error signing raw transaction: <rawTransaction>
