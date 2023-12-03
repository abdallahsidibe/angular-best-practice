import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from "./users/sign-in.component";
import { AccountMenuComponent } from "./account-menu.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {RegisterComponent} from "./users/register.component";
import {UserRepositoryService} from "./services/user-repository.service";
import {CatalogRepositoryService} from "./services/catalog-repository.service";
import {NavBarComponent} from "./nav-bar.component";
import {LoadingSpinnerComponent} from "./components/loading-spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CatalogComponent,
    RegisterComponent,
    SignInComponent,
    LoadingSpinnerComponent,
    AccountMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CatalogRepositoryService, UserRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
