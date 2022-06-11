import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {Router} from "@angular/router";
import {Post} from "../../models/post.model";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  closeResult: any;

  posts: Post[] = [];
  constructor(
    private router: Router,
    public searchService: SearchService,
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
