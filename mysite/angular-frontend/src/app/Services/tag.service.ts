import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../Interfaces/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private tagUrl = 'http://127.0.0.1:8000/api/tags/';

  constructor(
    private http: HttpClient
  ) {
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<any[]>(this.tagUrl);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(this.tagUrl + id + '/', data);
  }

  create(data: any): Observable<any> {
    delete data.id;
    return this.http.post(this.tagUrl, data);
  }


  delete(id: any): Observable<any> {
    return this.http.delete(this.tagUrl + id + '/');
  }
}
