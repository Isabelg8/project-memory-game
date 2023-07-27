import { Controller } from '../controller.js';
import { PlayView } from './playView.js';
import { PlayService } from './playService.js';

export class PlayController extends Controller {
    constructor (gameManager, parent) {
        super(gameManager);
        this.view = new PlayView(this, parent);
        this.cards = [];
        this.service = new PlayService(this);
        this.service.getCards();
    }

    showCards(cards){
        this.view.showCards(cards)

        
    }   

}