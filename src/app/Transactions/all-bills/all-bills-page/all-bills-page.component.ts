import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-all-bills-page',
  templateUrl: './all-bills-page.component.html',
  styleUrls: ['./all-bills-page.component.css']
})
export class AllBillsPageComponent implements OnInit {

  constructor(private orderService:OrderService,private activatedRoute:ActivatedRoute) { }
  $orders=this.orderService.getAllOrder(1,10);
  ngOnInit(): void {
    this.$orders=this.activatedRoute.params.pipe(
      switchMap(prams=>{
        const pageIndex=prams["page-index"];
        const pageSize=prams["page-size"];
       return  this.orderService.getAllOrder(pageIndex,pageSize);
      })
   )
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

  SaveModal()
  {
    
  }
}
