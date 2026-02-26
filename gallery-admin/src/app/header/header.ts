import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Api } from '../services/api';
import { Subscription } from 'rxjs';
import { Requirements } from '../interfaces';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { KeyDialogComponent } from '../dialogs/key/key';
import { SftpSettings } from '../dialogs/sftp-settings/sftp-settings';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, OnDestroy {

  private api: Api = inject(Api);
  readonly dialog = inject(MatDialog);

  private subscription: Subscription;

  constructor() {
    this.subscription = this.api.getRequirements().subscribe( (requirements: Requirements) => {
      console.log("requirements", requirements);
    } );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log("Check for key requirement...");
  }

  openKeyDialog() {
    const dialogRef = this.dialog.open(KeyDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSettingsDialog() {
    const dialogRef = this.dialog.open(SftpSettings);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
