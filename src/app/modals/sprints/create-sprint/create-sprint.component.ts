import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sprint } from 'src/app/models/sprint';
import { SprintsRepoService } from 'src/app/repositories/sprints/sprints-repo.service';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.scss']
})
export class CreateSprintComponent implements OnInit {

  modalRef: BsModalRef;
  public sprint: Sprint;

  constructor(private modalService: BsModalService, public formBuilder: FormBuilder, private sprintsRepo: SprintsRepoService) {


  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  create() {
    this.sprintsRepo.add(this.sprint);
    this.closeModal();
    this.resetFields();
  }

  resetFields() {
    this.sprint = new Sprint();
  }

  ngOnInit() {
    this.resetFields();
  }

}
