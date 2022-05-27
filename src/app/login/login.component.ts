import { Component, OnInit } from '@angular/core';
import { AxelService } from '../axel.service';
import {FormBuilder } from '@angular/forms';
import { loginmodel } from 'src/model/info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: any;
  a: any;
  res: any;

constructor(public axel:AxelService , public fb:FormBuilder,public router:Router)  {}
  ngOnInit(): void {
    // this.login();

  }
  form=this.fb.group({
    username:[''],
    password:[''],
     })
    login() {
      const loginModel = new loginmodel(this.form.controls['username'].value,
                                          this.form.controls['password'].value);
      this.axel
        .login(loginModel)
        .subscribe((res: any)=>{
          console.log(res)
          if(res=='')
          {
            //alert("Login Failed");
          }
          else
          {
            alert("Login Sucessful");
            this.userId=res[0].userId;
             console.log(this.userId);
           this.getUserById(this.userId);
          this.form.reset();
          this.router.navigate(['admin']);
          }
        });

        localStorage.setItem('role',this.form.controls['username'].value)
    }

        getUserById(input:any)
        {
          const obj={
            "userId": input
          }
          this.axel.getUserbyId(obj).subscribe((res:any)=>{
            console.log(res);

          });
        }


      }


