import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as path from "path";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {ProductListComponent} from "./pages/product-list/product-list.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuardService]},
  {path: 'product', component: ProductListComponent, canActivate: [AuthGuardService]},
  {path: '', redirectTo: 'landing', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
