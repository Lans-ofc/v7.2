import fs from 'fs'

let handler = async (m, { conn }) => {
	let krtu = `Thanks To :
	
• Adiwajshing
https://github.com/adiwajshing

• Nurutomo
https://github.com/Nurutomo

• BochilGaming
https://github.com/BochilGaming

• ShirokamiRyzen
https://github.com/ShirokamiRyzen

• ImYanXiao
https://github.com/ImYanXiao

• Ekuzika
http://github.com/Rmdhn-20

• David 
https://github.com/xct007

Dan Semua Yang Berkontribusi 
Dalam Pengambangan Script Ini

Penulis Ulang : Ahmad maulana🗿
https://github.com/Lans-ofc

Special Thanks To : Vynaa Chan >,<`;
	await conn.sendButton(m.chat, krtu, botdate, fotonya2, [['\nKakek Gw Sugiono','huuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: 'Euphyllia - MD',
                        body: wm,          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}
handler.help = ['thankstoo']
handler.tags = ['info']
handler.command = /^(thankstoo|thanksto|credits|tqto)$/i;
handler.group = false;

export default handler;
