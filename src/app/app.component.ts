import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scrumboard';

  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'test',
      url: '/test',
      icon: 'albums'
    },
    {
      title: 'stories',
      url: '/stories',
      icon: 'albums'
    },
    {
      title: 'Users',
      url: '/users',
      icon: 'users'
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {

  }

}
