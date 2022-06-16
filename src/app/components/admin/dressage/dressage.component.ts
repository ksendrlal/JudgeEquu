import {Component, Input, OnInit} from '@angular/core';
import {NumKPStateService} from "../../../services/num-k-p-state.service";
import {NumKP} from "../../../models/num-k-p.model";

@Component({
  selector: 'app-dressage',
  templateUrl: './dressage.component.html',
  styleUrls: ['./dressage.component.css']
})
export class DressageComponent implements OnInit {

  @Input() item: any;
  numKPs: NumKP[] = [];

  constructor( public numKP: NumKPStateService) { }

  ngOnInit(): void {
    this.numKP.getAllDefault();
    console.log(this.numKP.numbersKP)
  }



}
