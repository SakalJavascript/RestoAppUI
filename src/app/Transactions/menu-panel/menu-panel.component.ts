import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { MenuCategoryService } from 'src/app/Services/menu-category.service';
import { MenuService } from 'src/app/Services/menu-service.service';
import { KitchenOrderDetail } from 'src/app/interfaces/KitchenOrderDetail';
import { Menu } from 'src/app/interfaces/Menu';
import { MenuCategory } from 'src/app/interfaces/MenuCategory';
import { Order } from 'src/app/interfaces/Order';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {

  constructor(private menuCatSerive:MenuCategoryService, 
              private menuSevice:MenuService, private router:Router,
              private activatedRoute:ActivatedRoute) { }
  menuCatList:MenuCategory[]=[]
  menuList:Menu[]=[]
  itemList:KitchenOrderDetail[]=[]
  grandTotal=0
  isSubmitClicked=false;
  TableId=0
  TableName=''
  currentOrderId=0
  ngOnInit(): void {
  this.TableId=this.activatedRoute.snapshot.params["tableId"]??0
  this.TableName=this.activatedRoute.snapshot.params["TableName"]
 this.currentOrderId= this.activatedRoute.snapshot.params["orderId"]??0
   this.menuCatSerive.get(1).subscribe(response=>{
      this.menuCatList=response.Data;
   }) 
  }

  CatClick(ID:number)
  {
    this.menuSevice.getByCategoryID(ID).subscribe(
      data=>{
          this.menuList=data;
      }
    )
  }

  MenuClick(menu:Menu)
  {
    const foundObject = this.itemList.find(obj => obj.MenuID === menu.ID);
    
    const kitchenOrderDetail:KitchenOrderDetail={
      ID: 0,
      KitchenOrdersId: 0,
      MenuID: menu.ID,
      Quantity: 1,
      Price: menu.Price,      
      MenuName:menu.MenuName
    };

    if(!foundObject)
    {         
      this.itemList.push(kitchenOrderDetail);
    }
   this.MakeGrandTotal()
  }

  MakeGrandTotal()
  {
    this.grandTotal=this.itemList.reduce((total,item)=> total=total+(item.Price*item.Quantity),0);    
  }

  Submit()
  {
    this.isSubmitClicked=true
    if(this.itemList.length<=0)
      return;
    
    const order:Order={
      TableID: this.TableId!=0? this.TableId: -1,
      OrderID: this.currentOrderId ?? 0,
      TotalAmount: this.grandTotal,
      OrderType: this.TableId!=0? 1:2,
      OrderDetails: this.itemList
    }
    this.menuSevice.SaveOrder(order).subscribe((data)=>
      {
        this.Reset();                
        this.router.navigate(["print",this.TableId!=0? "kitchen-order": "final-bill",data]);   
        
      }
      );
      
  }

  Reset()
  {
    this.itemList=[];
    this.menuList=[];
    this.grandTotal=0;
    this.isSubmitClicked=false; 
  }

  
  remove(Id:number)
  {
    
    const newArray = this.itemList.filter(obj => obj.MenuID !== Id);
    this.itemList=newArray;
    this.MakeGrandTotal();
    
  }

}
