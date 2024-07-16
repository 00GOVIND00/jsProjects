const homeScore = document.getElementById("home_score");
const guestScore = document.getElementById("guest_score");
let homeCount = 0;
let guestCount = 0;
//Home Score card
const buttonOneHome = document.getElementById("home-one-pointer");
buttonOneHome.addEventListener("click", () => {
    homeCount++;
    homeScore.textContent = homeCount;

})
const buttonTwoHome = document.getElementById("home-two-pointer");
buttonTwoHome.addEventListener("click", () => {
    homeCount += 2;
    homeScore.textContent = homeCount;

})
const buttonThreeHome = document.getElementById("home-three-pointer");
buttonThreeHome.addEventListener("click", () => {
    homeCount += 3;
    homeScore.textContent = homeCount;

})

//Guest Score card

const buttonOneGuest = document.getElementById("guest-one-pointer");
buttonOneGuest.addEventListener("click", () => {
    guestCount++;
    guestScore.textContent = guestCount;

})

const buttonTwoGuest = document.getElementById("guest-two-pointer");
buttonTwoGuest.addEventListener("click", () => {
    guestCount += 2;
    guestScore.textContent = guestCount;

})

const buttonThreeGuest = document.getElementById("guest-three-pointer");
buttonThreeGuest.addEventListener("click", () => {
    guestCount += 3;
    guestScore.textContent = guestCount;

})







