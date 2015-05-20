var week = document.getElementById('week');
var period = document.getElementById('period');

moment.locale('sv');

var now = moment();

week.value = now.week();
update(now);

week.addEventListener('change', function(e) {
    console.log(week.value);
    update( moment().week(week.value) );
});

function update(m) {
    period.innerHTML = m.startOf('week').format("D MMM") + ' - ' + m.endOf('week').format("D MMM");
}