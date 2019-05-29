import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { SprintsComponent } from './pages/sprints/sprints.component';
import { SprintDetailsComponent } from './pages/sprint-details/sprint-details.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {FormlyModule} from '@ngx-formly/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CreateModalComponent } from './modals/create-modal/create-modal.component';
import { UpdateModalComponent } from './modals/update-modal/update-modal.component';
import { BurndownComponent } from './charts/burndown/burndown.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StoriesComponent,
    UsersComponent,
    SprintsComponent,
    SprintDetailsComponent,
    CreateModalComponent,
    UpdateModalComponent,
    BurndownComponent
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
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    DragDropModule,
    NgxChartsModule,
    BrowserAnimationsModule
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
