let scoreHome = document.getElementById("scoreh")
let scoreGuest = document.getElementById("scoreg")
countHome = 0
countGuest = 0

function add1h() {
    countHome += 1
    scoreHome.textContent = countHome
}

function add2h() {
    countHome += 2
    scoreHome.textContent = countHome
}

function add3h() {
    countHome += 3
    scoreHome.textContent = countHome
}

function add1g() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}

function add2g() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}

function add3g() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}