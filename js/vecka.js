var week = document.getElementById('week');
var period = document.getElementById('period');

var moment = moment();
moment.locale('sv');


week.innerHTML = moment.week();
period.innerHTML = moment.startOf('week').format("D MMM") + ' - ' + moment.endOf('week').format("D MMM");
