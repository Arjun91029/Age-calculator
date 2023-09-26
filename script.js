function age() {
    let d1 = parseInt(document.getElementById("date").value);
    let m1 = parseInt(document.getElementById("month").value);
    let y1 = parseInt(document.getElementById("year").value);
    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();

    let month = [31, (y2 % 4 === 0 && (y2 % 100 !== 0 || y2 % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    document.getElementById("age").innerHTML = 
    "Your age is " + y + " years " + m + " months " + d + " days.";
}
