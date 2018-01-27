const Discord = require('discord.js');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Sunucumuz : https://discord.gg/zh9jWP4`)
.setColor(0x3063e9));
    }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu',
  description: ' BOT sahiplerinin sunucusunu atar  ',
  usage: 'sunucu'
};
