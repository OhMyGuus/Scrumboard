import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesComponent } from './stories.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { defaultbed } from '../../../testsuite/defaulttestbed';
import { UpdateStoryMockComponent, CreateStoryMockComponent } from 'src/testsuite/component-mocks';

defaultbed.declarations = [ StoriesComponent, UpdateStoryMockComponent, CreateStoryMockComponent ];


describe('StoriesComponent', () => {
  let component: StoriesComponent;
  let fixture: ComponentFixture<StoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(defaultbed)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
