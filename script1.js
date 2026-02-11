let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"There is no passion to be found in playing small; in settling for a life that is less than the one you are capable of living."`,
        person: "Nelson Mandela"
    },
    {
        quote: `"Your ordinary acts of love and hope point to the extraordinary promise that every human life is of inestimable value."`,
        person: "Desmond Tutu"
    },
    {
        quote: `"In dancing with the enemy one follows his steps even if counting under one’s breath."`,
        person: "Breyten Breytenbach"
    },
    {
        quote: `"If you want peace, you don't talk to your friends. You talk to your enemies."`,
        person: "Desmond Tutu"
    },
    {
        quote: `"South Africa is blessed to have women and men like yourselves who have little to give but give what you have with open hands and open hearts."`,
        person: "Mangosuthu Buthelezi"
    },
    {
        quote: `"Age is getting to know all the ways the world turns, so that if you cannot turn the world the way you want, you can at least get out of the way so you won’t get run over."`,
        person: "Miriam Makeba"
    },
    {
        quote: `"Some people avoid thinking deeply in public, only because they are afraid of coming across as suicidal"`,
        person: "Mokokoma Mokhonoana"
    },
    {
        quote: `"When something is important enough, you do it even if the odds are not in your favor."`,
        person: "Elon Musk"
    },
    {
        quote: `"I don't mind living in a man's world as long as I can be a woman in it."`,
        person: "Marilyn Monroe"
    },
    {
        quote: `"The most courageous act is still to think for yourself. Aloud."`,
        person: "Coco Chanel"
    }
];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
