import {Component, OnInit} from '@angular/core';
import {ILogin, ILoginToken} from "../../interfaces/i-login";
import {LoginService} from "../../services/login.service";
import {StorageService} from "../../services/storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  lastURL: string | null= null;
  defaultURL: string = "login";
  user: ILogin = {
    username: "",
    password: ""
  };

  constructor(private loginService: LoginService,
              private storageService: StorageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  onLogin() {
    this.loginService.login(this.user)
      .subscribe(
        (response: ILoginToken) => {
          this.storageService.save('TOKEN', response.token);
          this.storageService.save('USERNAME', response.username);
          this.storageService.save('PHOTO_PROFILE', response.image)
          if (this.lastURL){
            this.router.navigate([this.lastURL])
          } else {
            this.router.navigate([this.defaultURL])
          }
        }
      )
  }
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(
      params => {
        this.lastURL = params.get('lastURL')
      }
    )
  }
}
