
import {  Component, EventEmitter, Input,  OnInit,  Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject,  debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { MenuCategoryService } from 'src/app/Services/menu-category.service';
import { MenuCategory } from 'src/app/interfaces/MenuCategory';



@Component({
  selector: 'app-menu-category-grid',
  templateUrl: './menu-category-grid.component.html',
  styleUrls: ['./menu-category-grid.component.css'],
  
})
export class MenuCategoryGridComponent implements OnInit {
  @Input()
  menuCategories: MenuCategory[]=[]; 
 
  @Output()
  SetError=new EventEmitter<{IsErrors: boolean,Errors:any}>()

  @Output()
   onEdit=new EventEmitter<MenuCategory>()

   @Output()
   onDelete=new EventEmitter()
 

   menuCategory:MenuCategory | undefined;
   modalRef: BsModalRef |undefined;
   searchText=''
   inputSubject:Subject<string>=new Subject<string>();
   
  constructor(private modalService: BsModalService,private menuCategoryService:MenuCategoryService) { }   
  ngOnInit(): void {
    this.inputSubject.pipe(
      debounceTime(2000),
       distinctUntilChanged(),
      switchMap(text =>
        {
          if(text!=='')
            return this.menuCategoryService.Search(text);
          else
            return this.menuCategoryService.get(1);
        }
      )
    ).subscribe((response)=>{   
      if(response.IsSuccess)
          this.menuCategories=response.Data
        else
        {
          this.SetError.emit({ IsErrors:true,Errors:response.error.Errors})
          
        }
    }
    
    )
  }

  edit(menuCategory:MenuCategory)
  {
    this.onEdit.emit(menuCategory);
  }
  
  
  openConfirmationModal(template: TemplateRef<any>,menuCategory:MenuCategory) {    
    this.menuCategory=menuCategory; 
    this.modalRef = this.modalService.show(template, { class: 'modal-dialog-centered' });
  }

  confirm() {
      this.menuCategory!.IsDeleted=true;
    this.menuCategoryService.add(this.menuCategory!).subscribe({
      next:()=>{this.onDelete.emit()
      }
    }

    )  
    this.modalRef?.hide();
  }

  decline() {    
    this.modalRef?.hide();
  }

  inputChange()
  {
    this.inputSubject.next(this.searchText);
  }

}
