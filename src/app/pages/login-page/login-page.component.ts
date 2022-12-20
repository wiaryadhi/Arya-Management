import {Component} from '@angular/core';
import {ILogin, ILoginToken} from "../../interfaces/i-login";
import {LoginService} from "../../services/login.service";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  user: ILogin = {
    username: "",
    password: ""
  };

  constructor(private loginService: LoginService, private storageService: StorageService,
              private router: Router) {
  }

  onLogin() {
    this.loginService.login(this.user)
      .subscribe(
        (response: ILoginToken) => {
          this.storageService.save('TOKEN', response.token);
          this.storageService.save('USERNAME', response.username);
          this.storageService.save('PHOTO_PROFILE', response.image)
          this.router.navigate(['dashboard']);
        }
      )
  }
}
