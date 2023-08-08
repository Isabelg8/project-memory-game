import { controllerView } from "../controllerView.js";

export class CreditsView extends controllerView{
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'creditsView';
    
    var text = document.createElement('p');
    this.elementsContainer.appendChild(text);
    text.innerHTML = 'Add credits here. ';

    }
}