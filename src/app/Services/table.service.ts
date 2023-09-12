import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Table } from '../interfaces/Table';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  private readonly BASE_URL="https://localhost:5001/api/";
  

  constructor(private httpClient:HttpClient) { }

 
  getAllTable()
  {    
    return this.httpClient.get<Table[]>(`${this.BASE_URL}Table`)
  }
}
