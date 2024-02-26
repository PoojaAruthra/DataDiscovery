import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TagService } from '../../Services/tag.service';
import { Tag } from '../../Interfaces/tag';

// import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-tag-management',
  templateUrl: './tag-management.component.html',
  styleUrls: ['./tag-management.component.scss']
})
export class TagManagementComponent implements OnInit {
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService, private tagService: TagService) { }
  tags: Tag[] = [];
  tagTypeOptions: string[] = [];
  selectedTag! : Tag;

  showDetails = new Set<string>();
  showCreate = false;


  ngOnInit(): void {
    this.getTags();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  getTags():void {
    this.tagService.getTags()
    .subscribe(tags => this.tags = tags);
  }

  deleteTag(id: string):void{
    this.showDetails.delete(id);
    this.tagService.delete(id).subscribe(
      response => {
        this.showDetails.delete(id);
        this.getTags();
      },
      error => {
        console.log(error);
      });
  }

  updateTag(id:string):void{
    this.tagService.update(id, this.selectedTag)
    .subscribe(
      response => {
        this.showDetails.delete(id);
        this.getTags();
      },
      error => {
        console.log(error);
      });

  }

  createTag():void{
    this.tagService.create(this.selectedTag)
    .subscribe(
      response => {
        this.showCreate = false;
        this.getTags();
      },
      error => {
        console.log(error);
      });
  }

  getTagByID(id:string):Tag{
    return <Tag>this.tags.find((tag) => {
      return tag.id === id;
    });
  }

  toggleCreate() {
    if(this.showCreate){
      this.showCreate = false;
    }
    else{
      this.tagTypeOptions = [...new Set(this.tags.map(tag => tag.type))];
      this.showCreate = true;
      this.showDetails.clear();
      this.selectedTag = {'id': '', 'type': '', 'name': ''};
    }

  }


  toggleDetails(id: string) {
    if (!this.showDetails.delete(id)) {
      this.tagTypeOptions = [...new Set(this.tags.map(tag => tag.type))];
      this.showDetails.clear();
      this.showCreate = false;
      this.selectedTag = this.getTagByID(id);
      this.showDetails.add(id);
      console.log(this.showDetails)
    }
  }
  showDetailsProvider = (row: Tag, key: any) => this.showDetails.has(row.id);
}
