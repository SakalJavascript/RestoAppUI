import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormMaster } from '../interfaces/FormMaster';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  
  private readonly BASE_URL="https://localhost:5001/api/";

  constructor(private httpClient:HttpClient) { }

  getALlForm()
  {
     return this.httpClient.get<FormMaster[]>(`${this.BASE_URL}Form`)
  }

}
