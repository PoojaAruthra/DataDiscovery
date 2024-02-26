import { Component, OnInit } from '@angular/core';
import { Offering } from '../../Interfaces/offering';
import { OfferingService } from '../../Services/offering.service';
import { TagService } from '../../Services/tag.service';
import { DARK } from '../../../environments/theme';
import { SiToastService, SiToastTypes } from '@simpl/siemens-brand-ng/toast';
// import { TagManagementComponent } from '../tag-management/tag-management.component';

@Component({
  selector: 'app-offering-create',
  templateUrl: './offering-create.component.html',
  styleUrls: ['./offering-create.component.scss']
})
export class OfferingCreateComponent implements OnInit {
  dark = DARK;
  tags: any = {};
  offering: Offering = {} as Offering;
  submitted = false;


  constructor(
    private offeringService: OfferingService,
    private tagService: TagService,
    private toastService: SiToastService) { }

  ngOnInit(): void {
    this.getTags();
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


  saveOffering(): void {

    const data = {
      name: this.offering.name,
      description: this.offering.description,
      access_url: this.offering.access_url,
      documentation_url: this.offering.documentation_url,
      is_recommended: this.offering.is_recommended,
      tags: this.offering.tags
    };



    this.offeringService.create(data)
      .subscribe(
        response => {
          this.submitted = true;
        },
        error => {
          Object.keys(error.error).forEach(key => {
            let value = error.error[key];
            this.showErrorToast(key + ':' + value);
          });
        });
  }

  newOffering(): void {
    this.submitted = false;
    this.offering = {
      id: '',
      description: '',
      name: '',
      access_url: '',
      documentation_url: '',
      is_recommended: false,
      image_name: '',
      sas: '',
      tags: [],
      tag_completeness_score : 0,
      tag_improvement_string: '',
      recommendations: []
    };
  }

  showErrorToast(message: any) {
    this.toastService.showToast({
      content: message,
      type: SiToastTypes.DANGER,
      timeout: 3000,
    });
  }

}
