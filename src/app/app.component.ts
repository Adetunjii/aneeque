import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: any;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: any;
  colors: String[];
  states: any;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Net Profit',
          data: ['44', 55, 57, 56, 61, 58, 63, 60, 66, 32, 59, 62],
        },
      ],
      chart: {
        type: 'bar',
        distributed: true,
        height: 250,
        width: '100%',
      },
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: 8,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        width: 2,
        colors: ['#e2e8fd'],
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],

        axisBorder: {
          show: false,
        },

        axisTicks: {
          show: false,
        },

        lines: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
          offsetY: 200,
        },
      },
      fill: {
        colors: ['#e2e8fd'],
      },

      state: {
        hover: {
          filter: {
            type: 'darken',
            value: 0.35,
          },
        },
      },
    };
  }
}
