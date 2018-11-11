const Discord = require('discord.js');
const other = new Discord.Client();

other.on('ready', () => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["#credits @BanSi,.#2050 15000"]
  setInterval(() => {
other.channels.get("505821246458429442").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},100000);
});

other.login("NTEwMjEyMzQ0OTQxNTEwNjc2.DscLZw.G6WJxAoI8aEtBH0ZcqfThpGn8E0")
