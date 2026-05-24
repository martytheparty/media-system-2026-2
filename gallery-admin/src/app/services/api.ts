import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirements, SftpCredentials, TestResult } from '../interfaces';

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

  testSftpCredentials(sftpCredentials: SftpCredentials): Observable<TestResult> {
    const endpoint = "/sftp/testCredentials";
    return this.httpClient.post<TestResult>(this.apiUrl + endpoint, sftpCredentials);
  }
  
}
