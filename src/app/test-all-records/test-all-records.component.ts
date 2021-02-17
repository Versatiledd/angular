import { Component, OnInit } from '@angular/core';
import { AllRecordsTable } from '../shared/dataTable.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-all-records',
  templateUrl: './test-all-records.component.html',
  styleUrls: ['./test-all-records.component.css'],
})
export class TestAllRecordsComponent implements OnInit {
  records: AllRecordsTable[] = [];
  dataSource: any[] = JSON.parse(localStorage.getItem('data'));
  displayedColumns: string[] = [
    'data',
    'name',
    'dane',
    'hour1',
    'hour2',
    'hour3',
    'action',
  ];
  isEditted = null;
  local = JSON.parse(localStorage.getItem('data'));
  globalData: FormGroup;

  constructor() {}

  ngOnInit(): void {
    if (this.local === null) {
      localStorage.setItem('data', JSON.stringify([]));
    }
    this.globalData = new FormGroup({
      faktury: new FormGroup({
        morning: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        afternoon: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        night: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
      }),
      paragony: new FormGroup({
        morning: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        afternoon: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        night: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
      }),
      zwroty: new FormGroup({
        morning: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        afternoon: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        night: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
      }),
      zlecenieTransportu: new FormGroup({
        morning: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        afternoon: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        night: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
      }),
      zlecenieTelefoniczne: new FormGroup({
        morning: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        afternoon: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        night: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
      }),
      zapytaniaKlienta: new FormGroup({
        morning: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        afternoon: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        night: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
      }),
    });

    this.globalData.valueChanges.subscribe((value) => console.log(value));
  }

  onSubmit() {
    console.log(this.globalData.valueChanges);
  }

  onAddRecord(record: AllRecordsTable) {
    this.dataSource.push(record);
    this.dataSource = [...this.dataSource];

    localStorage.setItem('data', JSON.stringify(this.dataSource));
  }
  deleteItem(elem) {
    const idEl = this.dataSource.indexOf(elem);
    const newDate = this.dataSource.filter((el, i) => i !== idEl);
    this.dataSource = [...newDate];

    localStorage.setItem('data', JSON.stringify(this.dataSource));
  }
  editItem(elem) {
    this.globalData.enable();
    const idEl = this.dataSource.indexOf(elem);
    const findEl = this.dataSource.map((el, i) => {
      if (i === idEl) {
        el.record.edit = true;
      }
      return el;
    });
    this.dataSource = [...findEl];

    localStorage.setItem('data', JSON.stringify(this.dataSource));
  }
  saveData(elem) {
    this.globalData.disable();
    const idEl = this.dataSource.indexOf(elem);
    const findEl = this.dataSource.map((el, i) => {
      if (i === idEl) {
        el.record.edit = false;
      }
      return el;
    });
    this.dataSource = [...findEl];

    localStorage.setItem('data', JSON.stringify(this.dataSource));
  }
}
