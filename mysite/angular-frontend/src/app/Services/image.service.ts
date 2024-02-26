import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imageUploadUrl = '/api/image/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  
  constructor(
    private http: HttpClient
  ) { }

  postImage(imageFile: File, offeringID:string, offeringType:string): Observable<any>{
    let formData:FormData = new FormData();
    formData.append('id', offeringID);
    formData.append('type', offeringType)
    formData.append('image', imageFile);
    return this.http.post(this.imageUploadUrl, formData);
  }
}
