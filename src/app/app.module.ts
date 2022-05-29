import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingComponent } from './wedding/wedding.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageantComponent } from './pageant/pageant.component';
import { PartyComponent } from './party/party.component';
import { Sweet16Component } from './sweet16/sweet16.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WeddingComponent,
    WelcomeComponent,
    PageantComponent,
    PartyComponent,
    Sweet16Component,
    ContactComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
