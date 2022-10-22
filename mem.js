const os = require('os');
const process = require('process');



const mem = () => {
    // get total memory
    var bytes_totalram = os.totalmem();
    gb_totalrma = bytes_totalram/(1024*1024*1024);
    totram = parseFloat(gb_totalrma).toFixed(2);

    // get free memory
    var bytes_freeram = os.freemem();
    gb_freeram = bytes_freeram/(1024*1024*1024);
    totfram = parseFloat(gb_freeram).toFixed(2);

    // get used memory
    var used_ram = totram - totfram;
    totused = parseFloat(used_ram).toFixed(2);

    var pertotused = Math.round((used_ram * 100) / totram)

    return { totram, totfram, totused, pertotused }
};



module.exports = {
    mem,
}




// // set Processor cores
// var totalcores = os.cpus().length;
// cores = totalcores/2;

// // total used ram 
