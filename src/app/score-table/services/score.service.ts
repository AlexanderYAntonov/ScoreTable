import { Injectable } from '@angular/core';
import { Score } from '../models/score.interface';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  public scoreList: Score[] = [ { id: "1", nickname: "Name1", score: 100 }, { id: "2", nickname: "Name2", score: 200 },
    { id: "3", nickname: "Name1", score: 100 }, { id: "4", nickname: "Name4", score: 200 },
    { id: "5", nickname: "Name1", score: 100 }, { id: "6", nickname: "Name6", score: 200 },
    { id: "7", nickname: "Name1", score: 100 }, { id: "8", nickname: "Name8", score: 200 },
    { id: "9", nickname: "Name1", score: 100 }, { id: "10", nickname: "NameX", score: 200 },
  ];

  public totalScore: number = 0;

  constructor() { }

  public updateScore(id: string, score: number): void { 
    const elem = this.scoreList.find((item) => item.id === id);
    if (elem) {
      elem.score = score;
      this.recalcTotalScore();
    }
  }

  public recalcTotalScore(): void {
    this.totalScore = this.scoreList.reduce((acc, cur) => acc = acc + cur.score, 0);
    console.log(this.totalScore);
  }
}
