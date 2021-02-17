import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllRecordsTable } from 'src/app/shared/dataTable.model';

@Component({
  selector: 'app-test-single-record',
  templateUrl: './test-single-record.component.html',
  styleUrls: ['./test-single-record.component.css'],
})
export class TestSingleRecordComponent implements OnInit {
  dataSource = [{}];
  displayedColumns: string[] = [
    'data',
    'name',
    'dane',
    'hour1',
    'hour2',
    'hour3',
  ];
  globalData: FormGroup;
  testData = {
    shopDate: {
      infoWorker: {},
      dane: {},
    },
  };
  information: any;
  showComponent = false;

  //
  // wysyłam dane do rodzica
  @Output() addRecord = new EventEmitter<AllRecordsTable>();
  //
  constructor() {}
  ngOnInit(): void {
    this.information = {
      date: null,
      shop: '',
      worker: '',
    };

    this.globalData = new FormGroup({
      faktury: new FormGroup({
        morning: new FormControl(null, Validators.required),
        afternoon: new FormControl(null, Validators.required),
        night: new FormControl(null, Validators.required),
      }),
      paragony: new FormGroup({
        morning: new FormControl(null, Validators.required),
        afternoon: new FormControl(null, Validators.required),
        night: new FormControl(null, Validators.required),
      }),
      zwroty: new FormGroup({
        morning: new FormControl(null, Validators.required),
        afternoon: new FormControl(null, Validators.required),
        night: new FormControl(null, Validators.required),
      }),
      zlecenieTransportu: new FormGroup({
        morning: new FormControl(null, Validators.required),
        afternoon: new FormControl(null, Validators.required),
        night: new FormControl(null, Validators.required),
      }),
      zlecenieTelefoniczne: new FormGroup({
        morning: new FormControl(null, Validators.required),
        afternoon: new FormControl(null, Validators.required),
        night: new FormControl(null, Validators.required),
      }),
      zapytaniaKlienta: new FormGroup({
        morning: new FormControl(null, Validators.required),
        afternoon: new FormControl(null, Validators.required),
        night: new FormControl(null, Validators.required),
      }),
    });
  }

  onSubmit() {
    const {
      faktury,
      paragony,
      zwroty,
      zlecenieTransportu,
      zlecenieTelefoniczne,
      zapytaniaKlienta,
    } = this.globalData.value;

    if (
      faktury.morning &&
      faktury.afternoon &&
      faktury.night &&
      paragony.morning &&
      paragony.afternoon &&
      paragony.night &&
      zwroty.morning &&
      zwroty.afternoon &&
      zwroty.night &&
      zlecenieTransportu.morning &&
      zlecenieTransportu.afternoon &&
      zlecenieTransportu.night &&
      zlecenieTelefoniczne.morning &&
      zlecenieTelefoniczne.afternoon &&
      zlecenieTelefoniczne.night &&
      zapytaniaKlienta.morning &&
      zapytaniaKlienta.afternoon &&
      zapytaniaKlienta.night
    ) {
      const dane = this.globalData.value;
      const infoWorker = this.information;

      this.testData = {
        shopDate: {
          infoWorker,
          dane,
        },
      };
      const newRecord = new AllRecordsTable(this.testData);
      this.addRecord.emit(newRecord);
      this.globalData.reset();
      this.showComponent = false;
    } else {
      console.log('Uzupełnij wszystkie pola');
    }
  }
  takeValues(date) {
    this.information = date;
  }

  takeFlagComponent(flag) {
    console.log(flag);
    this.showComponent = flag;
  }
}
