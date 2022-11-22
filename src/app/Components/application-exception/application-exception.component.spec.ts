import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationExceptionComponent } from './application-exception.component';

describe('ApplicationExceptionComponent', () => {
  let component: ApplicationExceptionComponent;
  let fixture: ComponentFixture<ApplicationExceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationExceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
