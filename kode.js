const klik = document.querySelector(".incrementBtnEl");//click
const targetnow = document.getElementById("targetInput"); //target
const pickname = document.getElementById("dzikirInput"); //naming
const addDzikirBtn = document.getElementById("addDzikirBtn");//add
let counter = 0;
let clicked = false;

//click button rules
klik.addEventListener("click", function () {
    const target = parseInt(targetnow.value, 10);
    clicked = true;
    counter += 1
    klik.textContent = counter
    if (clicked) {
        klik.classList.remove("shake");
        if (counter == target) {
            globalscope(target);
        }
    }

});
//reset button
const resetEL = document.getElementById("resetBtnEl");
resetEL.addEventListener("click", function () {
    counter = 0;
    klik.textContent = counter;
});


function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}




const globalscope = function (e) {
    e.preventDefault();
    if (e === ""||e === 0) {
        e.classList.add("shake");
    } else {
        pickname.classList.remove("shake");
        historyLogs();
        counter = 0;
        klik.textContent = counter;
        pickname.value = "";
    }

}



historyLogs = function () {
    if (counter === 0) {
        klik.classList.add("shake");
        return;
    }else if (dzikirInput.value === "") {
        pickname.classList.add("shake");
        return;
    }
    else {
    const cards = document.createElement("div");
        cards.classList.add("cards");
        cards.textContent = `${dzikirInput.value}\n${counter}`;
        document.getElementById("dzikirContainer").appendChild(cards);
        cards.scrollIntoView({ behavior: "smooth", inline: "end" });
        pickname.classList.remove("shake");
        pickname.focus();
        


    }
}