let expect = chai.expect;

describe('PlayerTest', function() {
    describe('#addCards', function() {
       it('tests addCards() and playCard()', function() {
           let card = new Card(9 , 'spades');;
           let player = new Player("Name");
            player.addCards(card);
           let playedCard = player.playCard();
            expect(playedCard).to.equal(card);
       })
       
       it('tests adding a null card', function() {
           let card = null;
           let player = new Player("Name");
            player.addCards(card);
           let playedCard = player.playCard();
            expect(playedCard).to.equal(undefined);
        })
        it('tests adding multiple cards', function() {
           let cards = [new Card(9, 'spades'), new Card(5, 'hearts')]
           let player = new Player("Name");
            player.addCards(cards);
           let playedCard1 = player.playCard();
           let playedCard2 = player.playCard();
           let playedCards = [playedCard2, playedCard1]
            expect(playedCards).to.deep.equal(cards);
        })
    })
})

describe('AddPoints', function() {
    describe('#addPoints', function() {
        it('adds points', function() {
           let points = 0;
            points++;            
        })
    })
})

describe('PlayRound', function() {
    describe('#playRound', function() {
        it('should see who has the highest valued card and give the winner a point', function() {
            let p1points = 0;
            let p2points = 0;
            let p1CardValue = 5;
            let p2CardValue = 10;
            if (p1CardValue > p2CardValue) {
                p1points++;
            } else {
                p2points++;
            }
            console.log('p2points' + ' ' + p2points);
        })
    })
})