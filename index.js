let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")

let home = 0
let guest = 0

function one_point_home(){
    home += 1
    homeScore.textContent = home
}

function two_point_home(){
    home += 2
    homeScore.textContent = home
}

function three_point_home(){
    home += 3
    homeScore.textContent = home
}

function one_point_guest(){
    guest += 1
    guestScore.textContent = guest
}

function two_point_guest(){
    guest += 2
    guestScore.textContent = guest
}

function three_point_guest(){
    guest += 3
    guestScore.textContent = guest
}