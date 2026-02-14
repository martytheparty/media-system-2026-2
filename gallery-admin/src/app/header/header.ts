import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Api } from '../services/api';
import { Subscription } from 'rxjs';
import { Requirements } from '../interfaces';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, OnDestroy {

  private api: Api = inject(Api);

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

}
