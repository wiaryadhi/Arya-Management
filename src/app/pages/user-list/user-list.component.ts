import {Component, OnInit} from '@angular/core';
import {IUser, IUserWrapper} from "../../interfaces/i-user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users: Array<IUser> = [];
  user: IUser = {} as IUser;
  showMore: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.onAll()
  }

  onAll(): void {
    this.userService.all().subscribe(
      (response:IUserWrapper) => {
        this.users = response.users;
      }
    )

  }

}
