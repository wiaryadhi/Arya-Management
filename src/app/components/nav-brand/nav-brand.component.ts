import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-brand',
  templateUrl: './nav-brand.component.html',
  styleUrls: ['./nav-brand.component.css']
})
export class NavBrandComponent {
  constructor(private loginService: LoginService,
              private router: Router) {

  }

  onLogout(){
    this.loginService.logOut();
    this.router.navigate(['/login']);

  }

  isLogin(){
    return this.loginService.isUserLoggedIn();
  }

}
