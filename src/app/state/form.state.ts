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

@State({
  name    : "forms",
  defaults: {
    accountForm: {
      model : undefined,
      dirty : false,
      status: "",
      errors: {}
    }
  }
})
export class FormState {

}
