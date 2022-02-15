import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTimeJobComponent } from './part-time-job.component';

describe('PartTimeJobComponent', () => {
  let component: PartTimeJobComponent;
  let fixture: ComponentFixture<PartTimeJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartTimeJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTimeJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
