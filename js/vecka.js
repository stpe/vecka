(function () {
    var week = document.getElementById('week');
    var period = document.getElementById('period');

    moment.locale('sv');

    var now = moment();

    week.value = now.week();
    update(now);

    // update period when input field change
    week.addEventListener('change', function(e) {
        if (week.value == "") {
            // if empty, default to this week
            week.value = now.week();
        }

        update( moment().week(week.value) );
    });

    // select all when field clicked
    week.addEventListener('click', function(e) {
        week.select();
    });

    // only allow digits to be entered
    week.addEventListener('keypress', function(e) {
        var key = event.which || event.keyCode;
        if (key == 13) {
            // return key
            return true;
        } else if (key < 48 || key> 57) {
            // something else than a digit
            e.preventDefault();
        }
    });

    function update(m) {
        period.innerHTML = m.startOf('week').format("D MMM") + ' - ' + m.endOf('week').format("D MMM");
    }
})();