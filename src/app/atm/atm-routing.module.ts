
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmComponent } from './atm.component'
import { DepositComponent }    from './deposit/deposit.component';
import { FastcashComponent }  from './fastcash/fastcash.component';
import { MainComponent }  from './main/main.component';
import { PinComponent }  from './pin/pin.component';
import { TransactionsComponent }  from './transactions/transactions.component';
import { TransferComponent }  from './transfer/transfer.component';
import { WithdrawComponent }  from './withdraw/withdraw.component';

const Routes: Routes = [
  { path: '', component: AtmComponent, children: 
    [
      { path: 'deposit',  component: DepositComponent },
      { path: 'fastcash', component: FastcashComponent },
      { path: 'main',  component: MainComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full'},
      { path: 'pin', component: PinComponent },
      { path: 'transactions',  component: TransactionsComponent },
      { path: 'transfer', component: TransferComponent },
      { path: 'withdraw',  component: WithdrawComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AtmRoutingModule { }