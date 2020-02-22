
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepositComponent }    from './deposit/deposit.component';
import { FastcashComponent }  from './fastcash/fastcash.component';
import { MainComponent }  from './main/main.component';
import { PinComponent }  from './pin/pin.component';
import { TransactionsComponent }  from './transactions/transactions.component';
import { TransferComponent }  from './transfer/transfer.component';
import { WithdrawComponent }  from './withdraw/withdraw.component';

const secondaryRoutes: Routes = [
  { path: 'deposit',  component: DepositComponent },
  { path: 'fastcash', component: FastcashComponent },
  { path: 'main',  component: MainComponent },
  { path: 'pin', component: PinComponent },
  { path: 'transactions',  component: TransactionsComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'withdraw',  component: WithdrawComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(secondaryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SecondaryRoutingModule { }