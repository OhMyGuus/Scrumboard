import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { IDbObject } from 'src/app/models/interfaces/IDBObject';
import { IRepository } from 'src/app/repositories/IRepository';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {

  modalRef: BsModalRef;
  fields: FormlyFieldConfig[];
  formGroup: FormGroup;
  @Input() repository: IRepository;
  model: IDbObject;
  constructor(private modalService: BsModalService, public formBuilder: FormBuilder) {

  }

  openModal(template: TemplateRef<any>) {
    this.resetFields();
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  create() {
    if (this.formGroup.valid) {
      this.repository.add(this.model);
      this.closeModal();
      this.resetFields();
    }
  }

  resetFields() {
    this.model = this.repository.createModel();
    console.log(this.model);
    this.formGroup = new FormGroup({});
    this.fields = this.model.getForm();
  }

  ngOnInit() {
    this.resetFields();
  }

}
