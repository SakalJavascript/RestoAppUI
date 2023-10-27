import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KichenOrderViewModal, KitchenOrderDetailViewModal, OrderViewModal } from '../interfaces/OrderViewModal';

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
  getAllOrder(pageIndex:number,pageNumber:number)
  {
    
    return this.httpClient.get<OrderViewModal[]>(`${this.BASE_URL}Order/${pageIndex}/${pageNumber}`)
  }

  getAllOrdersByTables(tableIds:string)
  {    
    return this.httpClient.get<KitchenOrderDetailViewModal[]>(`${this.BASE_URL}Order/table-bills/${tableIds}`)
  }
  SaveTableBilling(tableIds:string)
  {    
    return this.httpClient.post(`${this.BASE_URL}Order/table-bills/${tableIds}`,tableIds)
  }
  getKitchenOrdersById(orderId:number)
  {    
    return this.httpClient.get<KichenOrderViewModal[]>(`${this.BASE_URL}Order/kitchen/${orderId}`)
  }

  getAllOrderCount()
  {
    return this.httpClient.get<number>(`${this.BASE_URL}Order/count`);
  }
  
}
