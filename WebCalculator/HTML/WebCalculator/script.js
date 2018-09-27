let firstNumber = document.querySelector("#first-number");
let secondNumber = document.querySelector(".second-number");
let wynik = document.querySelector("#wynik");

let btndodaj = document.querySelector("#dodaj");
let btnpodziel = document.querySelector("#podziel");
let btnpomnoz = document.querySelector("#pomnoz")
let btnodejmij = document.querySelector("#odejmij")
btndodaj.addEventListener("click", sum);
btnpodziel.addEventListener("click", div);
btnpomnoz.addEventListener("click", mul);
btnodejmij.addEventListener("click", sub);

btndodaj.addEventListener("click", function () {
    calc (operacje.suma);
});

// var Wynik = HTMLBodyElement.Wynik;
let Score = 0;

function calc (operacja){
// kod 45 - a, b, np. sum
// pobranie wartosci,
// sprawdzenie czy sa podane,
// operacja === "SUMA" -> sum (a, b) (else if) 

// obiekt ktorego wszystkie attrybuty beda opisywac operacje
// jak robic obiek w JS, deklarowac atrybuty, przypisac im wartosci "SUM", "SUB" i wyklorzystac w calc
}

function sum (){
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);
    let suma = a + b;
    wynik.value = suma
}

function mul (){
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);
    let suma = a * b;
    wynik.value = suma
}

function sub (){
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);
    let suma = a - b;
    wynik.value = suma
}

function div(){
    console.log(firstNumber.value)
    if(!firstNumber.value || !secondNumber.value){
        wynik.value = "a lub b nie jest podane";
        return;
    }
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);
    if(isNaN(a) || isNaN(b)){
        wynik.value = "a lub b nie jest liczbą";
    } else if(b === 0){
        wynik.value = "Nie dzieli się przez 0!!!";
    } else{
        let wynikdz = a / b;
        wynik.value = wynikdz;    
    }
}
// function sumValues (FirstNumber, SecondNumber, Buttons, score, Wynik){
//     FirstNumber = document.Buttons.FirstNumber.value;
//     SecondNumber = document.Buttons.SecondNumber.value;
//     Score = FirstNumber + SecondNumber;
//     document.Buttons.Wynik.value=Score;
//     document.Buttons.Score.value = Wynik;
// }

// function subValues (){
//     FirstNumber = document.Buttons.FirstNumber.value;
//     SecondNumber = document.Buttons.SecondNumber.value;
//     score = FirstNumber - SecondNumber;
//     document.Buttons.Wynik.value = score;
//     document.Buttons.Score.value = Wynik;
// }

// function divValues (){
//     FirstNumber = document.Buttons.FirstNumber.value;
//     SecondNumber = document.Buttons.SecondNumber.value;
//     score = FirstNumber / SecondNumber;
//     document.Buttons.Wynik.value = score;
//     document.Buttons.Score.value = Wynik;
// }

// function mulValues (){
//     FirstNumber = document.Buttons.FirstNumber.value;
//     SecondNumber = document.Buttons.SecondNumber.value;
//     score = FirstNumber * SecondNumber;
//     document.Buttons.Wynik.value = score;
//     document.Buttons.Score.value = Wynik;
// }

