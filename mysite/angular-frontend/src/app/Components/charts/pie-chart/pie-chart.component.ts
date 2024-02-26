import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { COLORPOOL } from '../../../Services/chart.service';
import { BaseChartDirective } from 'ng2-charts';
import 'chart.piecelabel.js';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit,OnChanges {

  constructor() {
   }

  @Input() data: any;
  @Input() labels: any;
  @Input() chartType: string='pie';
  @Input() filterParams:any= {};
  @ViewChild(BaseChartDirective, { static: false }) myChart!: BaseChartDirective;
  @Output() emitChartClicked: EventEmitter<any> = new EventEmitter();
  @Input() title:string='Pie Chart';
  
  ngOnInit() {
  }

  options: any;
  legends: Array<string> = [];
  dataset: any=[];

  pieChartColors = [
    {
      backgroundColor: this.getPieChartColors(COLORPOOL),
    },
  ];

  getPieChartColors(COLORPOOL: number[][]):string[] {
    const pool:string[]=[];
    COLORPOOL.forEach(element => {
      pool.push(`rgba(${element.join(',')})`)
    });
    return pool;
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    let dataArray:any={};
    dataArray=this.data !=null ? this.data[0]:{};
    this.legends.length = 0;

    const pieLabels: Array<string> = [];
    pieLabels.push(...this.labels);
    
    let trimmedLables:Array<any> =[];
    
    if(this.labels != null && this.labels != undefined && this.labels.length != 0){
      this.labels.forEach((arr:any,index:number) => {
        if(arr.length > 20){
          trimmedLables[index] = arr.substring(0,16) + ".." ;
        }
        else{
          trimmedLables[index] = arr;
         }
      })
    }

    
    if (this.labels)
      this.legends.push(...trimmedLables);

    this.dataset={
        labels: this.legends,
        datasets: [{
            data: dataArray,
            borderWidth: 1
        }]
    };

    this.options = {
      layout: {
        padding: {
          left: 0,
          right: 13,
          top: 10,
          bottom: 0
        }
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1,
      plugins:{
        legend: {
          labels: { usePointStyle: true, fontSize: 11, boxWidth: 10, fullWidth: false ,color:'white'},
          display: true,
          position: 'left',
          lineWidth: 0,
        },
        title: {
          display: false,
          text: this.title,
          color:'white'
        },
        tooltip:{
          callbacks: {
            label: function(tooltipItem:any) {
                return pieLabels[tooltipItem.dataIndex];
            }
          }
        }
      },
      animation: { animateScale: true, animateRotate: true },
      pieceLabel: {
        render: function (args:any) {
          return `${args.percentage}%`;
        },
        position: 'outside'
      }
    }
  }

  chartClicked(e: any): void {
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if (activePoints.length > 0) {
        const labels=Object.keys(this.labels).map(item=>this.labels[item])
      const chartClickedProps = {
          label: labels[activePoints[0]._index],
          name:this.chartType
        }
        this.emitChartClicked.emit(chartClickedProps)
      }
    }
  }
}
