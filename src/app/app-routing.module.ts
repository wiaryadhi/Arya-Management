import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {LoginPageComponent} from "./pages/login-page/login-page.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: '', redirectTo: 'login', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
