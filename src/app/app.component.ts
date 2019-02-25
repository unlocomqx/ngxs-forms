import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector   : "app-root",
  templateUrl: "./app.component.html",
  styleUrls  : ["./app.component.scss"],
})
export class AppComponent {
  pizzaForm = this.formBuilder.group({
    toppings: ""
  });

  constructor (private formBuilder: FormBuilder) {

  }
}
