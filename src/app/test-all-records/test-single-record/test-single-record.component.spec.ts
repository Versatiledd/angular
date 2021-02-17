import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSingleRecordComponent } from './test-single-record.component';

describe('TestSingleRecordComponent', () => {
  let component: TestSingleRecordComponent;
  let fixture: ComponentFixture<TestSingleRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSingleRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSingleRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
