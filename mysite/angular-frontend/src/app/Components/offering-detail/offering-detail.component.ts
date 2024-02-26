import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offering } from '../../Interfaces/offering'
import { OfferingService } from '../../Services/offering.service';
import { TagService } from '../../Services/tag.service';
import { ImageService } from '../../Services/image.service';
import { StatisticService } from '../../Services/statistic.service';
import { DARK } from '../../../environments/theme';
import { FormControl } from '@angular/forms';
import { SiToastService, SiToastTypes } from '@simpl/siemens-brand-ng/toast';

@Component({
  selector: 'app-offering-detail',
  templateUrl: './offering-detail.component.html',
  styleUrls: ['./offering-detail.component.scss']
})
export class OfferingDetailComponent implements OnInit {
  offering: Offering = {} as Offering;
  tags: any = {};
  selectedTags: any = [];

  statisticsData: any = [];
  chartData: any= [];
  chartLabels: any = [];

  splitImprovementString: any = [];
  dark = DARK;
  formControl = new FormControl();

  serviceId:any;
  portfolioName:any;
  disableEdit:boolean = true;
  jsonData:Offering = {
    "id": "1c3bfab9-2082-47b3-8259-3925f1f8351b",
    "name": "TIA Avoid Crashes Portal",
    "description": "Crashes reported from different customers of TIA portal across the globe. These crash reports are the most important feedback for improving TIA portal quality and stability. These crashes are collected from various sources, analyzed, categorized and stored in a central repository. Then useful data are made from the whole data and presented in the form of daily, weekly and monthly reports.",
    "access_url": "https://tia-crashreports.siemens.net/tia-avoidcrash/home",
    "documentation_url": "https://asrdwiki.siemens.com/tiapdev/index.php?title=TIA_Error_Reporting",
    "tags": [],
    "is_recommended": false,
    "sas": "se=2023-11-15T11%3A13%3A20Z&sp=r&sv=2023-08-03&ss=b&srt=o&sig=AgnoBGv7syIO9siUWHilUphoAyGvr5siNRAq8S3mRqM%3D",
    "image_name": "",
    "tag_completeness_score": 0.0,
    "tag_improvement_string": "[Product] Add a tag for the product the insight is related to.\n[Role] Specify who the insight is for (Scrum Master, Developer, Architect, ProductOwner, Release Manager, Tester)\n[Value] Tag which value cluster [Link] the insight improves.\n[Phase] Specify which phase of the software life cycle the insight is for.\n[CreatorTeam] Assign the insight to one or more teams who created it for more transparency.",
    "recommendations": []
};

  createChartData(data:any){
    var newData = data.map((e:any) => {
      return e.user_count
    })

    return newData;
  };

  createChartLabels(data:any){
    var newData = data.map((e:any) => {
      let dateTime = new Date(e.time)
      return dateTime.getFullYear() + '/' +  (dateTime.getMonth() +1)
    })
    return newData;

  };

  createChart(){
    this.chartData = [
      {
        axis: 'x',
        data: this.createChartData(this.statisticsData.data),
        label: 'Unique Monthly Users'
      }
    ];

    this.chartLabels = this.createChartLabels(this.statisticsData.data);
  }

  chartOptions = {
      borderColor : 'rgba(0, 255, 185, 1)', //border of line
      backgroundColor: 'rgba(0, 255, 185, 0.5)', //fill of area under line
      pointRadius: 0,
      tension : 0.1,
      fill: true,

      hoverBackgroundColor: 'rgba(0, 255, 185, 0.5)',

      pointHitRadius: 10,
      pointHoverBackgroundColor: 'rgba(0, 255, 185, 0.5)',
      pointHoverBorderColor: 'rgba(0, 255, 185, 1)',
      pointHoverBorderWidth: 0,
      pointHoverRadius: 10,
      tooltip: {
        backgroundColor: 'rgba(0, 255, 185, 0.5)',
      },

      scaling: {
        y: {
          suggestedMin: 0,
        }
      }
  };




  constructor(
    private offeringService: OfferingService,
    private tagService: TagService,
    private toastService: SiToastService,
    private imageService: ImageService,
    private statisticService: StatisticService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getOffering(this.route.snapshot.params.id);
    this.getTags();
    this.serviceId=this.route.snapshot.params.id;
    this.portfolioName =this.route.snapshot.params.name;
  }

  onOpenStatistics(): void {
    this.getStatistic(this.route.snapshot.params.id);
  }

  onFileChange(event: any) {

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    const placeholder = document.getElementById('uploadedImage') as HTMLImageElement;

    reader.onload = (_event) => {
        placeholder.src = reader.result as string;
        this.imageService.postImage(event.target.files[0], this.offering.id, 'service')
        .subscribe(
          response => {
            this.showSuccessToast('Uploaded Preview Image!')
          },
          error => {
            this.showErrorToast('Could not upload Preview Image!')
            console.log(error);
          });

    }
  }

  getStatistic(id:string){
    this.statisticService.get(id)
    .subscribe(
      data => {
        console.log(data);
        this.statisticsData = data;
        this.createChart();
      },
      error => {
        console.log(error);
      });
  }

  getTags() {
    this.tagService.getTags()
      .subscribe(
        data => {
          this.tags = data;
        },
        error => {
          console.log(error);
        });
  }

  getOffering(id: string): void {
    // this.offeringService.get(id)
    //   .subscribe(
    //     data => {
    //       this.offering = data;
    //       this.splitImprovementString = this.offering.tag_improvement_string.split('\n');
    //     },
    //     error => {
    //       console.log(error);
    //     });

    this.offering = this.jsonData;
    this.splitImprovementString = this.offering.tag_improvement_string.split('\n');
  }

  updateOffering(): void {
    this.offeringService.update(this.offering.id, this.offering)
      .subscribe(
        response => {
          this.showSuccessToast('Updated Insight');
          this.disableEdit = true;
        },
        error => {
          Object.keys(error.error).forEach(key => {
            let value = error.error[key];
            this.showErrorToast(key + ':' + value);
          });

        });
  }

  deleteOffering(): void {
    this.offeringService.delete(this.offering.id)
      .subscribe(
        response => {
          this.router.navigate(['/insights']);
        },
        error => {
          this.showErrorToast(error.message);
          console.log(error);
        });
  }
  toggleEditOffering(){
    this.disableEdit = !this.disableEdit;
  }

  showSuccessToast(message: string) {
    this.toastService.showToast({
      content: message,
      type: SiToastTypes.SUCCESS,
      timeout: 3000,
    });
  }

  showErrorToast(message: any) {
    this.toastService.showToast({
      content: message,
      type: SiToastTypes.DANGER,
      timeout: 3000,
    });
  }

}
