// 081394002804
require('./config/settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const cheerio = require("cheerio");
const chalk = require("chalk");
const crypto = require("crypto");
const axios = require("axios");
const moment = require("moment-timezone");
const fetch = require("node-fetch");
const Jimp = require("jimp");
const QrCode = require('qrcode-reader');
const qrcode = require('qrcode');
const util = require("util");
const ytdl = require('ytdl-core')
const jsobfus = require('javascript-obfuscator')
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const { color, bgcolor, mycolor } = require('./database/lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./database/lib/exif')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom } = require('./database/lib/functions')
module.exports = manzx = async (manzx, m, chatUpdate, store) => {
try {    
//Biii ofc
    const ntiktok = ('© Manzx')

    const db_error = JSON.parse(fs.readFileSync('./database/error.json'));
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
    const { isUrl, getRandom, getGroupAdmins, runtime, sleep, jsonformat, reSize, makeid, fetchJson, getBuffer } = require("./database/lib/myfunc");
if (!manzx.public) {
if (!m.key.fromMe) return
}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🏙️'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌤️'
}
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌆'
}
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}

//nof ahahha
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°#*+,.?=''():√%!¢£¥€π¤ΠΦ_&`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°#*+,.?=''():√%¢£¥€π¤ΠΦ_&!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const db_cmd = global.dbCmd
const from = m.key.remoteJid
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const mek = chatUpdate.messages[0];
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await manzx.decodeJid(manzx.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const q = args.join(" ");
const noOwn = '62838796655301'
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const { chats } = m
const text =  args.join(" ")
const isSeler = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await manzx.groupMetadata(m.chat).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
    const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
// Function Reply
const fgclink = {
    key: {
        participant: "0@s.whatsapp.net",
        "remoteJid": "0@s.whatsapp.net"
    },
    "message": {
        "groupInviteMessage": {
            "groupJid": "6288213840883-1616169743@g.us",
            "inviteCode": "m",
            "groupName": `Tempat top up dan suntik sosmed terpercaya`,
            "caption": ``,
            
        }
    }
}
let fakelin = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `02 days, 03 hours, 20 minutes, 09 seconds`, jpegThumbnail: ``,}}}
const acses = (teks) => {
manzx.sendMessage(m.chat, {text: teks,
contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `ACCSES DENIED!`,
                            thumbnailUrl: 'https://telegra.ph/file/c9d92d88752b4605dea97.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaB7fDR6buMBOqgUlf1d',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted:fgclink })

 }
 const reply = (teks) => {
return manzx.sendMessage(from, { text: teks, 
contextInfo:{"externalAdReply":
{"title": `𝐌𝐀𝐍𝐙𝐗-𝟖𝟖𝟖|ただの男`,
"body": `${jam}`, 
"previewType": "PHOTO",
"thumbnailUrl": 'https://telegra.ph/file/7b3c0ac03dab420c5c12b.jpg',
"sourceUrl": `https://whatsapp.com/channel/0029VaB7fDR6buMBOqgUlf1d`}}}, { quoted:fgclink})} 
 //========================================
async function loading () {
var manzxwA = [
"*[* ⎔ *don't spam wait for 2 seconds* *]*",
]
let { key } = await manzx.sendMessage(from, {text: '*[* ⎔ *Loading...* *]*'})//Pengalih isu

for (let i = 0; i < manzxwA.length; i++) {
await sleep(2000)
await manzx.sendMessage(from, {text: manzxwA[i], edit: key });//PESAN LEPAS
}
}
//
//// welcom
///ANTI LINK YAH
    //tourl
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./database/lib/exif')
//Anti Link
//Antilink
if (isGroup && isAntiLink && isBotGroupAdmins){
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group & melakukan pengiriman link basis private personal chat*`)
if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
let gclink = (`https://chat.whatsapp.com/`+await manzx.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
if (isAdmins) return m.reply(`*maaf kamu admin*`)
if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
await manzx.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.sender
               }
            }).then((res) => mreply('Link Telah Dihapus, Jangan Di Ulangi Lagi ya kontol')).catch((err) => manzxreply('gagal menghapus'))
}
}
       //manzx
