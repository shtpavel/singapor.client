import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {FormBuilder} from "angular2/common";
import {Control} from "angular2/common";
import {ControlGroup} from "angular2/common";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  selector: 'register-form',
  templateUrl: 'app/+register/components/register.component.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class RegisterComponent {
  public formGroup: ControlGroup;
  constructor() {
    this.formGroup = new ControlGroup({
      email: new Control(""),
    });
  }

  get formValue(){
    return JSON.stringify(this.formGroup.value,null,2);
  }

  doLogin(event){
    console.log(this.formGroup.value)
  }
}
