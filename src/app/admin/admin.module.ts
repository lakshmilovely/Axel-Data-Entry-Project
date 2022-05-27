import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { UserCreateComponent } from './user-create/user-create.component';
import { RolesComponent } from './roles/roles.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchfilterPipe } from './searchfilter.pipe';
import { SortDirective } from './sort.directive';

@NgModule({
  declarations: [
    AdminComponent,
  
    UserCreateComponent,
    RolesComponent,
    UserListComponent,
    AddRoleComponent,
    EditProfileComponent,
    SearchfilterPipe,
    SortDirective,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class AdminModule { }
