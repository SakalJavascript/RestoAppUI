import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuCategoryService } from 'src/app/Services/menu-category.service';
import { MenuService } from 'src/app/Services/menu-service.service';
import { Menu } from 'src/app/interfaces/Menu';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  imageUrl: any;
  constructor(private MenuCategoryService:MenuCategoryService,
              private menuService:MenuService) { }
  $menuCatageries=this.MenuCategoryService.get(1,10)

  form:FormGroup= new FormGroup({
    ID:new FormControl(0),
    MenuName:new FormControl('',Validators.required),
    Description: new FormControl(''),
    CategoryID:new FormControl(-1,Validators.required),
    IsDeleted:new FormControl(false),
    Price: new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
})

  
  ngOnInit(): void {
    
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  Save()
  {
    let menu:Menu=this.form.value;
    this.menuService.Save(menu).subscribe(data=>
      { 
          console.log(data)
          this.form.reset();
      },
      (Error)=>{
        console.log(Error)
      }
    );
  }

}
