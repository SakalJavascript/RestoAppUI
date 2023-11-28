import { Component, Input, OnInit } from '@angular/core';
import { FormMaster } from 'src/app/interfaces/FormMaster';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }
  @Input()
  formData:FormMaster[] | undefined |null
  @Input()
  parentId:number | undefined |null;

  parent:FormMaster | undefined

  isShow=true;
  childrens:FormMaster[] | undefined | undefined
  ngOnInit(): void {    
  
      this.parent=this.formData?.find(item=>item.FormID===this.parentId);
      this.childrens = this.formData?.filter(item => item.ParentFormID === this.parentId);

      console.log(this.childrens)
  }

}
