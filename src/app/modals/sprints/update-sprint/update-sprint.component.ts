import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sprint } from 'src/app/models/sprint';
import { SprintsRepoService } from 'src/app/repositories/sprints/sprints-repo.service';

@Component({
  selector: 'app-update-sprint',
  templateUrl: './update-sprint.component.html',
  styleUrls: ['./update-sprint.component.scss']
})
export class UpdateSprintComponent implements OnInit {

  modalRef: BsModalRef;
  @Input() sprintData: Sprint;
  private sprint: Sprint;
  constructor(private modalService: BsModalService, public formBuilder: FormBuilder, private sprintsRepo: SprintsRepoService) {
  }

  openModal(template: TemplateRef<any>) {
    this.copyStory();
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  update() {
    this.sprintsRepo.update(this.sprint);
    this.closeModal();
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
