import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
                        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) ,canActivate:[AuthGuard]},

                        { path: 'leads', loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule) },
                        { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
                        { path: 'contract', loadChildren: () => import('./contract/contract.module').then(m => m.ContractModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
