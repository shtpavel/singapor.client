import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {FormBuilder} from "angular2/common";
import {Control} from "angular2/common";
import {ControlGroup} from "angular2/common";

@Component({
  selector: 'login-form',
  templateUrl: 'app/+login/components/login.component.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class LoginComponent {
  public formGroup: ControlGroup;
  constructor() {
    this.formGroup = new ControlGroup({
      email: new Control(""),
      password: new Control(""),
    });
  }

  get formValue(){
    return JSON.stringify(this.formGroup.value,null,2);
  }

  doLogin(event){
    console.log(this.formGroup.value)
  }
}
