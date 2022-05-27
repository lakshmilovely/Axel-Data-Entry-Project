import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AxelService } from 'src/app/axel.service';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 public data:any;
searchText: string ='';
del: any;
  user: any;
constructor( public axel:AxelService, public act:ActivatedRoute ) { }
ngOnInit(): void {
    this.  viewuser();
    //  this.delete(id);
  }
  viewuser()
 {
   const obj={
     "userId":0
   }
   this.axel.getUserbyId(obj).subscribe((res:any)=>{
    //  console.log(res);
     this.data=res;
     console.log(this.data);

   });
}
 delete(id:any)
 {
var user=this.act.snapshot.paramMap.get('id')
const obj={
  "action": "D",
  "user_Id":user,
  "user_Firstname": "",
  "user_Lastname": "",
  "user_Phone": "",
  "user_Email": "",
  "user_Address": "",
  "user_Mapaddresslink": "",
  "user_Username": "",
  "uE_Password": "",
  "user_Profileimage": "",
  "user_Roleid": 0,
  "user_IsAdmin": "N",
  "user_Type": "U",
  "user_Status": "D",
  "user_Created_Userid": 1,
  "err_no": 0
}
console.log(obj);
this.axel.SaveUser(obj).subscribe((res:any)=>{
//console.log(res);
this.del=res
if(this.del){
  alert('U want to delete');
  // this.user.getUserbyId(user);
  console.log(this.user[0].value)
}
})

}
}
