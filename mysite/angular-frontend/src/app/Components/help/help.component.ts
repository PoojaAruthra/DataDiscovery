import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  modalRef!: BsModalRef;
  userGivenName: String = '';
  userFamilyName: String = '';
  userIsStaff: String = '';

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.userGivenName = (<any>window)["userGivenName"];
    this.userFamilyName = (<any>window)["userFamilyName"];
    this.userIsStaff = (<any>window)["userIsStaff"];
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });

  }

}
