import { Card } from '../../models/card.js';

export class PlayService {
    constructor(controller) {
        this.controller = controller;
    }

    getCards() {

        var cards = [];
        var url = '../../../data/cards.json';
        var request = new XMLHttpRequest();
        request.open('get', url);
        request.onload = () => {
            if (request.status === 200) {
                var data = JSON.parse(request.response);

                data.cards.forEach(cardData => {
                    var card = new Card(cardData.id, cardData.icon)
                    cards.push(card);

                });
            } else {
                console.error('Error requesting cards');
            }

        }
        request.send();

        this.controller.showCards(cards);


    }

    sendScore() {

    }
}