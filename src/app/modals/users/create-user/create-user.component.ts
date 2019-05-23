import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsersRepoService } from 'src/app/repositories/users/users-repo.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  modalRef: BsModalRef;
  public user: User;

  constructor(private modalService: BsModalService, public formBuilder: FormBuilder, private usersRepo: UsersRepoService) {


  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  create() {
    this.usersRepo.add(this.user);
    this.closeModal();
    this.resetFields();
  }

  resetFields() {
    this.user = new User();
  }

  ngOnInit() {
    this.resetFields();
  }

}
