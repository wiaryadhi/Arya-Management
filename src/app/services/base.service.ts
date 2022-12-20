import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILogin, ILoginToken} from "../interfaces/i-login";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseURL: string = "https://dummyjson.com"
  constructor() { }

}
