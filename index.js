const { psup, sysup } = require ('./uptime')
const { memstat } = require ('./mem')
const { cpu_core } = require ('./cpu')


let {ps_hour, ps_min, ps_sec} = psup();
let {os_hour, os_min, os_sec} = sysup();
let { totram, totfram, totused, pertotused } = memstat();
let { pcore, vcore } = cpu_core();


console.log(`
process uptime : ${ps_hour}h ${ps_min}m ${ps_sec}s
system uptime: ${os_hour}h ${os_min}m ${os_sec}s
total ram : ${totram}GB
total free ram : ${totfram}GB
total used ram : ${totused}GB
Ram Used: ${pertotused}%
Physical Core : ${pcore}
Total Core : ${vcore}
`);