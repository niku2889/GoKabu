import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { routing } from "./app.routing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.cmp';
import { HeaderComponent } from './common/header/header.cmp';
import { FooterComponent } from './common/footer/footer.cmp';
import { LoginComponent } from './common/login/login.cmp';
import { RegisterComponent } from './common/register/register.cmp';

@NgModule({
  declarations: [
      AppComponent, HomeComponent, HeaderComponent, FooterComponent, LoginComponent, RegisterComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing,
      RouterModule,
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
