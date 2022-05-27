import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ViewCustomersComponent,
    AddCustomersComponent,
    EditCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
