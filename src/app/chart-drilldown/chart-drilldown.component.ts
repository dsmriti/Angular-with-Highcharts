import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-chart-drilldown',
  templateUrl: './chart-drilldown.component.html',
  styleUrls: ['./chart-drilldown.component.css']
})
export class ChartDrilldownComponent implements OnInit {
  public highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.stackedDrilldown();
  }
  stackedDrilldown(){
    Highcharts.setOptions({
      lang: {
          drillUpText: '< Back'
      },
      drilldown: {
        activeAxisLabelStyle: {
          textDecoration: 'none',
          cursor: 'default',
          pointerEvents: 'none',
          color:'#666666'
      }, 
    }
    });
    let stackedChartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Test'
      },
      xAxis: {
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
          'Dec'
      ],
      },
      yAxis: {
        margin: 100,
        min: 0,
        title: {
          text: 'No. of test'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: (
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color
            ) || 'gray'
          }
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          depth: 20
        },
        // series: { 
        //   point: {
        //     events: {
        //       click: function (e) {
        //         //console.log(this.drilldown);
        //         for (let drilldown_obj in this.drilldown) {
        //           //console.log(drilldown_obj);
        //           this.series.chart.addSingleSeriesAsDrilldown(this, this.drilldown[drilldown_obj]);
        //         }
        //         this.series.chart.applyDrilldown();
        //       }
        //     }
        //   }, 
        // }
      },
      series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Jane',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5]
    }],
      responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },
      // drilldown: {
      //   drillUpButton: {
      //     position: {
      //       verticalAlign: 'top',
      //       align: 'right',
      //       y: -42,
      //       x: -25
      //     }
      //   },
      //   series: []
      // }
    };
    //Highcharts.chart("column_chart", stackedChartOptions);
  }
}
