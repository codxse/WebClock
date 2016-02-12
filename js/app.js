function onReady() {
    console.log('Bing Bang!!!');

    var clock = createClock('clock');
}

function createClock(HTML_ID) {
    var clock = {};
    clock.updateClock = function() {
        var date = new Date();
        var now = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        var c = document.getElementById(HTML_ID);

        c.innerHTML = formatDigits(now);
    };

    setInterval(clock.updateClock,1000);
    clock.updateClock();

    return clock;
}

function formatDigits(val) {
    if (val<10)
        val = '0' + val;

    return val;
}

window.onload = onReady();