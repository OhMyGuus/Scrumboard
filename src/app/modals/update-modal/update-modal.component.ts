import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { IDbObject } from 'src/app/models/interfaces/IDBObject';
import { IRepository } from 'src/app/repositories/IRepository';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {

  modalRef: BsModalRef;
  @Input() modelData: IDbObject;
  @Input() repository: IRepository;

  private model: IDbObject;
  formGroup: FormGroup;
  fields: Array<FormlyFieldConfig>;
  constructor(private modalService: BsModalService, public formBuilder: FormBuilder) {

  }

  openModal(template: TemplateRef<any>) {
    this.resetFields();
    this.copyStory();
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  update() {
    if (this.formGroup.valid) {
      this.repository.update(this.model);
      this.closeModal();
    }
  }

  resetFields() {
    this.model = this.repository.createModel();
    this.formGroup = new FormGroup({});
    this.fields = this.model.getForm();
  }

  copyStory() {
    this.model = Object.assign({}, this.modelData);
  }

  ngOnInit() {
  }

}
