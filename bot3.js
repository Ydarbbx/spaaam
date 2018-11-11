const Discord = require('discord.js');
const other = new Discord.Client();

other.on('ready', () => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["هلا بلزين تراني بوت تبند اشيلك","هي انا بولعها كريديتس لوووووول","Hi Im Credits Agaaaaaaaaain"]
  setInterval(() => {
other.channels.get("505821246790041631").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},300);
});

other.login("NTExMjY5NTE4MDU2ODgyMjA3.DsodCQ.lccdmJlf-Gy-8O-yl32hjwwMlbo");
