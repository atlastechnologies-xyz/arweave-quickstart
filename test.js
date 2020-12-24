const Arweave = require('arweave');
const axios = require('axios')
var wallet = {"kty":"RSA" ... } // replace this with your JSON key from arweave.net/wallet
var myAddress = ""  // leave this blank - we'll generate it from the JWT later
var url = "https://openkoi.com/whitepaper.pdf"  // feel free to change to your own url.
let arweave = {} 
testArweave()

async function testArweave () {

    arweave = await Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https',
        timeout: 20000,
        logging: false
    });

    // comment out the lines below to generate a wallet on the fly - this way you won't have to get one from the arweave site!
    // await arweave.wallets.generate().then((key) => {
    //     console.log('New', key.kty);
    //     wallet = key
    // });
    
    await arweave.wallets.jwkToAddress(wallet).then((address) => {
        console.log('address is', address);
        myAddress = address
    });
    
    console.log('checking ', myAddress)
    
    await arweave.wallets.getBalance(myAddress).then((balance) => {
        let winston = balance;
        let ar = arweave.ar.winstonToAr(balance);
    
        console.log('winston', winston);
        //125213858712
    
        console.log('ar: ', ar);
        //0.125213858712
    });


    uploadWhitepaper ()

}

async function uploadWhitepaper () {
    const response = await axios.get(url,  { responseType: 'arraybuffer' })

    // Buffer
    let transaction = await arweave.createTransaction({
        data: Buffer.from(response.data, "utf-8")
    }, wallet);

    transaction.addTag('Content-Type', 'text/html');
    
    console.log('transaction', transaction)

    await arweave.transactions.sign(transaction, wallet);

    console.log('transaction', transaction)

    let uploader = await arweave.transactions.getUploader(transaction);

    while (!uploader.isComplete) {
        await uploader.uploadChunk();
        console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`);
    }

    console.log('transaction.id', transaction.id)

    await arweave.transactions.getStatus(transaction.id).then(status => {
        console.log('tx status for ' + transaction.id, status);
        // 200
    })

}
