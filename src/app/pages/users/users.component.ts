import { Component, OnInit } from '@angular/core';
import { UsersRepoService } from 'src/app/repositories/users/users-repo.service';
import { Userstory } from 'src/app/models/userstory';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Observable<User[]>;
  constructor(private usersRepo: UsersRepoService) {
    this.users = usersRepo.observe();
  }

  delete(user: User) {
    console.log('delete', user);
    this.usersRepo.remove(user);
  }

  ngOnInit() {
  }

}
