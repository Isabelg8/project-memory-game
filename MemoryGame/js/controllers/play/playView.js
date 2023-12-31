import { div, p } from '../../libs/html.js';
import { CardView } from '../../views/cardView.js';
import { controllerView } from "../controllerView.js";

export class PlayView extends controllerView {
    constructor(controller, parent, theme) {
        super(controller, parent);
        this.theme = theme;
        this.container.id = 'playView';
        this.elementsContainer.className = 'playView-elementsContainer';
        this.introText = p({ innerHTML: 'SHOW YOUR MOVES!', className: 'playView-title' }, this.elementsContainer);
        
        this.hudContainer = div({ className: 'playView-hudContainer' }, this.elementsContainer);
        this.cardsContainer = div({ className: 'playView-cardsContainer' }, this.elementsContainer);

        this.clicksText = p({ innerHTML: 'Clicks: 0', className: 'playView-text' }, this.hudContainer);
        this.timerText = p({ innerHTML: 'Times: 0', className: 'playView-text' }, this.hudContainer);
        this.resetBtn = div({ innerHTML: 'Reset', className: 'game-button playView-resetBtn', onclick: this.onResetBtn.bind(this) }, this.hudContainer);
    }

    showCards(cards) {
        this.cardsContainer.innerHTML = '';

        cards.forEach(card => {

            let cardView = new CardView(this.cardsContainer, card, this.theme);

        });

    }

    onResetBtn() {
        this.controller.resetGame();

    }

    updateHUD(clicks, time) {
        this.clicksText.innerHTML = `Clicks: ${clicks}`;
        this.timerText.innerHTML = `Time: ${time}`;
    }


}