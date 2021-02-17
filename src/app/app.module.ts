import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Material Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material UI
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
//
import { TestAllRecordsComponent } from './test-all-records/test-all-records.component';
import { TestSingleRecordComponent } from './test-all-records/test-single-record/test-single-record.component';
import { TestFormComponent } from './test-all-records/test-form/test-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestAllRecordsComponent,
    TestSingleRecordComponent,
    TestFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
