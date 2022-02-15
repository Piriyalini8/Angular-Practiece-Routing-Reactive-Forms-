import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTimeJobComponent } from './full-time-job.component';

describe('FullTimeJobComponent', () => {
  let component: FullTimeJobComponent;
  let fixture: ComponentFixture<FullTimeJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTimeJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTimeJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
