import {Injectable, TemplateRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public showToast: boolean = false;
  public message: string = "";

  constructor() {
  }
}
