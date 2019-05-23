import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseRepoService } from '../BaseRepo/base-repo.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})

export class UsersRepoService extends BaseRepoService<User> {
  constructor(private dbInj: AngularFirestore) {
    super(dbInj, 'users');
  }

}
