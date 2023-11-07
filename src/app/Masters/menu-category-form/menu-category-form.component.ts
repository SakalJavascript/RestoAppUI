import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuCategoryService } from 'src/app/Services/menu-category.service';
import {MenuCategory} from 'src/app/interfaces/MenuCategory'
import { ResponseDto } from 'src/app/interfaces/Response';

@Component({
  selector: 'app-menu-category-form',
  templateUrl: './menu-category-form.component.html',
  styleUrls: ['./menu-category-form.component.css'],  
  
})
export class MenuCategoryFormComponent implements OnInit {

  form:FormGroup= new FormGroup({
    ID:new FormControl(),
    Name:new FormControl('',Validators.required),
    Description: new FormControl(''),
    IsDeleted:new FormControl(false)
  })
  

  IsErrors=false
  Errors:{ [key: number]: string; } | undefined;

  constructor(private menuCategoryService:MenuCategoryService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   
    const Id=this.activatedRoute.snapshot.params["id"];
    this.menuCategoryService.getById(Id).subscribe(
      (response)=>{
        this.form.patchValue(response.Data!)
      }
    )
  }

  Submit()
  {
    let menuCat:MenuCategory=this.form.value;    
    this.menuCategoryService.add(menuCat).subscribe(
    {
      next:()=>{      
     
      this.form.reset();
      this.cancel()
    },
    error:(error)=>{         
      this.IsErrors=true
    }})
  }

 
  edit(menuCategory:MenuCategory)
  {
    this.form.patchValue(menuCategory)
  }  
 
  
  close()
  {
    this.IsErrors=false
    this.form.reset();
  }

  SetError(event:{IsErrors: boolean,Errors:any})
  {
    this.IsErrors=event.IsErrors
    this.Errors=event.Errors;
  }

  cancel()
  {
     this.router.navigate(['/home-page','masters','menu-category']);
  }
  

}
