import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  private readonly BASE_URL="https://localhost:5001/api/";

  login(login:Login)
  {
    const token= this.httpClient.post<{JwtToken:String}>(`${this.BASE_URL}Auth/Login`,login);  
    return token;    
  }
}
