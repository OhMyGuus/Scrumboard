import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintDetailsComponent } from './sprint-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { defaultbed } from '../../../testsuite/defaulttestbed';
import { CreateModalMockComponent, UpdateModalMockComponent } from 'src/testsuite/component-mocks';

defaultbed.declarations = [
  SprintDetailsComponent,
  CreateModalMockComponent,
  UpdateModalMockComponent
];

describe('SprintDetailsComponent', () => {
  let component: SprintDetailsComponent;
  let fixture: ComponentFixture<SprintDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(defaultbed)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show list', () => {
    expect(component).toBeTruthy();
    const trcount = fixture.nativeElement.querySelectorAll('tr').length;
    expect(trcount).toBe(5);
  });
});
