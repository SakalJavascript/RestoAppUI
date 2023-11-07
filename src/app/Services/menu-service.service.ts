import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/Menu';
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
  return this.httpClient.post(`${this.BASE_URL}Menu/SaveOrder`, order);
 }

 Save( menu:Menu)
 {  
  return this.httpClient.post<string>(`${this.BASE_URL}Menu`, menu);
 }

 getMenu(pageIndex:number,pageSize:number)
 {
   return this.httpClient.get<Menu[]>(`${this.BASE_URL}Menu/${pageIndex}/${pageSize}`);
 }

}
