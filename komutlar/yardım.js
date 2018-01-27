const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `vrx!banned = Dene ve Gör! \nvrx!avatarım = Avatarınınızı Gösterir. \nvrx!herkesebendençay = Herkese Çay Alırsınız. \nvrx!koş = Koşarsınız.\nvrx!çayiç = Çay İçersiniz. \nvrx!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nvrx!çayaşekerat = Çaya Şeker Atarsınız. \nvrx!yumruh-at = Yumruk Atarsınız. \nvrx!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nvrx!sunucuresmi = BOT Sunucunun Resmini Atar. \nvrx!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nvrx!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Sunucu Yetkilisi Komutları**", `vrx!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nvrx!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nvrx!unban = İstediğiniz Kişinin Yasağını Açar. \nvrx!sustur = İstediğiniz Kişiyi Susturur. -MUTED- \nvrx!oylama = Oylama Açar. \nvrx!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Botun Ana Komutları**", "vrx!yardım = BOT Komutlarını Atar. \nvrx!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nvrx!ping = BOT Gecikme Süresini Söyler. \nvrx!davet = BOT Davet Linkini Atar. \nvrx!istatistik = BOT İstatistiklerini Atar.\nvrx!sunucu = BOT Sahiplerinin sunucusunu Atar.")
  .addField("**Yapımcı Komutları:**", " **Güvenlik Amacı İle Yapımcı Komutları Gösterilmiyor** ")
  .setFooter('VRX Company')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
