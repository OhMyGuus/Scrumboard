import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseRepoService } from '../BaseRepo/base-repo.service';
import { User } from 'src/app/models/user';
import { IRepository } from '../IRepository';

@Injectable({
  providedIn: 'root'
})

export class UsersRepoService extends BaseRepoService<User> implements IRepository {
  constructor(private dbInj: AngularFirestore) {
    super(dbInj, 'users');
  }

  createModel() {
    return new User();
  }

}
