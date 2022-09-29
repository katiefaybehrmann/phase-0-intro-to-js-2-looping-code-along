const cards =[];
const name = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

function writeCards(name, event){
    for (let i = 0; i < name.length; i++){
        cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return cards;

}

function countDown(){
    let number = 10;
    while (number >= 0) {
        console.log(number--);
      }
    }