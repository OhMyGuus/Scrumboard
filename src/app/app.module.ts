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
import { CreateStoryComponent } from './modals/create-story/create-story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateStoryComponent } from './modals/update-story/update-story.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardComponent,
    StoriesComponent,
    CreateStoryComponent,
    UpdateStoryComponent
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
