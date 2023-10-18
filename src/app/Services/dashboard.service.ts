import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangeTable } from '../interfaces/ChangeTable';
import { CatWiseTotal } from '../interfaces/CatWiseTotal';
import { OrderTypeWiseCount } from '../interfaces/OrderTypeWiseCount';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly BASE_URL="https://localhost:5001/api/";
  

  constructor(private httpClient:HttpClient) { }

 
  getCatWiseTotal(startDate:string,endDate:string)
  {   
    
    return this.httpClient.get<CatWiseTotal[]>(`${this.BASE_URL}Dashboard/${encodeURIComponent(startDate)}/${encodeURIComponent(endDate)}`)
  }
  GetOrdeTypeWiseCount(startDate:string,endDate:string)
  { 
    
    return this.httpClient.get<OrderTypeWiseCount[]>(`${this.BASE_URL}Dashboard/order-type-wise-count/${encodeURIComponent(startDate)}/${encodeURIComponent(endDate)}`)
  }

}
