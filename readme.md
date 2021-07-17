## Setup

![Setup](https://bafybeiei5ozs7nayuqlrvpzhewntbees42qzv2wc6yrz4hnwnj36jb74o4.ipfs.infura-ipfs.io/)

## Example :

```javascript
import { discordIsInvite, discordServer, discordInvite } from 'discordinvite';

const invite = await discordInvite(ServerId);

// invite url
const invite = invite.invite;

//check is invite valid
const valid = discordIsInvite(invite.invite);

// online memebers
const invite = invite.members;

// online memebers count
const invite = invite.onlinecount;

const serverIdvalid = await discordServer(ServerId);
```
