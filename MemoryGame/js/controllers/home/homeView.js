import { LOGIN_STATE, PLAY_STATE, CREDITS_STATE, SCORES_STATE, THEMES_STATE, DIFFICULTY_STATE } from '../../libs/constants.js';
import { div, img, p } from '../../libs/html.js';
import { View } from '../view.js';

export class HomeView extends View{
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'homeView';

        img({ src: './img/logo-mg.svg', className: 'homeLogo'}, this.elementsContainer)

        var loginBtn = div({innerHTML: 'Login', className: 'game-button',onclick: this.onButtonClick.bind(this, LOGIN_STATE)}, this.elementsContainer);
        var playBtn = div({innerHTML: 'Play', className: 'game-button', onclick: this.onButtonClick.bind(this, PLAY_STATE)}, this.elementsContainer);
        var creditsBtn = div({innerHTML: 'Credits', className: 'game-button',onclick: this.onButtonClick.bind(this, CREDITS_STATE) }, this.elementsContainer);
        var scoresBtn = div({innerHTML: 'Scores', className: 'game-button', onclick: this.onButtonClick.bind(this, SCORES_STATE)}, this.elementsContainer);
        var themesBtn = div({innerHTML: 'Themes', className: 'game-button', onclick: this.onButtonClick.bind(this, THEMES_STATE)}, this.elementsContainer);
        var difficultyBtn = div({innerHTML: 'Difficulty', className: 'game-button', onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE)}, this.elementsContainer);
    }

    onButtonClick(state){
       
        var event = new CustomEvent('home-button-click', {
            detail: {
                state: state,
            }, 
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);
    }
}