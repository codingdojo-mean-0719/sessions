class Card {
  constructor(suit, value, number) {
    this.suit = suit;
    this.value = value;
    this.number = number;
  }

  show() {
    console.log(`Card suit is ${this.suit} with value ${this.value} and number ${this.number}`);
  }
}

class Deck {
  constructor() {
    this.deck = [];

    this.reset();
    this.shuffle();
  }

  shuffle() {
    const deck = this.deck;
    let index = deck.length;

    while (index) {
      const randomIndex = Math.floor(Math.random() * index--);
      const temp = deck[randomIndex];
      deck[randomIndex] = deck[index];
      deck[index] = temp;
    }
 
    return deck;
  }
  
  reset() { 
  
    const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (const suit of suits) {
      // for (let index = 0; index < values.length; index++) {
      //   const value = values[index];

      //   const card = new Card(suit, value, index + 1);

      //   this.deck.push(card);
      // }

      for (const [index, value] of values.entries()) {
        const card = new Card(suit, value, index + 1);
        this.deck.push(card);
      }
    }
  }
      
  deal() { 
    return this.deck.pop();
  }
}

  
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  acceptCard(card) {
    this.hand.push(card);
  }

  discard() {
    return this.hand.pop();
  }
}

const deck = new Deck();
const person = new Player('Bob');
console.log(deck);
console.log(deck.deal());


person.acceptCard(deck.deal());

console.log(person.discard());
