import { Injectable } from '@angular/core';
import {ILogin, ILoginToken} from "../interfaces/i-login";
import {Observable} from "rxjs";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  endpoint: string = "/auth/login"

  constructor(private baseService: BaseService,
              private httpClient: HttpClient) { }

  login(loginUser: ILogin): Observable<ILoginToken>{
    let body = JSON.stringify(loginUser);
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.httpClient.post<ILoginToken>(
      `${this.baseService.baseURL}${this.endpoint}`,
      body, {headers}
    )
  }
}
