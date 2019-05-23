import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sprint } from 'src/app/models/sprint';
import { SprintsRepoService } from 'src/app/repositories/sprints/sprints-repo.service';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-update-sprint',
  templateUrl: './update-sprint.component.html',
  styleUrls: ['./update-sprint.component.scss']
})
export class UpdateSprintComponent implements OnInit {

  modalRef: BsModalRef;
  @Input() sprintData: Sprint;
  private sprint: Sprint;
  formGroup: FormGroup;
  fields: Array<FormlyFieldConfig>;
  constructor(private modalService: BsModalService, public formBuilder: FormBuilder, private sprintsRepo: SprintsRepoService) {
    this.formGroup = new FormGroup({});
    this.fields = Sprint.getForm();
  }

  openModal(template: TemplateRef<any>) {
    this.copyStory();
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  update() {
    if (this.formGroup.valid) {
      this.sprintsRepo.update(this.sprint);
      this.closeModal();
    }
  }

  resetFields() {
    this.sprint = new Sprint();
  }

  copyStory() {
    this.sprint = Object.assign({}, this.sprintData);
  }

  ngOnInit() {
  }

}
