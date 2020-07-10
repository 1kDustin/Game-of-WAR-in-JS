class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    
    isGreaterThan(card) {
        console.log(this.value > card.value);
    }
}

class Deck {

    // adds 52 cards
    constructor(name) {
        this.suits = ['spades', 'diamonds', 'clubs', 'hearts'];
        this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.name = name;
        this.cards = [];
        for (let i = 0; i < this.suits.length; i++) {
            for (let x = 0; x < this.values.length; x++) {
                this.cards.push(new Card(this.values[x], this.suits[i]))
            }
        }
      }
  
    shuffle() {
        let shuffledDeck = [];
        while (this.cards.length) {
            let randomIndex = Math.floor(Math.random() * this.cards.length);
            shuffledDeck.push(this.cards[randomIndex]);
            this.cards.splice(randomIndex, 1);
        }
        this.cards = shuffledDeck;
    }
  
    getCards(num) {
        let cards = [];
        for (let i = 0; i < num; i++) {
            cards.push(this.cards.pop());
        }
        return cards;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.points = 0;
    }

  // pop() removes the last element, and also returns
    playCard() {
        return this.hand.pop();
    }

    // ... expands cards so that its gonna do push() for every single card
    addCards(cards) {
        if (cards == null) return;
        if (cards instanceof Card) this.hand.push(cards)
        else this.hand.push(...cards);
    }
  
    addPoint() {
        this.points++;
    }
  
}
 
let deck = new Deck("Deck of Cards");
//console.log(deck);
deck.shuffle();
//console.log(deck);

let player1 = new Player('Player One');
let player2 = new Player('Player Two');

player1.addCards(deck.getCards(26));
player2.addCards(deck.getCards(26));


//console.log(player1);
//console.log(player2);

function playRound() {
    let p1card = player1.playCard();
    let p2card = player2.playCard();
    if (p1card.value > p2card.value) {
        console.log('Player one wins this round.') 
        player1.addPoint();
    } else if (p2card.value > p1card.value) {
        console.log('Player two wins this round')
        player2.addPoint();
    } else {  
      console.log('Tie!');
    }
}

for (let i = 0; i < 26; i++) {
  playRound();
}

console.log(player1.name + "'s points: " + player1.points);
console.log(player2.name + "'s points: " + player2.points);