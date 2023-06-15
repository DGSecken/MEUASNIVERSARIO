AOS.init();

const bdDate = new Date ("Feb 28, 2024, 18:00:00");
const bdTimeStamp = bdDate.getTime();

const timeCount = setInterval(function() {
    const now = new Date();
    const actTimeStamp = now.getTime();

    const bdDistance = bdTimeStamp - actTimeStamp;

    const monthMS = 1000 * 60 * 60 * 24 * 30;
    const dayMs = 1000 * 60 * 60 * 24 ;
    const hourMs = 1000 * 60 * 60;
    const minMs = 1000 * 60;

    const bdMonth = Math.floor(bdDistance / monthMS);
    const bdDay = Math.floor((bdDistance % monthMS) / dayMs);
    const bdHour = Math.floor((bdDistance % dayMs) / hourMs);
    const bdMin = Math.floor((bdDistance % hourMs) / minMs);
    const bdSec = Math.floor((bdDistance % minMs) / 1000);

    document.getElementById('counter').innerHTML = `${bdMonth}m ${bdDay}d ${bdHour}h ${bdMin}m ${bdSec}s`;
}, 1000);
