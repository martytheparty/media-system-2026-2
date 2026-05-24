import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Api } from '../../services/api';
import { SftpCredentials, TestResult } from '../../interfaces';


@Component({
  selector: 'app-sftp-settings',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './sftp-settings.html',
  styleUrl: './sftp-settings.scss',
})
export class SftpSettings {
  private fb = inject(FormBuilder);
  private api: Api = inject(Api);
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  credentialsValidated = false;

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    server: ['', Validators.required],
    remoteDirectory: ['', Validators.required]
  });

  saveSettings(): void {
    console.log(this.form.controls.username.value, this.form.controls.password.value, this.form.controls.remoteDirectory.value);
  }

  testSettings(): void {
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

        // Material dialog view sometimes does not refresh automatically
        // after async credential validation.
        this.changeDetectorRef.detectChanges();
      }
    );
  }
  
}
