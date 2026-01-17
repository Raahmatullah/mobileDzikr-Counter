const inputEL = document.getElementById("incrementBtnEl");
const targetInputEL = document.getElementById("targetInput");
const dzkrEl = document.getElementById("dzikirInput");
const addDzikirBtn = document.getElementById("addDzikirBtn");
//increment button
let counter=0;
let clicked= false;
inputEL.addEventListener("click", function() {
    clicked = true;
    if (clicked===true){
        inputEL.classList.remove("shake");
    }else if (dzkrEl.value>=targetInputEL.value){
        add
    }
    counter += 1
   inputEL.textContent=counter
});
//reset button
const resetEL = document.getElementById("resetBtnEl");
resetEL.addEventListener("click", function() {
    counter = 0;
    inputEL.textContent = counter;
});
// target input
inputEL.addEventListener("click", function() {
    const target = parseInt(targetInputEL.value, 10); // ubah ke number
    if (!isNaN(target) && counter > target) {
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

addDzikirBtn.addEventListener("click",function(){

    if(dzikirInput.value===""){
        dzkrEl.classList.add("shake");
    }else if(counter===0){
        inputEL.classList.add("shake");
    }else{
        dzkrEl.classList.remove("shake");
        const cards = document.createElement("div");
    cards.classList.add("cards");
    cards.textContent = `${dzikirInput.value}\n${counter}`;
    document.getElementById("dzikirContainer").appendChild(cards);
    cards.scrollIntoView({ behavior: "smooth", inline: "end" });
    counter=0;
    inputEL.textContent=counter;
    dzkrEl.value="";
    }
    
});
