## Setup

![Setup](https://bafybeigwyzhltpwijs2zxv4ugsbkxi57hq5vqzibcj5pvwacuqf35idwoy.ipfs.infura-ipfs.io/)


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
