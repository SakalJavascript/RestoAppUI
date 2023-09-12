 import { Injectable } from '@angular/core';
import {MenuCategory} from 'src/app/interfaces/MenuCategory'
import {HttpClient} from '@angular/common/http'
 import {EMPTY, Subject, catchError, observable, of, tap} from 'rxjs'
import { ResponseDto } from '../interfaces/Response';

@Injectable({
 providedIn: 'root'
})

export class MenuCategoryService {
  private readonly BASE_URL="https://localhost:5001/api/";
   public errorSubject= new Subject<string>()
  constructor(private httpClient:HttpClient) { 
   
  }

  get(pagNumber:number)
  {
    return this.httpClient
    .get<ResponseDto<MenuCategory[]>>(`${this.BASE_URL}MenuCategory?Pagesize=10&PageNumber=${pagNumber}`)    
    
  }

  add(menuCategory:MenuCategory)
  {
    const message= this.httpClient.post<string>(`${this.BASE_URL}MenuCategory`,menuCategory);  
    return message;    
  }

  Search(SearchText:string)
  {
    return this.httpClient.get<ResponseDto<MenuCategory[]>>(`${this.BASE_URL}MenuCategory/${SearchText}`).pipe(
      catchError((error) => of(error))
    );    
  }

  
}
