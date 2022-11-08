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


// Versione con Filter

// function estrazioneNomi(min, max) {
//     const array2 = myArray.filter((elemento, index) => {
//         if (index >= min && index <= max) {
//             return true;
//         }
//     });

//     array2.forEach((elemento) => {
//         risultato.innerHTML += `<li>${elemento}</li>`;
//     })
// }

// btnInvio.addEventListener("click", function () {
//     array2 = [];
//     svuotaFun();
//     let min = inputMin.value;
//     let max = inputMax.value;
//     estrazioneNomi(min, max)
// });

// function svuotaFun() {
//     risultato.innerHTML = "";
// };



let students = [
    {
        name: 'Marco',
        id: 213,
        grades: 78
    },

    {
        name: 'Paola',
        id: 110,
        grades: 96
    },

    {
        name: 'Andrea',
        id: 250,
        grades: 48
    },

    {
        name: 'Gaia',
        id: 145,
        grades: 74
    },

    {
        name: 'Luigi',
        id: 196,
        grades: 68
    },

    {
        name: 'Piero',
        id: 102,
        grades: 50
    },

    {
        name: 'Francesca',
        id: 120,
        grades: 84
    },
];

let arrUppercase = students.map((element) => {
    return element.name.toUpperCase();
});

console.log(arrUppercase);

let arrGrades1 = students.filter((element) => {
    if (element.grades > 70) {
        return true;
    }
});

console.log(arrGrades1);

let arrGrades2 = students.filter(({ grades, id }) => grades > 70 && id > 120)

console.log(arrGrades2)




