import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post.model";
import {Router} from "@angular/router";
import {SearchService} from "../../services/search.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Competition} from "../../models/competition.model";
import {SeachCompService} from "../../services/seach-comp.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  closeResult: any;

  competitions: Competition[] = [];
  constructor(
    private router: Router,
    public searchService: SeachCompService,
    private modalService: NgbModal
  ) {}

  ngOnInit(){
    this.searchService.getAllDefault();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  };

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
