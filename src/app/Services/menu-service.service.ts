import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/Menu';
import { KitchenOrderDetail } from '../interfaces/KitchenOrderDetail';
import { Order } from '../interfaces/Order';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly BASE_URL="https://localhost:5001/api/";
 
 constructor(private httpClient:HttpClient) { 
  
 }

 getByCategoryID(categoryID:number)
 {
   return this.httpClient.get<Menu[]>(`${this.BASE_URL}Menu?categoryID=${categoryID}`);
 }

 SaveOrder( order:Order)
 {  
  return this.httpClient.post(`${this.BASE_URL}Menu`, order);
 }

}
