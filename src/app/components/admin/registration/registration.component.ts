import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;

  registrationSwitcherValue: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl ('', [Validators.required, Validators.minLength(2)]),
      surname: new FormControl ('', [Validators.required, Validators.minLength(2)]),
      patronymic: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      category: new FormControl('', [Validators.required]),
      dateofbirth: new FormControl ('', Validators.required),
      login: new FormControl(this.generateLogin(6)),
      password: new FormControl (this.generatePassword(6))
    });
  }

  onSubmit() {
    if(this.registrationSwitcherValue === false) {
      this.authService.registerRider(this.form.value).subscribe(response => {
      console.log(response);
    });
    }
    else {
      this.authService.registerJudge(this.form.value).subscribe(response => {
        console.log(response);
      })
    }
  }

  execRiderRegistration(): void {
    this.registrationSwitcherValue = false;
  }

  execJudgeRegistration(): void {
    this.registrationSwitcherValue = true;
  }

  generatePassword(passwordLength: any) {
    var numberChars = "0123456789";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var allChars = numberChars + upperChars + lowerChars;
    var randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray = randPasswordArray.fill(allChars, 3);
    return this.shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }

  generateLogin(loginLength: any) {
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var allChars = upperChars + lowerChars;
    var randPasswordArray = Array(loginLength);
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray = randPasswordArray.fill(allChars, 3);
    return this.shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }

  shuffleArray(array: string[]) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
