import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StoriesComponent } from './pages/stories/stories.component';

const routes: Routes = [
  {
    path: 'test', component: TestComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'stories', component: StoriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
