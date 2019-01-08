import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MetricService } from './metric.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private metricService: MetricService) {
  }

  ngOnInit() {
    this.metricService.allMetric().subscribe(data => console.log(data));
  }

}
