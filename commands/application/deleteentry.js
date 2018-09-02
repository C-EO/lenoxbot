const Discord = require('discord.js');
exports.run = async(client, msg, args, lang) => {
	const tableload = client.guildconfs.get(msg.guild.id);

	if (!tableload.application) {
		tableload.application = {
			reactionnumber: '',
			template: [],
			role: '',
			votechannel: '',
			archivechannel: false,
			archivechannellog: '',
			status: 'false'
		};
		await client.guildconfs.set(msg.guild.id, tableload);
	}
    
    let input = args.slice().join(' ');

	if (input.length < 1) return msg.reply(lang.deleteentry_noinput).then(m => m.delete(10000));

	for (var i = 0; i < tableload.application.template.length; i++) {
		if (input.toLowerCase() === tableload.application.template[i].toLowerCase()) {
				for (var i = 0; i < tableload.application.template.length; i++) {
					if (input.toLowerCase() === tableload.application.template[i].toLowerCase()) {
						tableload.application.template.splice(i, 1);
						await client.guildconfs.set(msg.guild.id, tableload);
					}
				}
				await client.guildconfs.set(msg.guild.id, tableload);
		
				var removed = lang.deleteentry_removed.replace('%entry', `\`${input}\``);
				return msg.channel.send(removed);
		} 
	}
	return msg.channel.send(lang.deleteentry_notexists);
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	shortDescription: "Entries",
	aliases: [],
	userpermissions: ['ADMINISTRATOR'],
	dashboardsettings: true
};
exports.help = {
	name: 'deleteentry',
	description: 'Deletes an entry from the template',
	usage: 'deleteentry {entry}',
	example: ['deleteentry How old are you?'],
	category: 'application',
    botpermissions: ['SEND_MESSAGES']
};
