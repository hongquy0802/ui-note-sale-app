import { Injectable } from '@angular/core';

@Injectable()
export class UIService {

  constructor() { }

  public static fireValidateForm(controller: any, fn?: Function) {
    Object.keys(controller.controls).forEach(ctrl => {
      const subController = controller.get(ctrl);
      if (subController.hasOwnProperty('controls')) {
        this.fireValidateForm(subController);
      } else {
        if (fn) {
          fn(subController);
        } else {
          subController.markAsTouched({ onlySelf: true});
        }
      }
    })
  }

  public static resetFormValidator(controller: any) {
    controller.markAsTouched();
    controller.markAsPristine();
  }
}
