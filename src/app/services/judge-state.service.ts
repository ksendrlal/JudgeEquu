import {Injectable} from "@angular/core";
import {Judge} from "../models/judge.model";

@Injectable({
  providedIn: "root"
})

export class JudgeStateService {
  judge!: Judge;

  constructor() {
  }

  setJudge (judge: Judge): void {
    window.localStorage.setItem('user', JSON.stringify(judge));
    this.judge = judge;
  }

  fetch(): void {
    const judge = localStorage.getItem('user');
    if (judge) {
      // @ts-ignore
      this.judge= new Judge().build(JSON.parse(judge));
    }
  }

  logout(): void {
    window.localStorage.removeItem('judge');
    let judge = null;
  }

  public isAuth(): boolean {
    return this.judge != null;
  }
}
