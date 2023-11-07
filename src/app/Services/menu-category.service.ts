 import { Injectable } from '@angular/core';
import {MenuCategory} from 'src/app/interfaces/MenuCategory'
import {HttpClient} from '@angular/common/http'
 import {EMPTY, Subject, catchError, map, observable, of, tap} from 'rxjs'
import { ResponseDto } from '../interfaces/Response';

@Injectable({
 providedIn: 'root'
})

export class MenuCategoryService {
  private readonly BASE_URL="https://localhost:5001/api/";
   public errorSubject= new Subject<string>()
  constructor(private httpClient:HttpClient) { 
   
  }

  get(pagNumber:number,pageSize:number)
  {
    return this.httpClient
    .get<ResponseDto<MenuCategory[]>>(`${this.BASE_URL}MenuCategory?Pagesize=${pageSize}&PageNumber=${pagNumber}`)    
    
  }

  getCount()
  {
    return this.httpClient
    .get<ResponseDto<number>>(`${this.BASE_URL}MenuCategory/count`)    
    
  }

  add(menuCategory:MenuCategory)
  {
    const message= this.httpClient.post<string>(`${this.BASE_URL}MenuCategory`,menuCategory);  
    return message;    
  }
  
  Search(SearchText: string) {
    return this.httpClient.get<ResponseDto<MenuCategory[]>>(`${this.BASE_URL}MenuCategory/${SearchText}`).pipe(
      map(reponse=>reponse.Data)
    )
  }

  getById(Id:number)
  {
    return this.httpClient
    .get<ResponseDto<MenuCategory>>(`${this.BASE_URL}MenuCategory/${Id}`)    
    
  }

  
}
