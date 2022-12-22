import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as path from "path";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {ProductListComponent} from "./pages/product-list/product-list.component";
import {UserListComponent} from "./pages/user-list/user-list.component";
import {PageQrgenComponent} from "./pages/page-qrgen/page-qrgen.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},

  {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuardService]},
  {path: 'qrgenerator', component: PageQrgenComponent, canActivate: [AuthGuardService]},
  {path: 'product', component: ProductListComponent, canActivate: [AuthGuardService]},
  {path: 'user', component: UserListComponent, canActivate: [AuthGuardService]},

  {path: '', redirectTo: 'login', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
