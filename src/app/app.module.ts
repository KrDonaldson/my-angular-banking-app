import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TellerComponent } from './teller/teller.component';
import { AtmComponent } from './atm/atm.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ContactComponent } from './contact/contact.component';

import { BankService } from './service/bank.service';
import { PinComponent } from './atm/pin/pin.component';
import { FastcashComponent } from './atm/fastcash/fastcash.component';
import { TransferComponent } from './atm/transfer/transfer.component';
import { DepositComponent } from './atm/deposit/deposit.component';
import { WithdrawComponent } from './atm/withdraw/withdraw.component';
import { TransactionsComponent } from './atm/transactions/transactions.component';
import { MainComponent } from './atm/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TellerComponent,
    AtmComponent,
    StartPageComponent,
    ContactComponent,
    PinComponent,
    FastcashComponent,
    TransferComponent,
    DepositComponent,
    WithdrawComponent,
    TransactionsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
