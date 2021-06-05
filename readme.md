## Setup

![Setup](https://bafybeiei5ozs7nayuqlrvpzhewntbees42qzv2wc6yrz4hnwnj36jb74o4.ipfs.infura-ipfs.io/)


## Example :
```javascript
import { isInvite, invite } from 'discordinvite';

const invite = await invite(ServerId);

// invite url
const invite = invite.invite;

//check is invite valid
const valid = isInvite(invite.invite);

// online memebers
const invite = invite.members;

// online memebers count
const invite = invite.onlinecount;
```
