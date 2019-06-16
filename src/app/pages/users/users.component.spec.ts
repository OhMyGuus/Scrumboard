import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { defaultbed } from '../../../testsuite/defaulttestbed';
import { CreateModalMockComponent, UpdateModalMockComponent } from 'src/testsuite/component-mocks';

defaultbed.declarations = [
  UsersComponent,
  CreateModalMockComponent,
  UpdateModalMockComponent
];

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(defaultbed)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show list', () => {
    expect(component).toBeTruthy();
    const trcount = fixture.nativeElement.querySelectorAll('tr').length;
    expect(trcount).toBe(2);
  });
});
