const Discord = require('discord.js');
const other = new Discord.Client();



 other.on('message',function(message) {

  let args = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith("2s")) {
    if(!args) return;
    message.channel.send(`${args}`); 
}
});
other.on('ready', () => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["هلا بلزين تراني بوت تبند اشيلك","هي انا بولعها كريديتس لوووووول","Hi Im Credits Agaaaaaaaaain"]
  setInterval(() => {
other.channels.get("517419390434541600").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},300);
});

other.login("NDk3ODMwNTQ5MzE0ODYzMTI0.DuB9WQ.WUw-mnyW0rgSsMZCwHkgdgTO6s4");
