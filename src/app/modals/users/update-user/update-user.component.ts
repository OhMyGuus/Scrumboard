import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsersRepoService } from 'src/app/repositories/users/users-repo.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  modalRef: BsModalRef;
  @Input() userData: User;
  private user: User;
  constructor(private modalService: BsModalService, public formBuilder: FormBuilder, private usersRepo: UsersRepoService) {
  }

  openModal(template: TemplateRef<any>) {
    this.copyStory();
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  update() {
    this.usersRepo.update(this.user);
    this.closeModal();
  }

  resetFields() {
    this.user = new User();
  }

  copyStory() {
    this.user = Object.assign({}, this.userData);
  }

  ngOnInit() {
  }

}
