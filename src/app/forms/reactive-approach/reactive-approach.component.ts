import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { promise } from 'protractor';


@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {
  genders = ['Male', 'Female'];
  signupform: FormGroup;
  forbiddenusernames: ['Sanjana', 'Jeevan'];
  constructor() { }

  ngOnInit() {
     this.signupform = new FormGroup({
      'userdata': new FormGroup({
      'username': new FormControl(null, Validators.required, this.forbiddenNames.bind(this) ),
      'email': new FormControl(null, [Validators.required, Validators.email],
      this.forbiddenEmails)
      }),
       'gender': new FormControl('female')
      });
      // Reacting to value change in the form
      this.signupform.valueChanges.subscribe(
    (value) => console.log(value)
      );
      // Reacting to status change in the form
      this.signupform.statusChanges.subscribe(
        (status) => console.log(status)
          );
          // here statuschange and valuechange are observables so we need to subscribe them.
          // we can add these observables to individual controls also.
          // setvalue and patchvalue in reactive approach.
          this.signupform.setValue({
'userData': {
  'username': 'sanjana',
  'email': 'sanjan@123.com'
},
'gender': 'female'
          });
           // patchvalue in reactive approach.
           this.signupform.patchValue({
            'userData': {
              'username': 'sunil'
            }
          });
    }
  onSubmit() {
console.log(this.signupform);
// to clae all the controls in the form after submit
this.signupform.reset();
  }
  // custome validator
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
if (this.forbiddenusernames.indexOf(control.value) !== -1) {
  return {'nameIsForbidden': true};
}
return null;

  }
  // by using custom Async validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const Promise = <any>((resolve, reject) => {
     setTimeout(() => {
if ( control.value === 'test@test.com') {
  resolve({'emailIsForbidden': true});
} else {
  resolve(null);
}
     }, 1500);
    });
    return Promise;
  }
}
