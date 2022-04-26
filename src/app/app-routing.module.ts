import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PageantComponent } from './pageant/pageant.component';
import { PartyComponent } from './party/party.component';
import { Sweet16Component } from './sweet16/sweet16.component';
import { WeddingComponent } from './wedding/wedding.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'wedding', component: WeddingComponent },
  { path: 'pageant', component: PageantComponent },
  { path: 'sweet16', component: Sweet16Component },
  { path: 'party', component: PartyComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
