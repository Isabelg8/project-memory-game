import { controllerView } from "../controllerView.js";
import { p } from '../../libs/html.js';


export class CreditsView extends controllerView{
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'creditsView';
    
    //var text = document.createElement('p');
    //this.elementsContainer.appendChild(text);
    //text.innerHTML = 'Add credits here. ';

    p({ innerHTML: 'Gamer Grand Master', className: 'creditsView-title'}, this.elementsContainer)

    p({ innerHTML: 'Esteban Padilla', className: 'creditsView-p'}, this.elementsContainer)

    p({ innerHTML: 'Gamer Jedi Knigh', className: 'creditsView-title'}, this.elementsContainer)

    p({ innerHTML: 'Ana Isabel Gómez', className: 'creditsView-p'}, this.elementsContainer)

    } 
}