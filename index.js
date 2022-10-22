const { psup, sysup } = require ('./uptime')

const i = 0;
while (i < 10) {
    let {ut_hour, ut_min, ut_sec} = psup();
    let {os_hour, os_min, os_sec} = sysup();
    console.log(`process run time is : ${ut_hour}h ${ut_min}m ${ut_sec}s`);
    console.log(`system run time is : ${os_hour}h ${os_min}m ${os_sec}s`);
}