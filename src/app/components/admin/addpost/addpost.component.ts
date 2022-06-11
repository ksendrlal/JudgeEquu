import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AddPostService} from "../../../services/add-post.service";

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  form!: FormGroup;
  constructor(private AddPost: AddPostService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      text: new FormControl(null, [Validators.required])
    });
  }
  onSubmit() {
    this.router.navigate(['/news']);
    this.AddPost.getAllDefault();
    this.AddPost.addPost(this.form.value).subscribe((response: any) => {
      console.log(response);
    });
  }

}
