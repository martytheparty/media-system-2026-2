import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Api } from '../../services/api';
import { KeyService } from './key-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-key-dialog',
  imports: [
    MatDialogModule,
    MatCheckboxModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './key.html',
  styleUrl: './key.scss',
})
export class KeyDialogComponent {
  private api: Api = inject(Api);
  keyService: KeyService = inject(KeyService);

  constructor() {
    effect(
      () => {
        console.log("key service", this.keyService.keyRequired());
      }
    );
  }

  setRequired(event: MatCheckboxChange): void
  {
    // These two need to be tests
    if (event.checked) {
      this
      .api
      .setKeyRequired()
      .subscribe( (result) => {
        console.log("result", result);
      } );
    } else {
      this
      .api
      .unsetKeyRequired()
      .subscribe( (result) => {
        console.log("result", result);
      } );
    }

    // I NEED TO CREATE A SET REQUIRED FUNCTION IN THE API SERVICE
  }
}
