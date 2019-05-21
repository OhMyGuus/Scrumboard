import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userstory } from 'src/app/models/userstory';
import { StoriesRepoService } from 'src/app/repositories/Stories/Stories-repo.service';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.scss']
})
export class CreateStoryComponent implements OnInit {

  modalRef: BsModalRef;
  public story: Userstory;
  public createStory: FormGroup;

  constructor(private modalService: BsModalService, public formBuilder: FormBuilder, private storiesRepo: StoriesRepoService) {
    this.createStory = formBuilder.group({
      tag: ['', Validators.compose([
        Validators.maxLength(50), Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.required
      ])],
      name: ['', Validators.compose([
        Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.required
      ])],
    });

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  create() {
    console.log('Create story', this.story.description, this.story.points);
    this.storiesRepo.add(this.story);
    this.closeModal();
    this.resetFields();
  }

  resetFields() {
    this.story = {
      name: '',
      description: ''
    };
  }

  ngOnInit() {
    this.resetFields();
  }

}
