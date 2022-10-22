const { psup, sysup } = require ('./uptime')
const { mem } = require ('./mem')


let {ps_hour, ps_min, ps_sec} = psup();
let {os_hour, os_min, os_sec} = sysup();
let { totram, totfram, totused, pertotused } = mem();


console.log(`process run time is : ${ps_hour}h ${ps_min}m ${ps_sec}s`);
console.log(`system run time is : ${os_hour}h ${os_min}m ${os_sec}s`);
console.log(`
total ram : ${totram}GB
total free ram : ${totfram}GB
total used ram : ${totused}GB
Ram Used: ${pertotused}%
`);