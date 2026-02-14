import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirements } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class Api {

  private apiUrl = 'http://localhost:3000';
  private httpClient: HttpClient = inject(HttpClient);

  getRequirements(): Observable<Requirements> {
    const endpoint = "/requirements";
    return this.httpClient.get<Requirements>(this.apiUrl + endpoint);
  }
  
}
