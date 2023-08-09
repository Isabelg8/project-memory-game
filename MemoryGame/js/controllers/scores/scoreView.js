import { View } from "../../views/view.js";

export class ScoreView extends View{
    constructor(parent, score){
        super(parent);

        this.score = score;
    }

}