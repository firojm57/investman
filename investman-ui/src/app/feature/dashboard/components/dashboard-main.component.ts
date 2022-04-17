import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'investman-app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 28, 34, 29, 15], label: 'Product A' },
    { data: [28, 48, 40, 35, 86, 78, 90, 85, 55, 67, 98], label: 'Product B' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    {
      backgroundColor: 'rgba(255,0,51,0.05)',
      borderColor: 'rgba(255,0,51,1)',
    },
    {
      backgroundColor: 'rgba(20,83,45,0.05)',
      borderColor: 'rgba(20,83,45,1)',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
