const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
//---------------------------------------------------------------------------

cmd({

            pattern: "repo",           
            desc: "(source code).",
            category: "general",
            react: "♻️",
            filename: __filename,
            use: '<text>',

        },

        async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: 'https://i.imgur.com/vpMZP20.jpeg',
                },

                caption: `
╭────《𝐑𝐄𝐏𝐎》─────❖
╭──────────────❖
│:- 𝐔𝐧𝐝𝐞𝐟𝐢𝐧𝐞𝐝
│ 𝙎𝙪𝙥𝙥𝙤𝙧𝙩:- https://chat.whatsapp.com/JCx4hln6yWcJXX9wcOBJQv
╰───────────────❖
©✪★⃝ꪶ‎ 𝗥𝘂𝗱𝗿𝗮𝗿𝗮𝗷𖥘✪➺:-
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
