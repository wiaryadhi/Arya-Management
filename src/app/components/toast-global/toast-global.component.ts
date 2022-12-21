import {Component, OnDestroy} from '@angular/core';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-toast-global',
  templateUrl: './toast-global.component.html',
  styleUrls: ['./toast-global.component.css']
})
export class ToastGlobalComponent implements OnDestroy {

  constructor(public toastService: ToastService) {
  }
 ngOnDestroy() {
 }
}
