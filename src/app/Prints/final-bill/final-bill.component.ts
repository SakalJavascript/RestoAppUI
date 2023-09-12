import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';
import { OrderViewModal } from 'src/app/interfaces/OrderViewModal';


@Component({
  selector: 'app-final-bill',
  templateUrl: './final-bill.component.html',
  styleUrls: ['./final-bill.component.css']
})
export class FinalBillComponent implements OnInit  {

  public order:OrderViewModal | undefined
  @Input()
  OrderId=0
  constructor(private orderService:OrderService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    const id=this.OrderId==0? this.route.snapshot.params["id"]:this.OrderId;
    console.log(this.OrderId)
    this.orderService.getOrder(id).subscribe(data=>{    
      this.order=data
    });

  }
}
