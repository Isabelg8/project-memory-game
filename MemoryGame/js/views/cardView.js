import { View } from "./view";

export class CardView extends View{
    constructor(parent,card) {
        super(parent);
        this.card = card;

        let container = div({className: 'card-container'}, this.cardsContainer);
        div({innerHTML: card.icon, className: 'card card-hidden' }, container);

    }
}