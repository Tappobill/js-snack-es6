// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4

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


// Snack 2
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

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


// Snack 3
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
    { name: "Pinarello", peso: 10 },
    { name: "Bianchi", peso: 8 },
    { name: "Scott", peso: 11 }
];

let biciLeggera = bici[0];

for (let i = 0; i < bici.length; i++) {
    let elementoCorrente = bici[i];
    let { peso } = elementoCorrente;
    if (peso < biciLeggera.peso) {
        biciLeggera = elementoCorrente;
    }
}

console.log(biciLeggera)


// Snack4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const teams = [
    { nome: "Juventus", punti_fatti: 0, falli_subiti: 0 },
    { nome: "Milan", punti_fatti: 0, falli_subiti: 0 },
    { nome: "Inter", punti_fatti: 0, falli_subiti: 0 },
    { nome: "Napoli", punti_fatti: 0, falli_subiti: 0 }
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const teamsCopia = teams.map((elemento) => {
    elemento.punti_fatti = getRandomInt(1, 100);
    elemento.falli_subiti = getRandomInt(1, 100);
    return elemento
});

const teamsCopia1 = teams.map(({ nome, falli_subiti }) => {
    falli_subiti = getRandomInt(1, 100);
    return { falli_subiti, nome }
});

console.log(teamsCopia);
console.log(teamsCopia1);