import {Component, OnInit} from '@angular/core';
import {ILogin, ILoginToken} from "../../interfaces/i-login";
import {LoginService} from "../../services/login.service";
import {StorageService} from "../../services/storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import { FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError, throwError} from "rxjs";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  lastURL: string | null= null;
  defaultURL: string = "/dashboard";
  requiredForm: FormGroup;
  messageError: string = "";

  user: ILogin = {
    username: "",
    password: ""
  };

  constructor(private loginService: LoginService,
              private storageService: StorageService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private toastService: ToastService) {
    this.requiredForm = new FormGroup({
      username: new FormControl(this.user.username,[
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl(this.user.password,[
        Validators.required,
        Validators.minLength(5)
        ])
    })
  }

  private handleError(error: HttpErrorResponse){
      console.log(error.message);
      return throwError(() => new Error('Something Bad Happen'))
  }
  onLogin() {
    this.loginService.login(this.user)
      .subscribe(
        (response: ILoginToken) => {
          this.storageService.save('TOKEN', response.token);
          this.storageService.save('USERNAME', response.username);
          this.storageService.save('PHOTO_PROFILE', response.image)
          if (this.lastURL) {
            this.router.navigate([this.lastURL])
          } else {
            this.router.navigate([this.defaultURL])

          }

        },  error => {
          console.log(error.message);
          this.messageError = error.message;
          this.toastService.message = error.message;
          this.toastService.showToast = true;}
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
