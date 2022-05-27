import { Component, Input, OnInit } from '@angular/core';
import {  FormControl ,FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AxelService} from 'src/app/axel.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  url:string='';
  selectImage:any;
  user: any;
  a:any;

Form=new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    phone:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
    mapAddressLink:new FormControl(''),
    username:new FormControl(''),
    userpass:new FormControl(''),
    user_IsAdmin:new FormControl(''),
    type:new FormControl(''),
    user_status:new FormControl(''),
    user_role:new FormControl(''),

  })
  id: any;

  constructor(private axel:AxelService ,
    public router:Router ,public act:ActivatedRoute) { }

  ngOnInit(): void {
    this.Editprofile();
    //this.save();
  }
  selectFile(event:any){
    if(event.target.files && event.target.files[0]){
       var reader=new FileReader();
       reader.onload=(event:any)=>
       this.url=event.target.result;
       reader.readAsDataURL(event.target.files[0]);

         this.selectImage=event.target.files[0];

    }
  }


  Editprofile(){


var id=this.act.snapshot.paramMap.get('id')
const obj={
  "userId":id
}

// console.log (obj)
this.axel.viewuser(obj)
.subscribe((res:any)=>{
  this.user =res
console.log(this.user[0]);
this.Form.controls["fname"].setValue(this.user[0].user_Firstname);
this.Form.controls["lname"].setValue(this.user[0].user_Lastname);
this.Form.controls["phone"].setValue(this.user[0].user_Phone);
this.Form.controls["email"].setValue(this.user[0].user_Email);
this.Form.controls["address"].setValue(this.user[0].user_Address);
this.Form.controls["mapAddressLink"].setValue(this.user[0]. user_Mapaddresslink);
this.Form.controls["username"].setValue(this.user[0].user_Username);
this.Form.controls["userpass"].setValue(this.user[0].uE_Password);
this.Form.controls["user_IsAdmin"].setValue(this.user[0].user_IsAdmin);
this.Form.controls["type"].setValue(this.user[0].user_Type);
this.Form.controls["user_status"].setValue(this.user[0].user_Status);
this.Form.controls["user_role"].setValue(this.user[0].user_Role);

});

 }

 save(){
  var user=this.act.snapshot.paramMap.get('id')
   const obj={
    "action":"U",
    "user_Id":user,
    "user_Firstname":this.Form.value.fname,
    "user_Lastname": this.Form.value.lname,
    "user_Phone": this.Form.value.phone,
    "user_Email": this.Form.value.email,
    "user_Address": this.Form.value.address,
    "user_Mapaddresslink":this.Form.value.mapAddressLink,
    "user_Username": this.Form.value.username,
    "uE_Password": this.Form.value.userpass,
    "user_Profileimage":"",
    "user_Roleid": 102,
    "user_IsAdmin":this.Form.value.user_IsAdmin,
    "user_Type":this.Form.value.type,
    "user_Status": "u",
    "user_Created_Userid":1,
    "err_no": 0
 
  }
  this.axel.SaveUser(obj)
  .subscribe((res:any)=>{
    // console.log(res);


    if(res==1){
      alert('user updated successfully');
      //this.router.navigate(['admin']);
    }
    else {
      alert('already existed');
      // this.router.navigate(['login']);
    }

  });
  console.log(this.Form.value);
   alert('user updated successfully');

  }
  // get fname(): any {
  //   return this.Form.get('user_Firstname');
  // }


}
