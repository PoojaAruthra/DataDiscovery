import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../Interfaces/team';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamUrl = 'http://127.0.0.1:8000/api/teams/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getTeams(): Observable<Team[]>{
    return this.http.get<Team[]>(this.teamUrl);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(this.teamUrl + id + '/' , data);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.teamUrl, data);
  }


  delete(id: string): Observable<any> {
    return this.http.delete(this.teamUrl + id + '/');
  }
}
