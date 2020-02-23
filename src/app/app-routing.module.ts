import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtmComponent } from './atm/atm.component';
import { MainComponent } from './atm/main/main.component';
import { TellerComponent } from './teller/teller.component';
import { ContactComponent } from './contact/contact.component';
import { StartPageComponent } from './start-page/start-page.component'

const routes: Routes = [
  { path: 'atm', loadChildren: () => import(`./atm/atm.module`).then(m => m.AtmModule) },
  { path: 'teller', component: TellerComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: StartPageComponent },
  { path: '', component: StartPageComponent },
  { path: 'atm/main', component: MainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
