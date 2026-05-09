import { Component } from '@angular/core';

@Component({
  selector: 'investman-app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent {
  // Chart data
  chartData = [
    {
      name: 'Product A',
      series: [
        { name: 'January', value: 65 },
        { name: 'February', value: 59 },
        { name: 'March', value: 80 },
        { name: 'April', value: 81 },
        { name: 'May', value: 56 },
        { name: 'June', value: 55 },
        { name: 'July', value: 40 }
      ]
    },
    {
      name: 'Product B',
      series: [
        { name: 'January', value: 28 },
        { name: 'February', value: 48 },
        { name: 'March', value: 40 },
        { name: 'April', value: 35 },
        { name: 'May', value: 86 },
        { name: 'June', value: 78 },
        { name: 'July', value: 90 }
      ]
    }
  ];
}
