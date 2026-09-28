import {
  inject,
  signal, 
  Signal, 
  WritableSignal, 
  Injectable
} from '@angular/core';
import { Api } from '../../services/api';
import { take } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Injectable({
  providedIn: 'root',
})
export class KeyService {
  private readonly _keyRequired: WritableSignal<KeyRequired> = signal<KeyRequired>({keyRequired: false});
  readonly keyRequired: Signal<KeyRequired> = this._keyRequired.asReadonly();

  apiService: Api = inject(Api);

  constructor() {
    this.checkForKeyRequirement();
  }

  checkForKeyRequirement(): void {
    console.log("checkForKeyRequirement");
    this.apiService.getKeyRequired().pipe(take(1)).subscribe(
      (result: KeyRequired) => {
        this._keyRequired.set(result);
        console.log("GOT THE KEY REQUIRED RESULT", result);
      }
    );
  }

  setRequired(event: MatCheckboxChange): void
    {
    // These two need to be tests
    if (event.checked) {
      this
      .apiService
      .setKeyRequired()
      .subscribe( (result) => {
        this.checkForKeyRequirement();
      } );
    } else {
      this
      .apiService
      .unsetKeyRequired()
      .subscribe( (result) => {
        this.checkForKeyRequirement();
      } );
    }
  }
}

