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

  constructor(private metricService: MetricService) {
  }

  ngOnInit() {
    this.metricService.allMetric().subscribe(data => {
      this.metrics = data;
      console.log( data );
   });
  }

}
