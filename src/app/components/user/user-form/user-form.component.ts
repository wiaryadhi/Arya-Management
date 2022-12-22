import {Component, Input} from '@angular/core';
import {IUser} from "../../../interfaces/i-user";
import {UserService} from "../../../services/user.service";
import {ToastService} from "../../../services/toast.service";
import {IProduct} from "../../../interfaces/i-product";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  showMore: boolean = false;
  @Input() user: IUser = {} as IUser;
  isConfirmedDeleted: boolean = false;

  constructor(private userService: UserService,
              private toastService: ToastService) {
  }

  showToggle(): void {
    this.showMore = !this.showMore;
  }

  cancel(){
    this.user = {} as IUser;
    this.showMore = false;
  }

  setUser(user: IUser) {
    this.user = JSON.parse(JSON.stringify(user))
  }

  onCreate() {
    this.userService.create(this.user)
      .subscribe((
        response: IUser
      )=> {
        this.showMore = false;
        this.user = {} as IUser;
        this.toastService.showToast = true;
        this.toastService.message = `Berhasil menyimpan data ${response.firstName}`
  });

  }

  onUpdate() {
    this.userService.update(this.user)
      .subscribe(
        (response: IUser) => {
          this.showMore = false;
          this.user = {} as IUser;
          this.toastService.showToast = true;
          this.toastService.message = `Berhasil merubah data ${response.firstName} dengan id ${response.id}`
        }
      );

  }

  onDelete(){
    this.userService.update(this.user)
      .subscribe(
        (response: IUser) => {
          this.showMore = false;
          this.user = {} as IUser;
          this.toastService.showToast = true;
          this.toastService.message = `Berhasil menghapus data ${response.firstName} dengan id ${response.id}`
          this.user.isDeleted = true;
          this.isConfirmedDeleted = false;
        }
      );
  }

}
