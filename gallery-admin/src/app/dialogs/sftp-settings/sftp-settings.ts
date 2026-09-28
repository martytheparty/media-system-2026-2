import { Component, inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Api } from '../../services/api';
import { SftpCredentials, TestResult } from '../../interfaces';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { KeyService } from '../key/key-service';


@Component({
  selector: 'app-sftp-settings',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
  ],
  templateUrl: './sftp-settings.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sftp-settings.scss',
})
export class SftpSettings {
  private fb = inject(FormBuilder);
  private api: Api = inject(Api);
  keyService: KeyService = inject(KeyService);
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  credentialsValidated = false;
  testingInProcess = false;
  testComplete = false;

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    server: ['', Validators.required],
    remoteDirectory: ['', Validators.required],
    key: ['']
  });

  saveSettings(): void {
    console.log(this.form.controls.username.value, this.form.controls.password.value, this.form.controls.remoteDirectory.value);
  }

  testSettings(): void {
    this.testingInProcess = true;
    const testCredentials: SftpCredentials = {
      username: this.form.controls.username.value,
      password: this.form.controls.password.value,
      domain: this.form.controls.server.value,
      remoteDirectory: this.form.controls.remoteDirectory.value
    };
    this.api
    .testSftpCredentials(testCredentials)
    .subscribe(
      (testResult: TestResult) => {
        this.credentialsValidated = testResult.result;

        this.testingInProcess = false;
        this.testComplete = true;
        // Material dialog view sometimes does not refresh automatically
        // after async credential validation.
        this.changeDetectorRef.detectChanges();
      }
    );
  }
  
}
