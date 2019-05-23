import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './pages/test/test.component';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { CreateStoryComponent } from './modals/stories/create-story/create-story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { UpdateUserComponent } from './modals/users/update-user/update-user.component';
import { CreateUserComponent } from './modals/users/create-user/create-user.component';
import { UpdateStoryComponent } from './modals/stories/update-story/update-story.component';
import { UpdateSprintComponent } from './modals/sprints/update-sprint/update-sprint.component';
import { CreateSprintComponent } from './modals/sprints/create-sprint/create-sprint.component';
import { SprintsComponent } from './pages/sprints/sprints.component';
import { SprintDetailsComponent } from './pages/sprint-details/sprint-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardComponent,
    StoriesComponent,
    CreateStoryComponent,
    UpdateStoryComponent,
    UsersComponent,
    UpdateUserComponent,
    CreateUserComponent,
    UpdateSprintComponent,
    CreateSprintComponent,
    SprintsComponent,
    SprintDetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
