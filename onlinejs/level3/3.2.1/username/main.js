const os = require('node:os');
const userInfo = os.userInfo();
console.log(userInfo.username);