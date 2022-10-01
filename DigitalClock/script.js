function clock() {
    let dayArr = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun']
    let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let time = new Date();

    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();


    let hourSection = document.getElementById('hour').innerHTML = hour;
    let minSection = document.getElementById('min').innerHTML = min;
    let secSection = document.getElementById('sec').innerHTML = sec;
}

setInterval(clock, 1000);
