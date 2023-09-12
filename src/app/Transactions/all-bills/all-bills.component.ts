import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-all-bills',
  templateUrl: './all-bills.component.html',
  styleUrls: ['./all-bills.component.css']
})
export class AllBillsComponent implements OnInit {

  constructor(private orderService:OrderService) { }
  $orders=this.orderService.getAllOrder();
   orders: any
  ngOnInit(): void {
  }
  expandedRowIndices: number[] = [];

  toggleDetails(index: number) {
   
    if (this.expandedRowIndices.includes(index)) {
      // Row is expanded, so collapse it
      this.expandedRowIndices = this.expandedRowIndices.filter(i => i !== index);
    } else {
      // Row is collapsed, so expand it
      this.expandedRowIndices.push(index);
    }
  }

  isRowExpanded(index: number) {    
    return this.expandedRowIndices.includes(index);
  }
}
