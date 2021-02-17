import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAllRecordsComponent } from './test-all-records.component';

describe('TestAllRecordsComponent', () => {
  let component: TestAllRecordsComponent;
  let fixture: ComponentFixture<TestAllRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAllRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAllRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
