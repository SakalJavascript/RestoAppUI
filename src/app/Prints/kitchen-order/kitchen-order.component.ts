import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/Services/order.service';
import { KichenOrderViewModal } from 'src/app/interfaces/OrderViewModal';

@Component({
  selector: 'app-kitchen-order',
  templateUrl: './kitchen-order.component.html',
  styleUrls: ['./kitchen-order.component.css']
})
export class KitchenOrderComponent implements OnInit {
  $orders:Observable<KichenOrderViewModal[]> | undefined;
  constructor(private orderService:OrderService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const orderId=this.activatedRoute.snapshot.params["orderId"];
    this.$orders=this.orderService.getKitchenOrdersById(orderId)
  }

}
