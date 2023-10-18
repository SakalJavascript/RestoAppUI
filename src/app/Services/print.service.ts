// pdf-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  private apiUrl = 'https://localhost:5001/api/Order/pdf';

  constructor(private http: HttpClient) { }

  getPdfFile(): Observable<Blob> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.http.get(this.apiUrl, { responseType: 'blob', headers });
  }
 
}
