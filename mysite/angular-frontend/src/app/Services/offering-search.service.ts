import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Offering } from '../Interfaces/offering';

@Injectable({
  providedIn: 'root'
})
export class OfferingSearchService {

  private offeringUrl = 'http://127.0.0.1:8000/api/services/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getSearch(term: String): Observable<any> {
    return this.http.get<Offering[]>(this.offeringUrl + '?search=' + term);
  }
}
