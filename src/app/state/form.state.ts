import { State } from "@ngxs/store";

export interface FormStateModel {
  accountForm: {
    firstname: string;
    lastname: string;
    create_account: boolean;
    email: string;
    password: string;
  };
}

@State<FormStateModel>({
  name    : "forms",
  defaults: {
    accountForm: {
      firstname     : "",
      lastname      : "",
      create_account: false,
      email         : "",
      password      : "",
    }
  }
})
export class FormState {

}
