import { View } from "./view.js";
import { div, img } from "../libs/html.js";
import { THEME_FAST_FOOD, THEME_HALLOWEEN, THEME_SERIES } from "../libs/constants.js";

export class CardView extends View {
    constructor(parent, card, theme) {
        super(parent);
        this.card = card;
        this.theme = theme;
        this.container.className = 'cardView-container';

        this.iconContainer = div({ className: 'cardView cardView-hidden' }, this.container);

        this.container.onclick = this.onSelected.bind(this);
        //this.container.addEventListener('show-card', this.showOnSelected.bind(this));

        window.addEventListener('show-card-on-selected', (event) => {
            this.showOnSelected();
        });

        window.addEventListener('show-card-on-discovered', (event) => {
            this.showOnDiscovered();
        });

        window.addEventListener('hide-selected-card', (event) => {
            this.hide();
        });

    }

    onSelected() {
        this.card.isSelected = true;

        var event = new CustomEvent('card-selected', {
            detail: {
                card: this.card,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);

    }

    showOnSelected() {
        if (this.card.isSelected) {
            this.showCardContent();
            this.iconContainer.classList.remove('cardView-hidden');
            this.iconContainer.classList.add('cardView-selected');
        }
    }

    showCardContent() {
        if (this.card.isSelected) {
            if (this.theme === THEME_FAST_FOOD || this.theme === THEME_HALLOWEEN || this.theme === THEME_SERIES) {
                // this.iconContainer.innerHTML = `<img src="img/fastFood/${this.card.icon}">`;
                this.iconContainer.innerHTML = '';
                img({ src: `img/imgCards/${this.card.icon}`, className: 'cardView-image' }, this.iconContainer)
            } else {
                this.iconContainer.innerHTML = this.card.icon;
            }
        }
    }


    showOnDiscovered() {

        if (this.card.isSelected && !this.card.isDiscovered) {
            this.card.isDiscovered = true;
            this.showCardContent();
            this.iconContainer.classList.remove('cardView-hidden');
            this.iconContainer.classList.remove('cardView-selected');
            this.iconContainer.classList.add('cardView-discovered');
            this.container.onclick = null;
            //this.container.removeEventListener('onclick', this.onSelected.bind(this));
        }
    }

    hide() {
        if (this.card.isSelected && !this.card.isDiscovered) {
            this.card.isSelected = false;
            this.iconContainer.innerHTML = '';
            this.iconContainer.classList.add('cardView-hidden');
            this.iconContainer.classList.remove('cardView-selected');
        }
    }
}