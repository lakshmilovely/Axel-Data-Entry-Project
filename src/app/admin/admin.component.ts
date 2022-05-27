import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( public router:Router) { }
public vary=localStorage.getItem('role')
  ngOnInit(): void {}
  logout(){
    localStorage.clear();
    this.router.navigate (['login'])
  }

  }


