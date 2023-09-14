import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';
import { KitchenOrderDetailViewModal, OrderViewModal } from 'src/app/interfaces/OrderViewModal';
const _ = require('lodash');

@Component({
  selector: 'app-final-bill',
  templateUrl: './final-bill.component.html',
  styleUrls: ['./final-bill.component.css']
})
export class FinalBillComponent implements OnInit  {

  public order:OrderViewModal | undefined
  @Input()
  OrderId=0
  


  grouped: Record<string, KitchenOrderDetailViewModal[]> | undefined;
  
  constructor(private orderService:OrderService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    const id=this.OrderId==0? this.route.snapshot.params["id"]:this.OrderId;
    console.log(this.OrderId)
    this.orderService.getOrder(id).subscribe(data=>{    
      this.order=data   
       this.grouped = _.groupBy(this.order?.KitchenOrders, 'KitchenOrdersId');
       console.log(this.grouped)
    });

  }

    
}
