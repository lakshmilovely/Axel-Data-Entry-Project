import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AxelService } from 'src/app/axel.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  constructor( public axel:AxelService,public fb:FormBuilder,public router:Router) { }

  ngOnInit(): void {}
    addrole=this.fb.group({
      roleid:['',Validators.required],
      rolename:['',Validators.required],
      roletype:['',Validators.required],
      rolestatus:['',Validators.required],
      roleuniqueid:['',Validators.required],
    })

  SaveRoles(){
    const obj2={
      "action": "A",
      "role_Id": 0,
      "role_Name": this.addrole.value.rolename,
      "role_Type": this.addrole.value.roletype,
      "role_Uniqid": this.addrole.value.roleuniqueid,
      "role_Status": this.addrole.value.rolestatus,
      "role_Created_UserId": 1,
    }
    this.axel.SaveRole(obj2)
    .subscribe(res=>{
      console.log(res)
      if(res==1){
        alert('new role added');
         this.router.navigate(['admin']);
      }
       else if(res==2){
        alert('Role already added');
        this.router.navigate(['admin']);
      }
      else{
      alert('role not added');
      }
    });
  }
}


