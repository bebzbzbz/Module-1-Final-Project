function calc() {
    let bodySize = Number(document.querySelector("#body-size").value);
    let age = Number(document.querySelector("#age").value);
    let weight = Number(document.querySelector("#weight").value);
    let activity = Number(document.querySelector("#activity").value);
    let gender = document.querySelector("input[name=gender]:checked").value;

    let basalKcal = document.querySelector("#basal-kcal");
    let basalKj = document.querySelector("#basal-kj");
    let totalKcal = document.querySelector("#total-kcal");
    let totalKj = document.querySelector("#total-kj");

    if(gender == "female") {
        basalKcal.innerHTML = Math.ceil(655.1 + (9.6 * weight) + (1.8 * bodySize) - (4.7 * age));
        totalKcal.innerText = Math.ceil(Number(basalKcal.innerText) * activity);

        basalKj.innerText = Math.ceil(Number(basalKcal.innerText) * 4.184);
        totalKj.innerText = Math.ceil(Number(totalKcal.innerText) * 4.184);
    } else {
        basalKcal.innerText = Math.ceil(66.47 + (13.7 * weight) + (5 * bodySize) - (6.8 * age));
        totalKcal.innerText = Math.ceil(Number(basalKcal.innerText) * activity);

        basalKj.innerText = Math.ceil(Number(basalKcal.innerText) * 4.184);
        totalKj.innerText = Math.ceil(Number(totalKcal.innerText) * 4.184);
    }
}

let monthly = document.querySelector(".pricing .btns-container a:first-of-type");
let yearly = document.querySelector(".pricing .btns-container a:nth-of-type(2");

function btnChange1() {
    monthly.classList.remove("active");
    monthly.classList.add("secondary");
    yearly.classList.add("active");
}

function btnChange2() {
    yearly.classList.remove("active");
    yearly.classList.add("secondary");
    monthly.classList.add("active");
}