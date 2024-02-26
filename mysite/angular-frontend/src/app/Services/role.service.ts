import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../Interfaces/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private roleUrl = 'http://127.0.0.1:8000/api/roles/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }


  getRoles(): Observable<Role[]>{
    return this.http.get<any[]>(this.roleUrl);
  }

  update(id: String, data: any): Observable<any> {
    return this.http.put(this.roleUrl + id + '/' , data);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.roleUrl, data);
  }


  delete(id: any): Observable<any> {
    return this.http.delete(this.roleUrl + id + '/');
  }

}
