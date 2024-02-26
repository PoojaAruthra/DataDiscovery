import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offering } from '../Interfaces/offering';

@Injectable({
  providedIn: 'root'
})
export class OfferingService {
  private offeringUrl = 'http://127.0.0.1:8000/api/services/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getOfferings(): Observable<Offering[]>{
    return this.http.get<Offering[]>(this.offeringUrl);
  }

  searchOfferings(search: string): Observable<Offering[]>{
    return this.http.get<Offering[]>(this.offeringUrl + '?search=' + search);
  }

  get(id: string): Observable<any> {
    return this.http.get<Offering[]>(this.offeringUrl + id);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.offeringUrl, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(this.offeringUrl + id + '/', data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(this.offeringUrl + id + '/');
  }
}
