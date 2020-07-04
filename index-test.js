let expect = chai.expect;

describe('PlayerTest', function() {
    describe('#addCards', function() {
       it('tests addCards() and playCard()', function() {
            card = new Card(9 , 'spades');;
            player = new Player("Name");
            player.addCards(card);
            playedCard = player.playCard();
            expect(playedCard).to.equal(card);
       })
       
       it('tests adding a null card', function() {
            card = null;
            player = new Player("Name");
            player.addCards(card);
            playedCard = player.playCard();
            expect(playedCard).to.equal(undefined);
        })
        it('tests adding multiple cards', function() {
            cards = [new Card(9, 'spades'), new Card(5, 'hearts')]
            player = new Player("Name");
            player.addCards(cards);
            playedCard1 = player.playCard();
            playedCard2 = player.playCard();
            playedCards = [playedCard2, playedCard1]
            expect(playedCards).to.deep.equal(cards);
        })
    })
})