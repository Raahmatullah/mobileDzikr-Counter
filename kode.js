const klik = document.querySelector(".incrementBtnEl");//click
const targetnow = document.getElementById("targetInput"); //target
const pickname = document.getElementById("dzikirInput"); //naming
const addDzikirBtn = document.getElementById("addDzikirBtn");//add
const PicknameValue = pickname.value;

let counter = 0;
let clicked = false;
//click button rules
klik.addEventListener("click", function () {
    clicked = true;
    counter += 1
    klik.textContent = counter
    if (clicked) {
        klik.classList.remove("shake");
        if (counter == targetnow.value) {
            if (PicknameValue === "") {
                pickname.classList.add("shake");
            } else {
                globalscope();
            }
        }
    }

});
//reset button
const resetEL = document.getElementById("resetBtnEl");
resetEL.addEventListener("click", function () {
    counter = 0;
    klik.textContent = counter;
});
// target input ruling 
klik.addEventListener("click", function () {
    const target = parseInt(targetnow.value, 10); // ubah ke number
    if (!isNaN(target) && counter >= target) {
        showToast("🎯 Target Achieved!");
        ;
    }
});

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

const globalscope = function () {

    if (dzikirInput.value === "") {
        pickname.classList.add("shake");
    } else if (counter === 0) {
        klik.classList.add("shake");
    } else {
        pickname.classList.remove("shake");
        historyLogs();
        counter = 0;
        klik.textContent = counter;
        PicknameValue = "";
    }

}

addDzikirBtn.addEventListener("click", globalscope);

historyLogs = function () {
    const cards = document.createElement("div");
        cards.classList.add("cards");
        cards.textContent = `${dzikirInput.value}\n${counter}`;
        document.getElementById("dzikirContainer").appendChild(cards);
        cards.scrollIntoView({ behavior: "smooth", inline: "end" });
}