function calc() {
    let bodySize = Number(document.querySelector("#body-size").value);
    let age = Number(document.querySelector("#age").value);
    let weight = Number(document.querySelector("#weight").value);
    let activity = Number(document.querySelector("#activity").value);
    console.log(activity);
    let gender = document.querySelector("input[name=gender]:checked").value;

    let basalKcal = document.querySelector("#basal-kcal");
    let basalKj = document.querySelector("#basal-kj");
    let totalKcal = document.querySelector("#total-kcal");
    let totalKj = document.querySelector("#total-kj");

    if(gender = "female" && bodySize > 0 && age > 0 && weight > 0) {
        basalKcal.innerText = Math.ceil(66.47 + (13.7 * weight) + (5 * bodySize) - (6.8 * age));
        totalKcal.innerText = Math.ceil(Number(basalKcal.innerText) * activity);

        basalKj.innerText = Math.ceil(Number(basalKcal.innerText) * 4.184);
        totalKj.innerText = Math.ceil(Number(totalKcal.innerText) * 4.184);
    } else {
        basalKcal.innerHTML = Math.ceil(655.1 + (9.6 * weight) + (1.8 * bodySize) - (4.7 * age));
        totalKcal.innerText = Math.ceil(Number(basalKcal.innerText) * activity);

        basalKj.innerText = Math.ceil(Number(basalKcal.innerText) * 4.184);
        totalKj.innerText = Math.ceil(Number(totalKcal.innerText) * 4.184);
    }
}