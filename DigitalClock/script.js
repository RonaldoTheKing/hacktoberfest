function now() {
    let dayArr = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun']
    let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let time = new Date();

    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let date = time.getDate();
    let day = time.getDay();
    let setmonth = time.setMonth(9);
    let month = time.getMonth();
    let year = time.getFullYear();



    let hourSection = document.getElementById('hour').innerHTML = hour;
    let minSection = document.getElementById('min').innerHTML = min;
    let secSection = document.getElementById('sec').innerHTML = sec;
    let dateSection = document.getElementById('date').innerHTML = date;
    let dayText = document.getElementById('day-value').innerHTML = dayArr[day-1];
    let monthSection = document.getElementById('month').innerHTML = month+1;
    let monthText = document.getElementById('month-value').innerHTML = monthArr[month + 1];
    let yearection = document.getElementById('year').innerHTML = year;
}

setInterval(now, 1000);