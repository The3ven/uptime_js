const os = require('os');


const psup = () => {
    var ps_ut_sec = process.uptime();
    var ps_ut_min = ps_ut_sec/60;
    var ps_ut_hour = ps_ut_min/60;
    ps_sec = Math.floor(ps_ut_sec);
    ps_min = Math.floor(ps_ut_min);
    ps_hour = Math.floor(ps_ut_hour);
    ut_hour = ps_hour%60;
    ut_min = ps_min%60;
    ut_sec = ps_sec%60;
    return { ut_sec, ut_min, ut_hour};
};

const sysup = () => {
    var os_ut_sec = os.uptime();
    var os_ut_min = os_ut_sec/60;
    var os_ut_hour = os_ut_min/60;
    ut_sec = Math.floor(os_ut_sec)
    ut_min = Math.floor(os_ut_min);
    ut_hour = Math.floor(os_ut_hour);
    os_hour = ut_hour%60;
    os_min = ut_min%60;
    os_sec = ut_sec%60;
    return { os_sec, os_min, os_hour};
};


module.exports = {
    psup,
    sysup,
}
