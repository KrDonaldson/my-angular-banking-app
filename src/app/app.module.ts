import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TellerComponent } from './teller/teller.component';

import { AtmComponent } from './atm/atm.component';
import { AtmModule }     from './atm/atm.module';

import { StartPageComponent } from './start-page/start-page.component';
import { ContactComponent } from './contact/contact.component';

import { BankService } from './service/bank.service';



@NgModule({
  declarations: [
    AppComponent,
    TellerComponent,
    AtmComponent,
    StartPageComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtmModule
  ],
  providers: [BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
