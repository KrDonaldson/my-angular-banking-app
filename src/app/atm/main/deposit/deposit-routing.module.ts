import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositCashComponent } from './deposit-cash/deposit-cash.component';
import { DepositCheckComponent } from './deposit-check/deposit-check.component';
import { DepositComponent } from './deposit.component';

const routes: Routes = [
  { path: 'deposit', loadChildren: () => import('./deposit.module').then(m => m.DepositModule) },
  { path: 'depositcash', component: DepositCashComponent},
  { path: 'depositcheck', component: DepositCheckComponent },
  { path: '', component: DepositComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DepositRoutingModule { }
