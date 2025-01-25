function calc() {
    let bodySize = Number(document.querySelector("#body-size").value);
    let age = Number(document.querySelector("#age").value);
    let weight = Number(document.querySelector("#weight").value);
    let activity = Number(document.querySelector("#activity").value);
    let gender = document.querySelector("input[name=gender]:checked").value;

    let basalKcalElem = document.querySelector("#basal-kcal");
    let basalKjElem = document.querySelector("#basal-kj");
    let totalKcalElem = document.querySelector("#total-kcal");
    let totalKjElem = document.querySelector("#total-kj");

    let basalKcal;

    if(gender === "female") {
        basalKcal = Math.ceil(655.1 + (9.6 * weight) + (1.8 * bodySize) - (4.7 * age));
    } else {
        basalKcal = Math.ceil(66.47 + (13.7 * weight) + (5 * bodySize) - (6.8 * age));
    }

    const totalKcal = Math.ceil(basalKcal * activity);
    const basalKj = Math.ceil(basalKcal * 4.184);
    const totalKj = Math.ceil(totalKcal * 4.184);

    basalKcalElem.innerText = basalKcal;
    totalKcalElem.innerText = totalKcal;
    basalKjElem.innerText = basalKj,
    totalKjElem.innerText = totalKj;
}

let monthly = document.querySelector(".pricing .btns-container a:first-of-type");
let yearly = document.querySelector(".pricing .btns-container a:nth-of-type(2");

function btnChange1() {
    monthly.classList.remove("active");
    yearly.classList.add("active");
}

function btnChange2() {
    yearly.classList.remove("active");
    monthly.classList.add("active");
}