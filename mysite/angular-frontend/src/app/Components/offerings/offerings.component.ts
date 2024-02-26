import { Component, OnInit } from '@angular/core';
import { Offering } from '../../Interfaces/offering'
import { OfferingService } from '../../Services/offering.service';
import { EventService } from '../../Services/event.service';
import { DARK } from '../../../environments/theme';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss']
})
export class OfferingsComponent implements OnInit {
  offerings: Offering[] = [];
  dark = DARK;
  userGivenName: String = '';
  userFamilyName: String = '';
  userIsStaff: Boolean = false;
  searchValue = ''; //this.route.snapshot.queryParams.search;
  form!: FormGroup;

  trackByIndex = (index: number) => index;

  constructor(
    private offeringService: OfferingService,
    private eventService: EventService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    ) {
      this.route.queryParams.subscribe(params =>{
        this.searchValue = this.route.snapshot.queryParamMap.get('search')!;
        this.getOfferings();
      });
    }

  ngOnInit(): void {
      this.searchValue = this.route.snapshot.queryParams.search;
      this.userGivenName = (<any>window)["userGivenName"];
      this.userFamilyName = (<any>window)["userFamilyName"];
      this.userIsStaff = (<any>window)["userIsStaff"] == 'True' ? true : false;

      this.form = this.formBuilder.group({
        search: [null],
      });

  }

  clickTagHandler(type: string, name:string){
    this.router.navigate([], {queryParams: {search: type + '>' + name}});
  }

  emitEvent(type: string, target: string):void{
    this.eventService.create({'type': type, 'target': target}).subscribe(
      response => {

      },
      error => {
        console.log(error);
      });
  }


  getOfferings():void {
    if(this.searchValue == '' || this.searchValue == undefined)
    {
      this.offeringService.getOfferings()
      .subscribe(offerings => this.offerings = offerings)
    }
    else{
      this.offeringService.searchOfferings(this.searchValue)
      .subscribe(offerings => this.offerings = offerings)
      }
    }

    refreshSearch(){
      this.router.navigate([], {queryParams: {search: this.searchValue}});
    }

    
    getBackgroundColor(type:string){
      let colorMap:any = {
        'Department': '#FE8389',
        'InformationType': '#0087BE',
        'Technology': '#00557C',
        'CreatorTeam': '#00e6dc',
        'Keyword': '#00FFB9',
        'Phase': '#AA32BE',
        'Product': '#500078',
        'Role' : '#FF9000',
        'ServiceType': '#EC6602',
        'Value': '#FFD732'
      }
      return colorMap[type];
    }
    getColor(type:string){
      let colorMap:any = {
        'Department': '#000000',
        'InformationType': '#000000',
        'Technology': '#FFFFFF',
        'CreatorTeam': '#000000',
        'Keyword': '#000000',
        'Phase': '#000000',
        'Product': '#FFFFFF',
        'Role' : '#000000',
        'ServiceType': '#000000',
        'Value': '#000000'
      }
      return colorMap[type];
    }
}
