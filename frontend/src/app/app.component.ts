import { Component, OnInit } from '@angular/core';
import { MetricService, Metric } from './metric.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  metrics: Metric[];
  tables: Table[];
  tableTree: any[];

  constructor(private metricService: MetricService) {
  }

  ngOnInit() {
    this.metricService.allMetric().subscribe(data => {
      this.metrics = data;
      this.tables = this.retriveTableName(data);
      this.tableTree = _.uniq(this.tables, 'dbName').map(table => table.dbName).map( dbName => {
        return {
          name: dbName,
          tables: this.tables.filter(table => table.dbName === dbName).map(table => ({
            name: table.tableName,
            fullName: table.fullName,
            enabled: true
          }))
        };
      });

      console.log( this.tableTree );
    });
  }

  private retriveTableName(metrics: Metric[]): Table[] {
    return _.uniq(this.metrics.map(metric => metric.table)).map(table => ({
      dbName: table.split('.')[0].replace(/impala::/, ''),
      tableName: table.split('.')[1],
      fullName: table
    }));
  }

}

interface Table {
  dbName: string;
  tableName: string;
  fullName: string;
}
