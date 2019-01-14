import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, zip, of } from 'rxjs';
import { switchMap, flatMap, map, filter, toArray, mergeAll, tap } from 'rxjs/operators';
import { join } from 'path';

@Injectable({ providedIn: 'root' })
export class MetricService {

  private readonly API_URL = 'localhost';

  constructor(private httpClient: HttpClient) { }

  public allMetric(): Observable<Metric[]> {
    return this.getHostList().pipe(
      switchMap(hosts => {
        return forkJoin(hosts.map(host => this.getMetrics(host)));
      }),
      mergeAll(), mergeAll(),
      filter((rawMetric: RawMetric) => rawMetric.type === 'tablet'),
      map((tableAttr: RawMetric): Metric => ({
        hostname: 'empty',
        table: tableAttr.attributes.table_name as string,
        id: tableAttr.attributes.table_id as string,
        partition: tableAttr.attributes.partition as string,
        diskSize: tableAttr.metrics.find(metric => metric.name === 'on_disk_data_size').value || 0,
        rowCount: tableAttr.metrics.find(metric => metric.name === 'memrowset_size').value || 0
      })),
      toArray()
    );
  }

  private getHostList(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.API_URL}/hosts`);
  }

  private getMetrics(hostname: string): Observable<object> {
    return this.httpClient.post<string[]>(`${this.API_URL}/metric`, { hostname: hostname });
  }

}

export interface Metric {

  hostname: string;
  table: string;
  id: string;
  partition: string;
  diskSize: number;
  rowCount: number;

}

interface RawMetric {
  type: string,
  id: string,
  attributes: any,
  metrics: any[]
}
