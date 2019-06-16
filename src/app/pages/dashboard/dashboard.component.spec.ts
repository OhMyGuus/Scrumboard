import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { defaultbed } from 'src/testsuite/defaulttestbed';
import {  CreateModalMockComponent, UpdateModalMockComponent, BurndownMockComponent } from 'src/testsuite/component-mocks';
import {DragDropModule} from '@angular/cdk/drag-drop';

defaultbed.declarations = [
  DashboardComponent,
  CreateModalMockComponent,
  UpdateModalMockComponent,
  BurndownMockComponent
];


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(defaultbed)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
