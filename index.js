const axios = require('axios');

async function isInvite(invite) {
	if (invite.length <= 0 || !invite || typeof invite !== 'string') {
		return false;
	}

	if (/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite|discord.com\/invite)\/+[a-zA-Z0-9]{6,16}/gi.test(invite)) {
		return true;
	}

	return false;
}

async function invitelink(serverId) {
	return await axios
		.get('https://discord.com/api/guilds/' + serverId + '/widget.json')
		.then(function (response) {
			return {
				name: response.data.name,
				id: response.data.id,
				invite: response.data.instant_invite,
				members: response.data.members,
			};
		})
		.catch(function (error) {
			return {
				name: null,
				id: null,
				invite: null,
				members: null,
			};
		});
}

