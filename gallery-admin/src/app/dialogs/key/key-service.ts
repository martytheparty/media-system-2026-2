import {
  inject,
  signal, 
  Signal, 
  WritableSignal, 
  Injectable
} from '@angular/core';
import { Api } from '../../services/api';
import { take } from 'rxjs';

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
}


