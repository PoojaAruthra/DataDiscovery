import { Component, Input, OnInit } from '@angular/core';
import { ChartService } from '../../../Services/chart.service';

@Component({
  selector: 'app-chart-layout',
  templateUrl: './chart-layout.component.html',
  styleUrls: ['./chart-layout.component.scss']
})
export class ChartLayoutComponent implements OnInit {

  chartData:any=[];

  activeUserCountBarGraphData:any[]=[];
  activeUserBarGraphLabels:any[]=[];
  
  newUserCountBarGraphData:any[]=[];
  newUserBarGraphLabels:any[]=[];

  departmentPieData:any[]=[];
  departmentPieLabels:any[]=[];

  teamPieData:any[]=[];
  teamPieLabels:any[]=[];

  maxDate: Date = new Date();
  filterInputs:any={
    startDate:'',
    endDate:''
  };

  inputParameters:InputParams={
    serviceId:'',
    startDate:'',
    endDate:'',
    windowSizeByWeek:2
  }

  @Input() serviceId:any;
  
  constructor(private chartService:ChartService) { 
    //Can use the below Logic for Mock Data
    // this.chartData =new MockData_AvoidCrashes().getTelemetryData();
    // console.log(this.chartData);
    // const dates = this.getLastWeekDates();
    // this.filterInputs={ startDate: new Date(dates.startDate), endDate: new Date(dates.endDate)}
  }

  ngOnInit() {
    this.inputParameters.serviceId = this.serviceId; //'bb95fa90-e5c8-4548-ab58-673c8226fec3';
    const lastWeekDates = this.getLastWeekDates();
    this.filterInputs={ startDate: new Date(lastWeekDates.startDate), endDate: new Date(lastWeekDates.endDate)};
    
    let dates = this.setDates(this.filterInputs);
    
    this.inputParameters.startDate=dates["startDate"].toString();
    this.inputParameters.endDate= dates["endDate"].toString();

     this.getChartData(this.inputParameters);
  }

  getChartData(inputParams:InputParams){
  this.chartService.getChartData(inputParams.serviceId,inputParams.startDate,inputParams.endDate,inputParams.windowSizeByWeek).subscribe(
    (data) => {
      this.chartData = data;
      this.loadChartData();
    }
  )
  }

  loadChartData(){
    this.activeUserBarGraphLabels = this.chartData.activeUsersData.timeLine;
    this.activeUserCountBarGraphData.push({data:this.chartData.activeUsersData.activeUsersCount});

    this.newUserBarGraphLabels = this.chartData.newUsersData.timeLine;
    this.newUserCountBarGraphData.push({data:this.chartData.newUsersData.newUsersCount});
    
    this.departmentPieData.push(this.chartData.departmentData.departmentCount);
    this.departmentPieLabels=this.chartData.departmentData.departmentNames;

    this.teamPieData.push(this.chartData.usedComponentData.componentCount);
    this.teamPieLabels=this.chartData.usedComponentData.componentNames;

  }

  setMinEndDate() {
    return this.filterInputs.startDate;
  }

  searchInput(){
    let dates = this.setDates(this.filterInputs);
    this.inputParameters.startDate=dates["startDate"].toString();
    this.inputParameters.endDate= dates["endDate"].toString();
    this.resetData();
    this.getChartData(this.inputParameters);
  }

  resetData(){
    this.activeUserCountBarGraphData=[];
    this.newUserCountBarGraphData=[];
    this.departmentPieData=[];
    this.teamPieData=[];
  }

  departmentPieChartClick(event:any){
    //console.log(event);
    //Pie Chart Event Clicked can be Used later.
  }

  teamPieChartClick(event:any){
    //console.log(event);
    //Pie Chart Event Clicked can be Used later.
  }

  getLastWeekDates() {
    const d = new Date();
    d.setDate(d.getDate() - 6);
    const day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); 
    const startDate = new Date(d.setDate(diff-7));
    d.setDate(d.getDate() + 13);
    const endDate = d;
    return { startDate: startDate, endDate: endDate };
  }

  setDates(filter:any) {
    var dates={
      startDate:'',
      endDate:''
    };
      dates.startDate = `${filter.startDate
        .getFullYear()
        .toString()}${`0${filter.startDate.getMonth() + 1}`.slice(
        -2
      )}${`0${filter.startDate.getDate()}`.slice(-2)}`;
      dates.endDate =`${filter.endDate
        .getFullYear()
        .toString()}${`0${filter.endDate.getMonth() + 1}`.slice(
        -2
      )}${`0${filter.endDate.getDate()}`.slice(-2)}`;
    return dates;
  }

}

export class InputParams{
      serviceId:string=''
      startDate:string=''
      endDate:string=''
      windowSizeByWeek:number=2
}
