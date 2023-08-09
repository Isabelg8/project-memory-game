import { controllerView } from "../controllerView.js";
import { ScoreView } from "./scoreView.js";

export class ScoresView extends controllerView{
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'scoresView';

    }

    showScores(scores){
        //this.scores = scores;
        //this.view.showScores(this.scores);

        scores.forEach(score => {
            let scoreview = new ScoreView(this, this.container, score);
            
        });

    }
}