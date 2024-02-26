import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  //private telemetryChartAPI = "https://telemeteryservices-dev.azurewebsites.net/api/DataReader/chartdata";
  private telemetryChartAPI = "https://usagestats.dainsights.public.siemens.com/api/DataReader/chartdata";
  
  constructor(private readonly http: HttpClient) { }

  postApiCall(body:any, serviceUrl:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    };
    return this.http.post<any>(serviceUrl, body, httpOptions);
  }

  getChartData(serviceId:string,startDate:any,endDate:any,windowSizeByWeek:any){
    return this.http.get(this.telemetryChartAPI+"?serviceId="+serviceId+"&sd="+startDate+"&ed="+endDate+"&week="+windowSizeByWeek);
  }
}

export const COLORPOOL: number[][] = [
  [255, 99, 132, 0.6],
  [54, 162, 235, 0.6],
  [255, 206, 86, 0.6],
  [75, 192, 192, 0.6],
  [151, 187, 205, 0.6],
  [247, 70, 74, 0.6],
  [174, 174, 29, 0.6],
  [253, 180, 92, 0.6],
  [189, 69, 37, 0.6],
  [77, 83, 96, 0.6],
  [14, 97, 219, 0.6],
  [118, 108, 91, 0.6],
  [49, 1, 87, 0.6],
  [226, 134, 66, 0.6],
  [16, 140, 198, 0.6],
  [13, 116, 119, 0.6],
  [246, 157, 2, 0.6],
  [50, 180, 40, 0.6],
  [212, 186, 22, 0.6],
  [125, 125, 63, 0.6],
  [148, 182, 161, 0.6],
  [21, 112, 22, 0.6],
  [91, 119, 151, 0.6],
  [299, 114, 191, 0.6],
  [127, 42, 98, 0.6]
]