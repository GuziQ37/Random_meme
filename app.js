
const btn = document.querySelector("button");

let number = 1;

const addElement = function(){
    const makeDiv = document.createElement('div');
    document.body.appendChild(makeDiv);
    number++;
    makeDiv.textContent = number;
}
  

btn.addEventListener("click", addElement)



// arryki do testowania
const jeden = {imie: 'jakub', nazwisko: 'wojciak'};
const dwa = {imie: 'magda', nazwisko: 'pijanowska'};
const trzy  = {imie: 'marcin', nazwisko: 'pietrzyk'};

// wyświetlanie obiektów w jednym console.logu
console.log({jeden, dwa, trzy});

// wyświetlanie jako tablica
console.log([jeden, dwa, trzy]);