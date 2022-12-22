import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavBrandComponent } from './components/nav-brand/nav-brand.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ToastGlobalComponent } from './components/toast-global/toast-global.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { QRCodeModule} from "angular2-qrcode";
import { PageQrgenComponent } from './pages/page-qrgen/page-qrgen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavBrandComponent,
    DashboardPageComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductFormComponent,
    ToastGlobalComponent,
    UserListComponent,
    UserFormComponent,
    PageQrgenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
