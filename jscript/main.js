const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
let array2 = [];

let inputMin = document.getElementById("inputMin");
let inputMax = document.getElementById("inputMax");
let btnInvio = document.getElementById("invio");
let risultato = document.getElementById("risultato");

function estrazioneNomi(min, max) {
    myArray.forEach((elemento, index) => {
        if (index >= min && index <= max) {
            array2.push(elemento);
        }
    });
}

btnInvio.addEventListener("click", function () {
    array2 = [];
    svuotaFun();
    let min = inputMin.value;
    let max = inputMax.value;
    estrazioneNomi(min, max)

    array2.forEach((elemento) => {
        risultato.innerHTML += `<li>${elemento}</li>`;
    })
});

function svuotaFun() {
    risultato.innerHTML = "";
};




