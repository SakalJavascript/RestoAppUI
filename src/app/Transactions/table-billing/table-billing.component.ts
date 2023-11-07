import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/Services/order.service';
import { PrintService } from 'src/app/Services/print.service';
import { TableService } from 'src/app/Services/table.service';

import { KitchenOrderDetailViewModal } from 'src/app/interfaces/OrderViewModal';
import { Table } from 'src/app/interfaces/Table';

@Component({
  selector: 'app-table-billing',
  templateUrl: './table-billing.component.html',
  styleUrls: ['./table-billing.component.css']
})
export class TableBillingComponent implements OnInit {
  pdfData: any;
  constructor(private orderService:OrderService, 
              private tableService:TableService,
              private printService:PrintService,
              private router:Router) { }
  orderByTable:KitchenOrderDetailViewModal[] | undefined;
  occupidTables:Table[]=[]
  tableIds=''
  ngOnInit(): void {
    this.tableService.getAllTable()
    .subscribe((data)=>{
      this.occupidTables=data.filter(table=>table.IsOccupied);
    })
  }
  onCheck()
  {

      this.tableIds=this.occupidTables.filter(table=>table.IsChecked).map(table=>table.ID).join(',');
     if(this.tableIds.length>0)
     {
      this.orderService.getAllOrdersByTables(this.tableIds).subscribe(data=>{      
        this.orderByTable=data;
      });
    }
    else
    {
      this.orderByTable=[]
    }

  }

  calculateTotalPrice()
  {
    return this.orderByTable?.reduce((total,item)=>{
      return total+item.Price;
    },0)
  }

  calculateQuntity()
  {
    return this.orderByTable?.reduce((total,item)=>{
      return total+item.Quantity;
    },0)
  }
    Reset()
    {
      this.occupidTables=this.occupidTables.map(table=>({...table,IsChecked:false}))
      this.orderByTable=[]
    }

    print()
    {
      console.log(this.tableIds)
      this.orderService.SaveTableBilling(this.tableIds).subscribe(data=>{       
        this.router.navigate(["/home-page","print","final-bill",data]);
      
      })

      

   
    }

}
