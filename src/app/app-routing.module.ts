import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { UsersComponent } from './pages/users/users.component';
import { SprintsComponent } from './pages/sprints/sprints.component';
import { SprintDetailsComponent } from './pages/sprint-details/sprint-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/sprints', pathMatch: 'full' },
  {
    path: 'test', component: TestComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'stories', component: StoriesComponent
  },
  {
    path: 'sprints', component: SprintsComponent
  },
  {
    path: 'sprints/:id', component: SprintDetailsComponent
  },
  {
    path: 'users', component: UsersComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
