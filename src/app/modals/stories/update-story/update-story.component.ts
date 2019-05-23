import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userstory } from 'src/app/models/userstory';
import { StoriesRepoService } from 'src/app/repositories/Stories/Stories-repo.service';

@Component({
  selector: 'app-update-story',
  templateUrl: './update-story.component.html',
  styleUrls: ['./update-story.component.scss']
})
export class UpdateStoryComponent implements OnInit {

  modalRef: BsModalRef;
  @Input() storyData: Userstory;
  private story: Userstory;
  constructor(private modalService: BsModalService, public formBuilder: FormBuilder, private storiesRepo: StoriesRepoService) {
  }

  openModal(template: TemplateRef<any>) {
    this.copyStory();
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  update() {
    this.storiesRepo.update(this.story);
    this.closeModal();
  }

  resetFields() {
    this.story = new Userstory();
  }

  copyStory() {
    this.story = Object.assign({}, this.storyData);
  }

  ngOnInit() {
  }

}
