import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
      firstname     : ["", [Validators.required]],
      lastname      : ["", [Validators.required, Validators.minLength(5)]],
      email         : ["", [Validators.required, Validators.email]],
      create_account: [false, [Validators.requiredTrue]],
      password      : ["", [Validators.minLength(8)]],
    });
  }
}
