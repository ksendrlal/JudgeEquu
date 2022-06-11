import { Component, OnInit } from '@angular/core';
import {RiderStateService} from "../../services/rider-state.service";
import {JudgeStateService} from "../../services/judge-state.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public riderService: RiderStateService,
    public judgeService: JudgeStateService
  ) { }

  ngOnInit(): void {
  }


}
