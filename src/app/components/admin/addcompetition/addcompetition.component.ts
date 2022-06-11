import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddPostService} from "../../../services/add-post.service";
import {Router} from "@angular/router";
import {AddCompetitionService} from "../../../services/add-competition.service";

@Component({
  selector: 'app-addcompetition',
  templateUrl: './addcompetition.component.html',
  styleUrls: ['./addcompetition.component.css']
})
export class AddcompetitionComponent implements OnInit {
  form!: FormGroup;
  constructor(private AddCompetition: AddCompetitionService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      text: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.router.navigate(['/calendar']);
    this.AddCompetition.getAllDefault();
    this.AddCompetition.addCompetition(this.form.value).subscribe((response: any) => {
      console.log(response);
    });
  }
}
