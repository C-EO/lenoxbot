const Discord = require('discord.js');
exports.run = (client, oldChannel, newChannel) => {
    if (newChannel.type !== 'text' || oldChannel.type !== 'text') return;

    const tableconfig = client.guildconfs.get(newChannel.guild.id);
    if (tableconfig.channelupdatelog === 'false') return;

    if (tableconfig.language === '') {
        tableconfig.language = 'en';
        client.guildconfs.set(newChannel.guild.id, tableconfig);
	}

    var lang = require(`../languages/${tableconfig.language}.json`);

    const messagechannel = client.channels.get(tableconfig.channelupdatelogchannel);

    if (oldChannel.name !== newChannel.name) {
    const embed = new Discord.RichEmbed()
    .setColor('#FE2E2E')
    .setTimestamp()
    .setAuthor(lang.channelupdateevent_nameupdated)
    .addField(`📎 ${lang.channelcreateevent_channelid}:`, oldChannel.id)
    .addField(`📤 ${lang.channelupdateevent_oldname}`, oldChannel.name)
    .addField(`📥 ${lang.channelupdateevent_newname}`, newChannel.name);
    return messagechannel.send({ embed: embed });
}
if (oldChannel.topic !== newChannel.topic) {
    const embed = new Discord.RichEmbed()
    .setColor('#FE2E2E')
    .setTimestamp()
    .setAuthor(lang.channelupdateevent_topicupdated)
    .addField(`📎 ${lang.channelcreateevent_channelid}`, oldChannel.id)
    .addField(`📤 ${lang.channelupdateevent_oldtopic}`, oldChannel.topic)
    .addField(`📥 ${lang.channelupdateevent_newtopic}`, newChannel.topic);
    return messagechannel.send({ embed: embed });
} 
if (oldChannel.position !== newChannel.position) {
    const embed = new Discord.RichEmbed()
    .setColor('#FE2E2E')
    .setTimestamp()
    .setAuthor(lang.channelupdateevent_positionupdated)
    .addField(`📎 ${lang.channelcreateevent_channelid}`, oldChannel.id)
    .addField(`📤 ${lang.channelupdateevent_oldposition}`, oldChannel.position)
    .addField(`📥 ${lang.channelupdateevent_newposition}`, newChannel.position);
    return messagechannel.send({ embed: embed });
}
};
