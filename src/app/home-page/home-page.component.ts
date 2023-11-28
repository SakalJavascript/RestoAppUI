import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../Services/form.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  $formData=this.formService.getALlForm();
 
  constructor(private router:Router,private formService:FormService) { }
  title = 'RestoAppUI';
  ShowSidebar=true;
  ngOnInit(): void {
  }
  Logout()
  {
    localStorage.removeItem('JwtToken');
    this.router.navigate(['/login'])

  }

}
