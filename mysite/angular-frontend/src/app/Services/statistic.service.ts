import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statistic } from '../Interfaces/statistic';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  private statisticUrl = '/api/stats/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  get(id: String): Observable<Statistic>{
    return this.http.get<Statistic>(this.statisticUrl + id);
  }
}
