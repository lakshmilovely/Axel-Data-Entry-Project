import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { ViewContractComponent } from './view-contract/view-contract.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { EditContractComponent } from './edit-contract/edit-contract.component';


@NgModule({
  declarations: [
    ContractComponent,
    ViewContractComponent,
    AddContractComponent,
    EditContractComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule
  ]
})
export class ContractModule { }
