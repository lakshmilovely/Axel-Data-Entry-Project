import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginmodel } from 'src/model/info';
import { Observable } from 'rxjs';
const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json;charset=utf-8'
  }),
};
@Injectable({
  providedIn: 'root'
})
export class AxelService {
baseURL: string='http://saapi.azaz.com/api';
  constructor( public http:HttpClient) { }
login(model:loginmodel){
  const headersValue = {
    headers: new HttpHeaders({'Content-Type':'application/json'}),
  };
  return this.http.post(this.baseURL+'/login',model,headersValue);
}


getUserbyId(obj: any) {
  return this.http.post(
    this.baseURL+'/UserDetails/GetUserbyId',
    JSON.stringify(obj),
    headersData
  );
}
SaveUser(obj:any){
  return this.http.post(this.baseURL+'/UserDetails/SaveUser',JSON.stringify(obj),headersData);
}
viewuser(obj1:any){
  return this.http.post(this.baseURL+'/UserDetails/GetUserbyId',JSON.stringify(obj1),headersData);
}
SaveRole(obj2:any){
  return this.http.post(this.baseURL+'/Roles/SaveRoles',JSON.stringify(obj2),headersData);
}
GetRoles(obj3:any){
  return this.http.post(this.baseURL+'/Roles/GetRoles',JSON.stringify(obj3),headersData);
}
Editprofile(obj4:any){
  return this.http.post(this.baseURL+'/UserDetails/GetUserbyId',JSON.stringify(obj4),headersData);
}
delete(obj5:any){
  return this.http.post(this.baseURL+'UserDetails/GetUserbyId',JSON.stringify(obj5),headersData);

}
}
