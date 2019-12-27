const md5 = require('md5')


async function encryptoData (pwd){
    return await md5(pwd)
}