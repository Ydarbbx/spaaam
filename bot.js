const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', async () => {
      let ReBeL = ["هلا بلزين تراني بوت تبند اشيلك","هي انا بولعها كريديتس لوووووول","Hi Im Credits Agaaaaaaaaain"]
  setInterval(() => {
client.channels.get("496396341795356692").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},18000);
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.login(process.env.SPAM);
  
