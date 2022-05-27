import { Component, OnInit } from '@angular/core';
import { AxelService } from 'src/app/axel.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  rolelist: any;
  p: number = 1;
  constructor(public axel:AxelService) { }

  ngOnInit(): void {
    this.GetRoles();
  }
  GetRoles(){
  const obj3={
    "expression": "",
  "sortby": "",
  "rowno": 0
  }
  this.axel.GetRoles(obj3).subscribe((res:any)=>{
    console.log(res);
    this.rolelist=res;

   });
  }
}
