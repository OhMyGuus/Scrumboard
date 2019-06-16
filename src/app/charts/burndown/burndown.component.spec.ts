import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurndownComponent } from './burndown.component';
import { defaultbed } from 'src/testsuite/defaulttestbed';

defaultbed.declarations = [
  BurndownComponent,
];

describe('BurndownComponent', () => {
  let component: BurndownComponent;
  let fixture: ComponentFixture<BurndownComponent>;
  //
  beforeEach(async(() => {
    TestBed.configureTestingModule(defaultbed)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurndownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
