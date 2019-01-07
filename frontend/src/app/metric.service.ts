import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MetricService {

  readonly API_URL = "localhost";

  constructor(private httpClient: HttpClient) { }

  public metric() {
    this.getHostList().pipe(
      switchMap( (hosts:string[]) => {
        return hosts;
      })
    );
  }

  private getHostList(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.API_URL}/hosts`);
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
