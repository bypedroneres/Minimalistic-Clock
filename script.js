var is24HourFormat = false;
var showSeconds = true; // Added variable to track if seconds should be shown or hidden

// Function to update the clock time and date
function updateClock() {
    var now = new Date();

    var options = {
        hour12: !is24HourFormat,
        hour: 'numeric',
        minute: 'numeric',
        second: showSeconds ? 'numeric' : undefined // Show seconds if showSeconds is true
    };
    var time = now.toLocaleTimeString('en-US', options);
    var date = getFormattedDate(now);

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

// Function to get the formatted date string
function getFormattedDate(date) {
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var dayOfWeek = weekdays[date.getDay()];
    var day = date.getDate();
    var month = months[date.getMonth()];

    return dayOfWeek + ', ' + day + ' ' + month;
}

// Function to toggle between 12-hour and 24-hour formats
function toggleTimeFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock();
}

// Function to show or hide seconds
function toggleSeconds() {
    showSeconds = !showSeconds;
    updateClock();
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock
updateClock();
