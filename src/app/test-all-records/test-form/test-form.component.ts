import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css'],
})
export class TestFormComponent implements OnInit {
  formData: FormGroup;
  valuesFromInput = [];
  shopData = [
    'Sklep elektryczny',
    'Sklep Farb',
    'Sklep Metalowy',
    'Sklep Instalacyjny',
    'Magazyn Expo',
  ];
  workerList = ['Mateusz Dudziec', 'Maciej Kowalski', 'Andrzej Kwiatkowski'];
  constructor() {}

  @Output() sendValuesFromInputs = new EventEmitter<Object>();
  @Output() sendShowComponentFlag = new EventEmitter<boolean>();

  ngOnInit() {
    this.formData = new FormGroup({
      date: new FormControl(null, Validators.required),
      shop: new FormControl(null, Validators.required),
      worker: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    if (
      this.formData.value.date &&
      this.formData.value.shop &&
      this.formData.value.worker
    ) {
      this.sendShowComponentFlag.emit(true);
      this.formData.value.date = moment(this.formData.value.date).format(
        'DD.MM.YYYY'
      );
      this.valuesFromInput = this.formData.value;
      this.sendValuesFromInputs.emit(this.valuesFromInput);
      this.formData.reset();
    } else {
      this.sendShowComponentFlag.emit(false);
    }
  }
}
