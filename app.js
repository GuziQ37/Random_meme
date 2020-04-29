
const btn = document.querySelector("button");

let number = 1;

const addElement = function(){
    
    const makeDiv = document.createElement('div');
    
    makeDiv.textContent = number;

    if(number%5 == 0) {
        makeDiv.classList.add("circle")
    } 

    document.body.appendChild(makeDiv);
    
    number++;
    
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


// przygotować API do generowania memów 
// pomyśleć czy fetchem czy inną metodą
// 1. przygotować metodę do pobrania memów przez api
// 2. wyświetlić mema
// 3. wyświetlać random mema po kliknięciu w przycisk
// 4. style
// 5. refaktor
// 6. szlif


fetch('https://api.imgflip.com/get_memes')
.then(res => res.json())
.then(data => console.log(data))
