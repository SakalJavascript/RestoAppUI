import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuCategoryService } from 'src/app/Services/menu-category.service';
import {MenuCategory} from 'src/app/interfaces/MenuCategory'

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
  
  @Output()
  submit= new EventEmitter();
  menuCategories: MenuCategory[]=[];
  IsErrors=false
  Errors:{ [key: number]: string; } | undefined;

  constructor(private menuCategoryService:MenuCategoryService) { }

  ngOnInit(): void {
    this.onLoad()
  }

  Submit()
  {
    let menuCat:MenuCategory=this.form.value;    
    this.menuCategoryService.add(menuCat).subscribe(
    {
      next:()=>{      
      this.onLoad();
      this.form.reset();
    },
    error:(error)=>{     
      this.IsErrors=true
    }})
  }

  onLoad()
  {   
    this.menuCategoryService.get(1).subscribe(      
      response=>
      {
        if(response.IsSuccess)
          this.menuCategories=response.Data
        else
        {
          this.IsErrors=true
          this.Errors=response.Errors;
        }
          
      },(error)=>{
        this.IsErrors=true
        this.Errors=error.error.Errors;
      }

    );
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
 
  

}
