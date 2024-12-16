import { Component } from '@angular/core';
import { ScoreService } from '../../services/score.service';
import { Score } from '../../models/score.interface';



@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrl: './table-container.component.scss'
})
export class TableContainerComponent {
    public scoreList: Score[] = this.scoreService.scoreList;

    public totalScore: number = this.scoreService.totalScore;

    constructor(public scoreService: ScoreService) {
      this.scoreService.recalcTotalScore();
    }
}
