import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { AtmRoutingModule } from './atm-routing.module'
import { DepositComponent }    from './deposit/deposit.component';
import { FastcashComponent }  from './fastcash/fastcash.component';
import { MainComponent }  from './main/main.component';
import { PinComponent }  from './pin/pin.component';
import { TransactionsComponent }  from './transactions/transactions.component';
import { TransferComponent }  from './transfer/transfer.component';
import { WithdrawComponent }  from './withdraw/withdraw.component';
import { DepositCheckComponent } from './deposit/deposit-check/deposit-check.component';
import { DepositCashComponent } from './deposit/deposit-cash/deposit-cash.component';
// import { DatePipeComponent }  from '../date/date.component';

@NgModule({
  declarations: [
    DepositComponent,
    FastcashComponent,
    MainComponent,
    PinComponent,
    TransactionsComponent,
    TransferComponent,
    WithdrawComponent,
    DepositCheckComponent,
    DepositCashComponent,
    // DatePipeComponent,
  ],
  imports: [
    CommonModule,
    AtmRoutingModule
  ]
})
export class AtmModule { }
