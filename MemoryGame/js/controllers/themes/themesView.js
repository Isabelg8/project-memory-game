import { THEME_ANIMALS, THEME_FACES, THEME_FAST_FOOD, THEME_SERIES, THEME_HALLOWEEN } from "../../libs/constants.js";
import { div, p } from "../../libs/html.js";
import { controllerView } from "../controllerView.js";

export class ThemesView extends controllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'themesView';

        p({ innerHTML: 'how good its your knowledge?', className: 'themeView-text'}, this.elementsContainer)
        div({ innerHTML: 'TV Shows', className: 'game-button', onclick: this.onButtonClick.bind(this, THEME_SERIES) }, this.elementsContainer);

        p({ innerHTML: 'lets make Shigetaka Kurita proud', className: 'themeView-text'}, this.elementsContainer)
        div({ innerHTML: 'Emojis', className: 'game-button', onclick: this.onButtonClick.bind(this, THEME_FACES) }, this.elementsContainer);

        p({ innerHTML: 'Are you scared?', className: 'themeView-text'}, this.elementsContainer)
        div({ innerHTML: 'Halloween', className: 'game-button', onclick: this.onButtonClick.bind(this, THEME_HALLOWEEN) }, this.elementsContainer);

        p({ innerHTML: 'Cuter than you, right?', className: 'themeView-text'}, this.elementsContainer)
        div({ innerHTML: 'Animals', className: 'game-button', onclick: this.onButtonClick.bind(this, THEME_ANIMALS) }, this.elementsContainer);

        p({ innerHTML: 'What you eat every day -.-', className: 'themeView-text'}, this.elementsContainer)
        div({ innerHTML: 'Fast Food', className: 'game-button', onclick: this.onButtonClick.bind(this, THEME_FAST_FOOD) }, this.elementsContainer);
    }

    onButtonClick(theme) {
        var event = new CustomEvent('save-theme', {
            detail: {
                theme: theme,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);

    }
}