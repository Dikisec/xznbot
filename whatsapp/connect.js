/*
HAI NAMAKU ZAINUDIN ANGGARA
YAH DISINI AKU SEBAGAI PEMULA MAU MENCOBA MEMBUAT BOT KU SENDIRI
YANG PASTINYA BANYAK COPY PASTE
OKE TERIMA KASIH
*/
const { WAConnection, MessageType } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const figlet = require('figlet')
const fs = require('fs')
const { color } = require('../lib/color')

const udin = new WAConnection()
exports.udin = udin

exports.connect = async() => {
    let authofile = './zainudin.json'
    udin.version = [2, 2123, 8]
	udin.logger.level = 'warn'
	console.log(color(figlet.textSync('XZN SENPAI', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ ITS ME ZAINUDIN]'))
	udin.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('[UDIN]', 'yellow'), color('Scan Qr'))
    })
    /*
	udin.on('credentials-updated', () => {
		fs.writeFileSync(authofile, JSON.stringify(udin.base64EncodedAuthInfo(), null, '\t'))
		console.log(color('Wait....'))
	})
    */
	fs.existsSync(authofile) && udin.loadAuthInfo(authofile)
	udin.on('connecting', () => {
		console.log(color('[Connecting]', 'blue'), color('Menghubungkan Whatsapp'))
	})
	udin.on('open', () => {
		console.log(color('[Connec]', 'red'), color('Terhubung Mhehehe'))
	})
	await udin.connect({timeoutMs: 30*1000})
    fs.writeFileSync(authofile, JSON.stringify(udin.base64EncodedAuthInfo(), null, '\t'))
    console.log(color(' ===================================================='))
	console.log(color('│ + IG : Its_me_xzn','yellow'))
	console.log(color('│ + WA : 082256080304','green'))
	console.log(color(' ===================================================='))
	console.log(color('Its_me_xzn'))
	return udin
}