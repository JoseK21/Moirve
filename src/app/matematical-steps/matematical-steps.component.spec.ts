import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatematicalStepsComponent } from './matematical-steps.component';

describe('MatematicalStepsComponent', () => {
  let component: MatematicalStepsComponent;
  let fixture: ComponentFixture<MatematicalStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatematicalStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatematicalStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
