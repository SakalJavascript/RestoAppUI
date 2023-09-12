import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderViewModal } from '../interfaces/OrderViewModal';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly BASE_URL="https://localhost:5001/api/";
  

  constructor(private httpClient:HttpClient) { }

  getOrder(orderId:number)
  {
    
    return this.httpClient.get<OrderViewModal>(`${this.BASE_URL}Order/${orderId}`)
  }
  getAllOrder()
  {
    
    return this.httpClient.get<OrderViewModal[]>(`${this.BASE_URL}Order`)
  }
}
