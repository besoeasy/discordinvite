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
