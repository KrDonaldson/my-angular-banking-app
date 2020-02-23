import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TellerComponent } from './teller/teller.component';
import { ContactComponent } from './contact/contact.component';
import { StartPageComponent } from './start-page/start-page.component'

const routes: Routes = [
  { path: 'atm', loadChildren: () => import('./atm/atm.module').then(m => m.AtmModule) },
  { path: 'teller', component: TellerComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: StartPageComponent },
  { path: '', component: StartPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
