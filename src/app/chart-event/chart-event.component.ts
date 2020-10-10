import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-chart-event',
  templateUrl: './chart-event.component.html',
  styleUrls: ['./chart-event.component.css']
})
export class ChartEventComponent implements OnInit {
  public highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.columnChart();
  }
  columnChart() {
  let basicColumnChart:any = {
    credits: {
        enabled: false
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
      plotOptions: {
          column: {
              pointPadding: 0.01,
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  allowOverlap:true
              }
          },
          series: {
            cursor: 'pointer',
            point: {
              events: {
                  click: function(e){
                    const p = e.point
                     this.eventTriggered(p.name,p.series.name, p.options.y);
                  }.bind(this)
              }
          }
        }
      },
      series: [{
        name: 'Tokyo',
        data: [
        {
          name: 'Jan',
          y: 34.5
        },
        {
          name: 'Feb',
          y: 43.5
        },
        {
          name: 'Mar',
          y: 54.2
        },
        {
          name: 'Apr',
          y: 65.8
        },
        {
          name: 'May',
          y: 54.8
        },
        {
          name: 'Jun',
          y: 44.6
        },
        {
          name: 'July',
          y: 77.2
        },
        ]

    }, {
        name: 'New York',
        data: [
          {
            name: 'Jan',
            y: 43.5
          },
          {
            name: 'Feb',
            y: 23.3
          },
          {
            name: 'Mar',
            y: 45.6
          },
          {
            name: 'Apr',
            y: 26.4
          },
          {
            name: 'May',
            y: 54.8
          },
          {
            name: 'Jun',
            y: 65.2
          },
          {
            name: 'July',
            y: 55.3
          },
          ]

    }, {
        name: 'London',
        data: [
          {
            name: 'Jan',
            y: 54.6
          },
          {
            name: 'Feb',
            y: 77.6
          },
          {
            name: 'Mar',
            y: 34.7
          },
          {
            name: 'Apr',
            y: 55.4
          },
          {
            name: 'May',
            y: 49.0
          },
          {
            name: 'Jun',
            y: 18.6
          },
          {
            name: 'July',
            y: 77.2
          },
          ]

    }, {
        name: 'Berlin',
        data: [
          {
            name: 'Jan',
            y: 21.1
          },
          {
            name: 'Feb',
            y: 23.2
          },
          {
            name: 'Mar',
            y: 44.3
          },
          {
            name: 'Apr',
            y: 33.5
          },
          {
            name: 'May',
            y: 64.3
          },
          {
            name: 'Jun',
            y: 73.6
          },
          {
            name: 'July',
            y: 98.2
          },
          ]

    }]
  } 
    Highcharts.chart("column_chart", basicColumnChart);
  }

  eventTriggered(xAxisName, yAxisName, yValue){
    console.log("Event Triggered for X Axis :" + xAxisName);
    console.log("Event Triggered for Y Axis :" + yAxisName, yValue);
    var x = "Value of xAxis: " + xAxisName  + " ";
    var y = "Value of yAxis: " + yAxisName;
    alert(x + y);
  }
  }



