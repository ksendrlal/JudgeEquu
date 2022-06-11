import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models/post.model";
import {Competition} from "../../../models/competition.model";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-competition',
  templateUrl: './card-competition.component.html',
  styleUrls: ['./card-competition.component.css']
})
export class CardCompetitionComponent implements OnInit {

  @Input() item: any;
  closeResult: any;
  competitions: Competition[] = [];

  constructor(private modalService: NgbModal,
              private router: Router) { }
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
  ngOnInit(): void {
  }

}
