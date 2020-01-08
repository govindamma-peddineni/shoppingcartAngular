import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {
@ViewChild('userform') signupform: NgForm;
answer = '';
genders = ['Male', 'Female'];
user = {
  username: '',
  email: '',
  secretQuestion: '',
  answer: '',
  gender: ''
};
submitted = false;
  constructor() { }

  ngOnInit() {
  }
suggestUsername() {
  const suggestedName = 'Superuser';
  /// below one byusing setvalue we are overriding form values
// this.signupform.setValue({
// userdata1: {
//   username: suggestedName,
//   email: ''
// },
// secret: 'pet',
// questionAnswer: '',
// gen: 'Male'
// });
// }
this.signupform.form.patchValue({
userdata: {
  username: suggestedName
}
 });

}
onSubmit() {
  this.submitted = true;
  // console.log(this.signupform);
  this.user.username = this.signupform.value.userdata.username;
  this.user.email = this.signupform.value.userdata.email;
  this.user.secretQuestion = this.signupform.value.secret;
  this.user.answer = this.signupform.value.questionAnswer;
  this.user.gender = this.signupform.value.gender;
  /// if we want to empty all the fileds after submit
  this.signupform.reset();
}
// onSubmit(userForm: NgForm) {
//   console.log(userForm);
//  // console.log(userForm.value);
//   // console.log('UserName: ' + userForm.controls['username'].value);
// }
}
