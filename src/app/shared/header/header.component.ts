import { Component, OnInit } from '@angular/core';
import {RiderStateService} from "../../services/rider-state.service";
import {JudgeStateService} from "../../services/judge-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public riderService: RiderStateService,
              public judgeService: JudgeStateService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogOut() {
    this.riderService.logout();
    this.router.navigate(['/']);
  }

}
