import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AxelService } from 'src/app/axel.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
url:string='';
selectImage:any;
  constructor(public axel:AxelService,public fb:FormBuilder,public router:Router) { }

  ngOnInit(): void {
  }
  Form=this.fb.group({
    fname:['', Validators.required,"^[a-zA-Z ]+$"],
    lname:['',Validators.required,"^[a-zA-Z ]+$"],
    phone:['',Validators.required],
    email:['',Validators.required],
    address:['',Validators.required],
    mapAddressLink:['',Validators.required],
    username:['',Validators.required],
    userpass:['',Validators.required],
    user_IsAdmin:['',Validators.required],
    type:['',Validators.required],
    user_status:['',Validators.required],
    user_role:['',Validators.required],

  })

  selectFile(event:any){
    if(event.target.files && event.target.files[0]){
       var reader=new FileReader();
       reader.onload=(event:any)=>
       this.url=event.target.result;
       reader.readAsDataURL(event.target.files[0]);

         this.selectImage=event.target.files[0];

    }
  }
  SaveUser(){
  const obj={
    "action": "A",
    "user_Id": 0,
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
    "user_Status": "Y",
    "user_Created_Userid":1,
    "err_no": 0

  }
  this.axel.SaveUser(obj)
  .subscribe((res:any)=>{
    console.log(res);
    if(res==1){
      alert('new user added successfully');
      this.router.navigate(['admin']);
    }
    else {
      alert('already existed');
      // this.router.navigate(['login']);
    }

  });

  }





}
