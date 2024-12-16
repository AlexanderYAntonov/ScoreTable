import { Component, Input } from '@angular/core';
import { Score } from '../../models/score.interface';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss'
})
export class TableRowComponent {
  @Input()
  data!: Score;

  constructor (private scoreService: ScoreService) {}

  public onScoreChange(value: Event): void {
    console.log(`new score for ${this.data.id} = `, value);
    console.log(this.data.score);
    this.scoreService.updateScore(this.data.id, +this.data.score);
  }
}
