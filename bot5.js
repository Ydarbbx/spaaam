const Discord = require('discord.js');
const other = new Discord.Client();

other.on('ready', () => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["هلا بلزين تراني بوت تبند اشيلك","هي انا بولعها كريديتس لوووووول","Hi Im Credits Agaaaaaaaaain"]
  setInterval(() => {
other.channels.get("505821246911545344").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},4000);
});

other.login("NTEwNDI5NDI5ODA2MTM3MzQ0.DscOSQ.aVnNt9g4x2kePG57S1j932ALCMA");
