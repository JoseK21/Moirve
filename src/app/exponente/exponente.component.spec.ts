import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponenteComponent } from './exponente.component';

describe('ExponenteComponent', () => {
  let component: ExponenteComponent;
  let fixture: ComponentFixture<ExponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