const { color, bgcolor, mycolor } = require('./database/lib/color')
if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
		
try {
ppuser = await manzx.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}
 const dataListG = (type === "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const dataList = (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isListMessage = dataListG.length !== 0 ? dataListG : dataList
    const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false

const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Manzxx Keczee\n' // full name
            + 'ORG:Just Kidding😁;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=6283869458019:+62 813 9400 2804\n' // WhatsApp ID + phone number
            + 'END:VCARD'
             prit = [
                {buttonId: 'daftar', buttonText: {displayText: 'DAFTAR RESELLER'}, type: 2}
              ]
              
               pritprit = {
                  text: 'sepertinya kamu belum daftar resseler',
                  footer: '©Manzx',
                  buttons: prit,
                  headerType: 1
              }
switch (command){
    case 'owner':
   
    manzx.sendMessage(
        from,
        { 
            contacts: { 
                displayName: 'Ini Adalah Contact Pembuat Bot Kak', 
                contacts: [{ vcard }] 
            }
        }
    )
    manzx.sendMessage(from, {text : 'Ini owner saya kak, jangan di spam yaa kak^_^'}, {quoted : m})
        

        
        const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `https://arifzynstore.my.id`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Rizal Xdzz,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/3c485ff201d9337be14ef.jpg' }}}}
function parseMentions(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const manzx888 = { 
key: {
fromMe: [], 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) 
},

'message': {
	"interactiveMessage": {
						"header": {
						
							"hasMediaAttachment": [],
							"jpegThumbnail": '',
													},
						"nativeFlowMessage": {
							"buttons": [
								{
									"name": "review_and_pay",
									"buttonParamsJson": "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6348642505244872\",\"product_id\":\"6348642505244872\",\"name\":\"HW MODS WA\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"
								}
							]
			}
}}}

        function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = manzx.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
} else {
let res = manzx.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true,
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `gans`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
        function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
        }
break;
// Casenya
      break
case 'menu':{
    await loading()
let menu = `
${ucapanWaktu} @${sender.split("@")[0]}👋
ini adalah menu kami 
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
${simbol} ListSuntik
${simbol} TopupGame
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

Developer Bot : *Manzx-888*
Number Developer : *6283861279577*
`
manzx.sendMessage(m.chat, { text: menu,
contextInfo: { mentionedJid:[sender],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `© 𝐌𝐀𝐍𝐙𝐗-𝟖𝟖𝟖|ただの男`,
                            thumbnailUrl: 'https://telegra.ph/file/781151926561c7cfd76a6.jpg',
                            sourceUrl: 'https://www.instagram.com/manzxstore01?igsh=ZjA2bXZlOWNlM2hj',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted:fakelin })

 }
 break 
 case 'topupgame':
 case 'topup' :
 let topup = `
${ucapanWaktu} @${sender.split("@")[0]}👋
berikut ini list Top-up yang kami sediakan
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
${simbol} Freefire
${simbol} Mobilelegends
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

Developer Bot : *Manzx-888*
Number Developer : *6283861279577*
`
manzx.sendMessage(m.chat, { text: topup,
contextInfo: { mentionedJid:[sender],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `© 𝐌𝐀𝐍𝐙𝐗-𝟖𝟖𝟖|ただの男`,
                            thumbnailUrl: 'https://telegra.ph/file/d9033679f5327b499675f.jpg',
                            sourceUrl: 'https://www.instagram.com/manzxstore01?igsh=ZjA2bXZlOWNlM2hj',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted:fakelin })
 break
 
 case 'listsuntik':
 case 'suntiksosmed' :
 let sun = `
${ucapanWaktu} @${sender.split("@")[0]}👋
berikut ini adalah list suntik sosmed yang kami sediakan
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
${simbol} LikeIG
${simbol} FollowersIG
${simbol} ViewsTT
${simbol} LikeTT
${simbol} FollowersTT
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

Developer Bot : *Manzx-888*
Number Developer : *6283861279577*
`
manzx.sendMessage(m.chat, { text: sun,
contextInfo: { mentionedJid:[sender],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `© 𝐌𝐀𝐍𝐙𝐗-𝟖𝟖𝟖|ただの男`,
                            thumbnailUrl: 'https://telegra.ph/file/6212a2f4b380c64461628.jpg',
                            sourceUrl: 'https://www.instagram.com/manzxstore01?igsh=ZjA2bXZlOWNlM2hj',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted:fakelin })
 break
 //=========================GAME =================//
    case 'freefire':
   let lff = `
*PRICE LIST DIAMONDS FREE FIRE*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
${simbol} 50 Diamonds free fire IDR: *8.000*

${simbol} 70 Diamonds free fire IDR: *10.000*

${simbol} 100 Diamonds free fire IDR: *15.000*

${simbol} 140 Diamonds free fire IDR: *19.000*

${simbol} 210 Diamonds free fire IDR: *30.000*

${simbol} 355 Diamonds free fire IDR: *45.000*

${simbol} 500 Diamonds free fire IDR: *63.000*

${simbol} 720 Diamonds free fire IDR: *87.000*

${simbol} 1000 Diamonds free fire IDR: *123.000*

${simbol} Membership mingguan free fire IDR: *29.000*

${simbol} Membership bulanan free fire IDR: *80.000*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬ 

*•* Hanya perlu id game
*•* Proses cepat 
*•* Harga terjangkau 
*•* Kehokian saat gacha meningkat 100%`
manzx.sendMessage(m.chat, { text: lff,
contextInfo: { mentionedJid:[sender],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `© 𝐌𝐀𝐍𝐙𝐗-𝟖𝟖𝟖|ただの男`,
                            thumbnailUrl: 'https://telegra.ph/file/67a2b2cdefb3505220511.jpg',
                            sourceUrl: 'https://www.instagram.com/manzxstore01?igsh=ZjA2bXZlOWNlM2hj',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted:fakelin })

             break
             case 'mobilelegends':
   let lml = `
*PRICE LIST DIAMONDS FREE FIRE*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
${simbol} 12 Diamonds mobile legends IDR: *5.000*

${simbol} 19 Diamonds mobile legends IDR: *7.000*

${simbol} 28 Diamonds mobile legends IDR: *10.000*

${simbol} 36 Diamonds mobile legends IDR: *12.000*

${simbol} 44 Diamonds mobile legends IDR: *14.000*

${simbol} 56 Diamonds mobile legends IDR: *17.000*

${simbol} 74 Diamonds mobile legends IDR: *23.000*

${simbol} 86 Diamonds mobile legends IDR: *24.000*

${simbol} 112 Diamonds mobile legends IDR: *31.000*

${simbol} 172 Diamonds mobile legends IDR: *45.000*

${simbol} 185 Diamonds mobile legends IDR: *48.000*

${simbol} 257 Diamonds mobile legends IDR: *68.000*

${simbol} 344 Diamonds mobile legends IDR: *88.000*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬ 

*•* Hanya perlu id game
*•* Proses cepat 
*•* Harga terjangkau `
manzx.sendMessage(m.chat, { text: lml,
contextInfo: { mentionedJid:[sender],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `© 𝐌𝐀𝐍𝐙𝐗-𝟖𝟖𝟖|ただの男`,
                            thumbnailUrl: 'https://telegra.ph/file/7b31833a3f0f55033a0bb.jpg',
                            sourceUrl: 'https://www.instagram.com/manzxstore01?igsh=ZjA2bXZlOWNlM2hj',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted:fakelin })

             break
  //===================================//
             
                                   
//=========TIKTOK ==============//
             
case 'viewstiktok':
             case 'viewstt':
             case 'viewtt':
             let vtew = `         
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
${simbol} 100 Views tiktok IDR: *1.000*

${simbol} 200 Views tiktok IDR: *1.500*

${simbol} 250 Views tiktok IDR: *2.000*

${simbol} 500 Views tiktok IDR: *4.000*

${simbol} 1.000 Views tiktok IDR: *6.000*

${simbol} 2.000 Views tiktok IDR: *12.000*

${simbol} 2.500 Views tiktok IDR: *15.000*

${simbol} 3.000 Views tiktok IDR: *18.000*

${simbol} 5.000 Views tiktok IDR: *23.000*

${simbol} 7.000 Views tiktok IDR: *30.000*

${simbol} 10.000 Views tiktok IDR: *33.000*

${simbol} 100.000 Views tiktok IDR: *35.000*

${simbol} 1.000.000/1Juta Views tiktok IDR: *43.000*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬ 

*•* Aman ( Anti ke-banned )
*•* Harga terjangkau 

*Syarat & Ketentuan*

*•* Akun/video tidak boleh di private
*•* Hanya perlu link video`
manzx.sendMessage(m.chat, { text: vtew,
contextInfo: { mentionedJid:[sender],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `© 𝐌𝐀𝐍𝐙𝐗-𝟖𝟖𝟖|ただの男`,
                            thumbnailUrl: 'https://telegra.ph/file/b4332143fe4c76d2f8cff.jpg',
                            sourceUrl: 'https://www.instagram.com/manzxstore01?igsh=ZjA2bXZlOWNlM2hj',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted:fakelin })

             break

             case 'liketiktok':
             case 'likett':
             let liketew = `         
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
${simbol} 100 Like tiktok IDR: *2.000*

${simbol} 200 Like tiktok IDR: *3.000*

${simbol} 250 Like tiktok IDR: *4.000*

${simbol} 500 Like tiktok IDR: *6.000*

${simbol} 1.000 Like tiktok IDR: *10.000*

${simbol} 2.000 Like tiktok IDR: *19.000*

${simbol} 2.500 Like tiktok IDR: *24.000*

${simbol} 3.000 Like tiktok IDR: *28.000*

${simbol} 5.000 Like tiktok IDR: *40.000*

${simbol} 7.000 Like tiktok IDR: *50.000*

${simbol} 10.000 Like tiktok IDR: *77.000*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬ 

*•* Aman ( Anti ke-banned )
*•* Harga terjangkau 

*Syarat & Ketentuan*

*•* Akun/video tidak boleh di private
*•* Hanya perlu link video`
manzx.sendMessage(m.chat, { text: liketew,
contextInfo: { mentionedJid:[sender],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐌𝐀𝐍𝐙𝐗-𝟖𝟖𝟖|ただの男`,
                            thumbnailUrl: 'https://telegra.ph/file/4f2682879183844a1d93f.jpg',
                            sourceUrl: 'https://www.instagram.com/manzxstore01?igsh=ZjA2bXZlOWNlM2hj',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted:fakelin })

             break
       
       
       case 'followerstiktok':
             case 'followerstt':
             case 'followerstt':
             case 'folowertiktok':
             case 'folowerstiktok':
             let ftew = `         
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
${simbol} 50 Followers tiktok IDR: *4.000*

${simbol} 100 Followers tiktok IDR: *6.000*

${simbol} 200 Followers tiktok IDR: *11.000*

${simbol} 250 Followers tiktok IDR: *13.000*

${simbol} 500 Followers tiktok IDR: *25.000*

${simbol} 1.000 Followers tiktok IDR: *48.000*

${simbol} 2.000 Followers tiktok IDR: *95.000*

${simbol} 2.500 Followers tiktok IDR: *115.000*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬ 

*•* Aman ( Anti ke-banned )
*•* Harga terjangkau 

*Syarat & Ketentuan*

*•* Akun tidak boleh di private
*•* Hanya perlu link akun`
manzx.sendMessage(m.chat, { text: ftew,
contextInfo: { mentionedJid:[sender],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `© 𝐌𝐀𝐍𝐙𝐗-𝟖𝟖𝟖|ただの男`,
                            thumbnailUrl: 'https://telegra.ph/file/77efdb5378109efb7d861.jpg',
                            sourceUrl: 'https://www.instagram.com/manzxstore01?igsh=ZjA2bXZlOWNlM2hj',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted:fakelin })

             break

case 'followersinstagram':
             case 'followersig':
             let fg = `         
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
${simbol} 100 Followers Instagram  IDR: *2.000*

${simbol} 200 Followers Instagram  IDR: *4.000*

${simbol} 250 Followers Instagram  IDR: *5.000*

${simbol} 500 Followers Instagram  IDR: *8.000*

${simbol} 1.000 Followers Instagram  IDR: *15.000*

${simbol} 2.000 Followers Instagram  IDR: *28.000*

${simbol} 3.000 Followers Instagram  IDR: *40.000*

${simbol} 5.000 Followers Instagram  IDR: *55.000*

${simbol} 10.000 Followers Instagram  IDR: *100.000*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬ 

*•* Aman ( Anti ke-banned )
*•* Harga terjangkau

*Syarat & Ketentuan*

*•* Akun tidak boleh di private
*•* Hanya perlu link akun
 `
manzx.sendMessage(m.chat, { text: fg,
contextInfo: { mentionedJid:[sender],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐌𝐀𝐍𝐙𝐗-𝟖𝟖𝟖|ただの男`,
                            thumbnailUrl: 'https://telegra.ph/file/63e50d40151087508b37a.jpg',
                            sourceUrl: 'https://www.instagram.com/manzxstore01?igsh=ZjA2bXZlOWNlM2hj',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted:fakelin })

             break

case 'likeinstagram':
             case 'likeig':
             let lig = `         
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
${simbol} 100 Like Instagram  IDR: *1.500*

${simbol} 200 Like Instagram  IDR: *2.000*

${simbol} 250 Like Instagram  IDR: *3.000*

${simbol} 300 Like Instagram  IDR: *3.500*

${simbol} 400 Like Instagram  IDR: *4.000*

${simbol} 500 Like Instagram  IDR: *5.000*

${simbol} 1.000 Like Instagram  IDR: *9.000*

${simbol} 2.000 Like Instagram  IDR: *17.000*

${simbol} 3.000 Like Instagram  IDR: *25.000*

${simbol} 5.000 Like Instagram  IDR: *30.000*

${simbol} 10.000 Like Instagram  IDR: *35.000* ( *Discount hingga 25.000 Rupiah* )
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬ 

*•* Aman ( Anti ke-banned )
*•* Harga terjangkau 

*Syarat & Ketentuan*

*•* Kushus postingan ( Reels tidak akan ter-deteksi )
*•* Akun/postingan tidak boleh di private
*•* Hanya perlu link akun
`
manzx.sendMessage(m.chat, { text: lig,
contextInfo: { mentionedJid:[sender],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐌𝐀𝐍𝐙𝐗-𝟖𝟖𝟖|ただの男`,
                            thumbnailUrl: 'https://telegra.ph/file/27bf780848201559beeaf.jpg',
                            sourceUrl: 'https://www.instagram.com/manzxstore01?igsh=ZjA2bXZlOWNlM2hj',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted:fakelin })

             break


//=================================================//
       

//=================================================//
case 'assalamualaikum': {
m.reply(`Waalaikumsalam`)
}
       break

//=================================================//     
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
case 'attp':
if (args.length == 0) return m.reply(`Example: ${prefix + command} Manzx Wangsaf`)
await loading()
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
manzx.sendMessage(from, { sticker : ini_buffer }, { quoted:m })
break
        break
case 'self': {
if (!isCreator) return acses(mess.creator)
manzx.public = false
m.reply('Sukses aktifin mode seleb om')
} 
       break
case 'public': {
if (!isCreator) return acses(mess.creator)
manzx.public = true
m.reply('Sukses om')
}
          break;




default:}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
