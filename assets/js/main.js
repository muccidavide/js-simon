/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// creo funzione per generare 5 numeri random


let numberRandomArray = [];
while (numberRandomArray.length < 5 ){
    let numberRandom = Math.floor(Math.random() * 100) + 1;
    if (!numberRandomArray.includes(numberRandom)) {
        numberRandomArray.push(numberRandom)
    }
}

// li appendo ad un elemento della DOM

let boxNumberElement = document.querySelector('.numbers');
for (let i = 0; i < numberRandomArray.length; i++) {
    const numberItem = numberRandomArray[i];
    boxNumberElement.append(` ${numberItem} `)
    
}

// funzione affinchè numeri devono sparire dopo 30 secondi 

setTimeout(disappearElement, 10000);

// compare prompt dove utente deve inserire i 5 numeri 
let userChosedNumbers = []
setTimeout(insertNumbers, 10200);


// confronto fra numeri apparsi e numeri inseirti dall'utente

setTimeout(userNumberVSPcNumbers, 10300)

// a schermo numeri quali e quanti numeri indovinato dalll'utente.

function disappearElement() {
    let playBox = document.querySelector('.number_box')
    playBox.style.display = 'none';
}

function insertNumbers() {
    

    for (let i = 0; i < 5; i++) {
        
        let insertUserNumber = parseInt(prompt('Inserisci un numero'));
        userChosedNumbers.push(insertUserNumber)
        
    }

    return userChosedNumbers
    
}

function userNumberVSPcNumbers() {
 console.log(userChosedNumbers);
 console.log(numberRandomArray);
    let correctNumbers = [];
    let wrongNumbers = [];

    for (let i = 0; i < numberRandomArray.length; i++) {
        const numberRandom = numberRandomArray[i];
        const userChosedNumber = userChosedNumbers[i];

        if (numberRandomArray.includes(userChosedNumber)) {
            correctNumbers.push(userChosedNumber)



        } else {
            wrongNumbers.push(userChosedNumber)
        }

    }

    console.log(correctNumbers);
    console.log(wrongNumbers);
    
    if (correctNumbers.length === 5) {
        alert('Hai Vinto')
    } else {
     
        alert(`Hai perso! Numeri corretti ${correctNumbers.length} Numeri sbagliati ${wrongNumbers.length}`)
    }
}




