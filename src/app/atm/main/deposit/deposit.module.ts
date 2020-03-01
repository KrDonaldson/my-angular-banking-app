import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositRoutingModule } from './deposit-routing.module'
import { DepositCashComponent }    from './deposit-cash/deposit-cash.component';
import { DepositCheckComponent }  from './deposit-check/Deposit-check.component';

@NgModule({
  declarations: [
    DepositCashComponent,
    DepositCheckComponent
  ],
  imports: [
    CommonModule,
    DepositRoutingModule
  ]
})
export class DepositModule { }
