import { Component, OnInit } from '@angular/core';
import { MetricService, Metric } from './metric.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private metrics: Metric[];
  private metricByHost: { [hostname: string]: Metric[] };
  resultMetrics: any[];
  // metricByHost: any;
  tables: Table[];
  tableTree: TableTree[];

  constructor(private metricService: MetricService) {
  }

  ngOnInit() {
    this.metricService.allMetric().subscribe(data => {
      this.metrics = data;
      this.tables = this.retriveTableName(data);
      this.tableTree = _.uniq(this.tables, 'dbName').map(table => table.dbName).map(dbName => {
        return {
          name: dbName,
          tables: this.tables.filter(table => table.dbName === dbName).map(table => ({
            name: table.tableName,
            fullName: table.fullName,
            enabled: true
          }))
        };
      });

      this.refreshMetrics();
    });
  }

  private retriveTableName(metrics: Metric[]): Table[] {
    return _.uniq(this.metrics.map(metric => metric.table)).map(table => ({
      dbName: table.split('.')[0].replace(/impala::/, ''),
      tableName: table.split('.')[1],
      fullName: table
    }));
  }

  private refreshMetrics() {
    const selectedTables: string[] = _.flatten(this.tableTree.map(tree => tree.tables
      .filter(table => table.enabled)
      .map(table => table.fullName))
    );

    this.metricByHost = _.groupBy(this.metrics, 'hostname');
    this.resultMetrics = _.keys(this.metricByHost).map(key => {
      const metrics = this.metricByHost[key].filter(metric => selectedTables.indexOf(metric.table) > -1);
      return {
        hostname: key,
        tableCount: _.uniq(metrics, 'table').length,
        tabletCount: metrics.length,
        runningTabletCount: metrics.filter(metric => metric.state === 'RUNNING').length,
        diskSize: metrics.reduce((prev, metric) => prev + metric.diskSize, 0)
      };
    });
    console.log(this.resultMetrics);
  }

  onTableSelectedChange(event) {
    this.refreshMetrics();
  }
}

interface Table {
  dbName: string;
  tableName: string;
  fullName: string;
}

interface TableTree {
  name: string;
  tables: { name: string, fullName: string, enabled: boolean }[];
}
