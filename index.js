const { psup, sysup } = require ('./uptime')

const i = 0;
while (i < 10) {
    let {ps_hour, ps_min, ps_sec} = psup();
    let {os_hour, os_min, os_sec} = sysup();
    console.log(`process run time is : ${ps_hour}h ${ps_min}m ${ps_sec}s`);
    console.log(`system run time is : ${os_hour}h ${os_min}m ${os_sec}s`);
}