var year = document.getElementById('year');

var year = document.getElementById('days');
var year = document.getElementById('hours');
var year = document.getElementById('minute');
var year = document.getElementById('second');

var currentYear = new Date().getFullYear();
var nextYear = new Date(`Jan 01 ${currentYear + 1} 00:00:00`);

function countDown()
{
   
    
    var currentTime = new Date();
    
    var diff = nextYear - currentTime;

    var s = Math.floor((diff / 1000) % 60);
    var m = Math.floor((diff / 1000 /60) % 60);
    var h = Math.floor((diff / 1000 / 60 / 60) % 24);
    var d = Math.floor((diff / 1000 / 60 / 60 / 24));

    second.innerHTML =s;
    minute.innerHTML =m;
    hours.innerHTML =h;
    days.innerHTML =d;
}
setInterval(countDown,1000);
year.innerHTML = nextYear.getFullYear();

countDown();