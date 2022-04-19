import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  labels: string[];
  plotOptions: ApexPlotOptions;
};


@Component({
  selector: 'app-restaurants-order-history',
  templateUrl: './restaurants-order-history.component.html',
  styleUrls: ['./restaurants-order-history.component.css']
})
export class RestaurantsOrderHistoryComponent implements OnInit {
 // @ViewChild("chart") chart: ChartComponent | any;
 public chartOptions: Partial<ChartOptions> | any;

 constructor() {
   this.chartOptions = {
     series: [40],
     chart: {
       height: 175,
       type: "radialBar"
     },
     fill: {
       opacity: 1,
       colors: ['#85D8D9']
     },
     plotOptions: {
       radialBar: {
         hollow: {
           size: "70%"
         }
       }
     },
  
     // labels: ["Financial"]
   };
   
  }

 ngOnInit(): void {
 }

}
