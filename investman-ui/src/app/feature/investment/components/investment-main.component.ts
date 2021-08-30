import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'investman-app-investment-main',
  templateUrl: './investment-main.component.html',
  styleUrls: ['./investment-main.component.scss']
})
export class InvestmentMainComponent implements OnInit {

  investments: Array<string> = new Array();
  constructor() {
    this.investments.push("Infosys");
    this.investments.push("HCL Tech");
    this.investments.push("LTI");
    this.investments.push("Happiest Minds");
    this.investments.push("Tata Motors");
  }

  ngOnInit(): void {
  }

}
