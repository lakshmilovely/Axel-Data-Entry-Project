import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { AdminComponent } from './admin.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RolesComponent } from './roles/roles.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminGuard } from 'src/app/admin.guard';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [{ path: '', component: AdminComponent},

                        {path:'user-list',component:UserListComponent,canActivate:[AdminGuard]},
                        {path:'user-create',component:UserCreateComponent,canActivate:[AdminGuard]},
                        {path:'roles',component:RolesComponent,canActivate:[AdminGuard]},
                        {path:'add-role',component:AddRoleComponent,canActivate:[AdminGuard]},
                        {path:'edit-profile/:id',component:EditProfileComponent}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
