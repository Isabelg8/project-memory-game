import { LOGIN_STATE, PLAY_STATE, CREDITS_STATE, SCORES_STATE, THEMES_STATE, DIFFICULTY_STATE } from '../../libs/constants.js';
import { div, img, p } from '../../libs/html.js';
import { controllerView } from '../controllerView.js';

export class HomeView extends controllerView{
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'homeView';
        this.elementsContainer.className = 'homeView-elementsContainer';
    
        img({ src: './img/logo-mg.svg', className: 'homeLogo'}, this.elementsContainer)

        p({ innerHTML: 'Are you ready?', className: 'home-intro-text'}, this.elementsContainer)

        var playBtn = div({innerHTML: 'Play', className: 'game-button', onclick: this.onButtonClick.bind(this, PLAY_STATE)}, this.elementsContainer);
        p({ innerHTML: 'Lets check other things', className: 'home-intro-text2'}, this.elementsContainer)
        
        this.buttonsContainer = div({ className: 'homeView-buttonsContainer'}, this.elementsContainer);
        
        var difficultyBtn = div({innerHTML: 'Difficulty', className: 'homeView-smallButton', onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE)}, this.buttonsContainer);
        var scoresBtn = div({innerHTML: 'Scores', className: 'homeView-smallButton', onclick: this.onButtonClick.bind(this, SCORES_STATE)}, this.buttonsContainer);
        var themesBtn = div({innerHTML: 'Themes', className: 'homeView-smallButton', onclick: this.onButtonClick.bind(this, THEMES_STATE)}, this.buttonsContainer);
        var creditsBtn = div({innerHTML: 'Credits', className: 'homeView-smallButton',onclick: this.onButtonClick.bind(this, CREDITS_STATE) }, this.buttonsContainer);
        var loginBtn = div({innerHTML: 'Login', className: 'game-button',onclick: this.onButtonClick.bind(this, LOGIN_STATE)}, this.elementsContainer);
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