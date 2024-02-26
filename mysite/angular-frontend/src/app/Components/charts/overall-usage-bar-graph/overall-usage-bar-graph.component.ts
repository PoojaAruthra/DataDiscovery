import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { COLORPOOL } from '../../../Services/chart.service';
import { BaseChartDirective } from 'ng2-charts';
import 'chart.piecelabel.js';
 
@Component({
  selector: 'overall-bar-graph',
  templateUrl: './overall-usage-bar-graph.component.html',
  styleUrls: ['./overall-usage-bar-graph.component.scss']
})
export class OverallUsageBarGraph implements OnInit,OnChanges {
  fullDataSet: any;
 
  constructor() {
   }
 
  @Input() data: any;
  @Input() labels: any;
  @Input() chartType: string='horizontalBar';
  @Input() filterParams:any= {};
  @ViewChild(BaseChartDirective, { static: false }) myChart!: BaseChartDirective;
  @Output() emitChartClicked: EventEmitter<any> = new EventEmitter();
  @Input() title:string='Pie Chart';
  barChartOptions:any
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
    console.log(this.data)
    dataArray=this.data !=null ? this.data[0]:{};
    const sortedDataset = dataArray.sort((a: { value: number; }, b: { value: number; }) => b.value - a.value);
 
    // Take the top 10 elements from the sorted dataset
    const top10Dataset = sortedDataset.slice(0, 10);
    console.log("Org", dataArray)
    console.log(top10Dataset)
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
      const result =   GetTop10Values(this.legends,dataArray)
       this.fullDataSet = dataArray.map((value: any, index: any) => ({ value, string: this.legends[index] }));
       this.fullDataSet.sort((a:any, b:any) => b.value - a.value);
   
 
    this.dataset={
        labels: result.strings,
        datasets: [{
            data: result.values,
            borderWidth: 1
        }]
    };  
   
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
          display: true, position: 'bottom'
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
          ticks: { autoSkip: true, minTicksLimit: 6, maxTicksLimit: 26, beginAtZero: true, color:'white' },
          scaleLabel: {
            display: true,
            labelString: "Departments"
          }
        },
        y: {
          ticks: { autoSkip: false, beginAtZero: true, color:'white',stepSize:1 },
          scaleLabel: {
            display: true,
            labelString: "COunt"
          }
        }
      },
      scaleShowVerticalLines: false,
      scaleShowValues: true,
      scaleValuePaddingX: 10,
      scaleValuePaddingY: 10,
      fill: true,
    };
 
    this.options = {
      scales: {
        x: {
          scaleLabel: {
            display: true,
            labelString: "Departments"
          }
        },
        y: {
          scaleLabel: {
            display: true,
            labelString: "COunt"
          }
        }
      },
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
          display: false,
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
 
  // downloadCsv() {
  //   // Combine the full dataset into a CSV format
  //   const fullData = this.fullDataSet.map((value: any, index: any) => [value, this.labels[index]]);
  //   console.log(fullData)
  //   const csvContent = "Value,Text\n" + fullData.map((row: any[]) => row.join(",")).join("\n");
  //   console.log(csvContent)
  //   // Create a Blob and a link to trigger the download
  //   const blob = new Blob([csvContent], { type: 'text/csv' });
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'full_dataset.csv';
  //   document.body.appendChild(a);
   
  //   // Trigger the download and remove the temporary link
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  //   document.body.removeChild(a);
  // }
 
  downloadCsv() {
    // Convert the data into a CSV format
    const csvContent = "Value,Text\n" + this.fullDataSet.map((item: { value: any; string: any; }) => `${item.value || ''},${item.string || ''}`)
    .join("\n");
 
    // Create a Blob and a link to trigger the download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'full_dataset.csv';
    document.body.appendChild(a);
 
    // Trigger the download and remove the temporary link
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
 
}
function GetTop10Values(strings: string[],dataArray:any) {
  const data = dataArray.map((value: any, index: any) => ({ value, string: strings[index] }));
  data.sort((a:any, b:any) => b.value - a.value);
  const top10Values = data.slice(0, 10).map((item: { value: any; }) => item.value);
  const top10Strings = data.slice(0, 10).map((item: { string: any; }) => item.string);
 console.log(top10Values)
 console.log(top10Strings)
 return { values: top10Values, strings: top10Strings };
 
}