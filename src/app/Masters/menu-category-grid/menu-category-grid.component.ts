
import {  Component, EventEmitter, Input,  OnInit,  Output, TemplateRef,  } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { map, switchMap  } from 'rxjs';
import { MenuCategoryService } from 'src/app/Services/menu-category.service';
import { MenuCategory } from 'src/app/interfaces/MenuCategory';



@Component({
  selector: 'app-menu-category-grid',
  templateUrl: './menu-category-grid.component.html',
  styleUrls: ['./menu-category-grid.component.css'],
  
})
export class MenuCategoryGridComponent implements OnInit {
 
 
  @Output()
  SetError=new EventEmitter<{IsErrors: boolean,Errors:any}>()  
 

   menuCategory:MenuCategory | undefined;
   modalRef: BsModalRef |undefined;
   searchText=''

   $menuCategories=  this.menuCategoryService.get(1,10)  
                            .pipe(
                              map(response=>response.Data)
                            )
   $total=  this.menuCategoryService.getCount().pipe(
    map(response=>response.Data)
  );                         
  constructor(private modalService: BsModalService,
              private menuCategoryService:MenuCategoryService,
              private router:Router) { }   
  ngOnInit(): void {
  
  }

  edit(menuCategory:MenuCategory)
  {
    this.router.navigate(['/home-page','masters','menu-category-form',menuCategory.ID])
  }
  
  
  openConfirmationModal(template: TemplateRef<any>,menuCategory:MenuCategory) {    
    this.menuCategory=menuCategory; 
    this.modalRef = this.modalService.show(template, { class: 'modal-dialog-centered' });
  }

  confirm() {
      this.menuCategory!.IsDeleted=true;
      this.$menuCategories= this.menuCategoryService.add(this.menuCategory!)
      .pipe(
      switchMap(()=> {return this.menuCategoryService.get(1,10)}),
      map(response=>response.Data)
    )  
    this.modalRef?.hide();
  }

  decline() {    
    this.modalRef?.hide();
  }

  searchChage(searchText:string)
  {
    if(searchText!='')
       this.$menuCategories= this.menuCategoryService.Search(searchText);
    else
        this.$menuCategories=  this.menuCategoryService.get(1,10)  
        .pipe(
          map(response=>response.Data)
    )
  }
  
  AddNew()
  {
    this.router.navigate(['/home-page','masters','menu-category-form'])
  }

  pageChange(event:{ pageIndex: number; pageSize: number; })
  {
    this.$menuCategories=  this.menuCategoryService.get(event.pageIndex,event.pageSize)  
    .pipe(
      map(response=>response.Data)
    )
  }

}
