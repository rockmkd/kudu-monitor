import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MetricService {

  private readonly API_URL = "localhost";

  constructor(private httpClient: HttpClient) { }

  public allMetric(): Observable<any> {
    return this.getHostList().pipe(
      switchMap( (hosts:string[]) => {
        console.log(hosts);
        return this.getMetrics(hosts[0]);
      })
    )
  }

  private getHostList(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.API_URL}/hosts`);
  }

  private getMetrics(hostname:string): Observable<object> {
    return this.httpClient.get<string[]>(`${this.API_URL}/metric?host=${hostname}`);
  }

}

export interface Metric {

  hostname: string;
  table: string;
  id: string;
  partion: string;
  diskSize: number;
  rowCount: number;

}
