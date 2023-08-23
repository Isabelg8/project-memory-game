import { controllerView } from "../controllerView.js";
import { p, div} from '../../libs/html.js';


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


    p({ innerHTML: 'About this game', className: 'creditsView-title'}, this.elementsContainer)

    this.creditsTxtContainer = div({ className: 'creditsTxtContainer' }, this.elementsContainer);
    p({ innerHTML: 'Memory Games: Find the letters. The sets of pairs of cards are mixed and face down in a grid with different images, you must find them to go to the next level. There are categories like: Fruits, logos, vehicles, characters, animals and many more. You will be able to evaluate and exercise your memory, concentration, precision and speed. It is a brain training game, a real fun brain trainer if you use it daily. Find the pairs and start exercising your memory today with Memory Match!', className: 'creditsView-longTxt'}, this.creditsTxtContainer);

    p({ innerHTML: 'Data security', className: 'creditsView-title'}, this.creditsTxtContainer)
    p({ innerHTML: 'The first step to security is understanding how developers collect and share your data. Privacy and data security practices may vary based on application usage, region, and age. The developer has provided this information and may update it over time. <b> Does not collect data </b>', className: 'creditsView-longTxt'}, this.creditsTxtContainer);


    } 
}