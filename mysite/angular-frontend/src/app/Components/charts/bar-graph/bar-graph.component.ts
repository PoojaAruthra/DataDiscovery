import { Component, OnInit, Input, ViewChild, SimpleChanges, Output, EventEmitter, OnChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { COLORPOOL } from '../../../Services/chart.service';

@Component({
  selector: 'bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit,OnChanges {

  @Input() data: any;
  @Input() labels: any;
  @Input() ChartType: any;
  @Input() stacked!: boolean;
  @Input() xAxisLabel!: string;
  @Input() yAxisLabel!: string;
  @ViewChild('barChart', { static: true }) barChart!: BaseChartDirective;
  @Output() chartClicked: EventEmitter<any> = new EventEmitter();
  @Input() title!:string;

  constructor() { }

  ngOnInit() {
  }


  barChartOptions: any;
  barChartLabels: string[] = [];
  barChartData: any[] = [];
  barchartColors: {}[] = [];

  callChartClicked(e: any): void {
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if (activePoints.length > 0) {
        const  chartClickedProps = {
          label: this.labels[activePoints[0]._index],
          legend: this.data[activePoints[0]._datasetIndex].label,
          name: this.ChartType
        }
        this.chartClicked.emit(chartClickedProps)
      }
    }
  }

  getChartColors(color: number[]) {
    if (color === undefined) {
      color = COLORPOOL[Math.floor(Math.random() * 11)]
    }
    color[3] = .8;
    const pool = {
      backgroundColor: `rgba(${color.join(',')})`,
      borderColor: `rgba(${color.join(',')})`,
      pointBackgroundColor: `rgba(${color.join(',')})`,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: `rgba(${color.join(',')})`,
      pointHoverBorderColor: '#fff',
      hoverBackgroundColor: `rgba(${color.join(',')})`,
      hoverBorderColor: `rgba(${color.join(',')})`,
    }
    return pool;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.barchartColors = []
    this.barChartData.length = 0;
    this.barChartLabels.length = 0;
    
   if (this.data)
      this.barChartData.push(...this.data);
    
    if (this.labels) {
      this.barChartLabels.push(...this.labels);
    }

    for (let i = 0; i < this.data.length; i++) {
      this.barchartColors.push(this.getChartColors(COLORPOOL[i]))
    }
    this.barChartOptions = {
      maintainAspectRatio:true,
      borderColor : 'rgba(0, 255, 185, 1)', //border of line
      backgroundColor: 'rgba(0, 255, 185, 0.5)', //fill of area under line
      pointRadius: 0,
      tension : 0.1,

      hoverBackgroundColor: 'rgba(0, 255, 185, 0.5)',

      pointHitRadius: 10,
      pointHoverBackgroundColor: 'rgba(0, 255, 185, 0.5)',
      pointHoverBorderColor: 'rgba(0, 255, 185, 1)',
      pointHoverBorderWidth: 0,
      pointHoverRadius: 10,
      tooltip: {
        backgroundColor: 'rgba(0, 255, 185, 0.5)',
      },
      layout: {
        padding: {
          left: 10,
          right: 0,
          top: 10,
          bottom: 0
        }
      },
      plugins:{
        legend: {
          labels: { usePointStyle: true, fontSize: 10, boxWidth: 10 },
          display: false, position: 'bottom'
        },
        title: {
          display: true,
          text: this.title,
          color:'white'
        }
      },
      responsive: true,
      scales: {
        x: {
          stacked: this.stacked,
          ticks: { autoSkip: true, minTicksLimit: 6, maxTicksLimit: 26, beginAtZero: true, color:'white' },
          scaleLabel: {
            display: true,
            labelString: this.xAxisLabel
          }
        },
        y: {
          ticks: { autoSkip: false, beginAtZero: true, color:'white',stepSize:1 },
          stacked: this.stacked,
          scaleLabel: {
            display: true,
            labelString: this.yAxisLabel
          }
        }
      },
      scaleShowVerticalLines: false,
      scaleShowValues: true,
      scaleValuePaddingX: 10,
      scaleValuePaddingY: 10,
      fill: true,
    };
    this.barChartLabels = this.labels;
    if (this.ChartType !== 'bar') {
      this.data.forEach((element:any) => {
        element['fill'] = false
      });
    }
  }
}

