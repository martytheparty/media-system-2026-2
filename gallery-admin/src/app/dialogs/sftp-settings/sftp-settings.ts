import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


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

form = this.fb.nonNullable.group({
  username: ['', Validators.required],
  password: ['', Validators.required],
  remoteDirectory: ['', Validators.required]
});

onSubmit() {

}
  
}
