import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormStateModel } from "./state/form.state";

@Component({
  selector   : "app-root",
  templateUrl: "./app.component.html",
  styleUrls  : ["./app.component.scss"],
})
export class AppComponent {
  accountForm: FormGroup;

  constructor (private formBuilder: FormBuilder) {
    this.setupForm();
  }

  private setupForm () {
    this.accountForm = this.formBuilder.group({
      firstname     : [""],
      lastname      : [""],
      email         : [""],
      create_account: [false],
      password      : [""],
    });
  }
}
