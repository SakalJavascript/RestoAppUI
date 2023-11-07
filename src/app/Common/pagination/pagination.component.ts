import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent  {

  constructor(private orderService:OrderService,private router:Router,private activatedRoute:ActivatedRoute) { }
  @Output()
  pageChange=new EventEmitter<{pageIndex:number,pageSize:number}>()

  @Output()
  searchChange=new EventEmitter<string>()




  numbers:number[]=Array.from({length:10},(_,index)=>index+1);
   orders: any
   @Input()
   total=0
   @Input()
   header=''

   @Input()
   IsSearch=false
   pegiA=1;
   pegiB=2;
   pegiC=3;
   pegiMax=0;
   noOfPages=3;
    
   pageIndex=1;
   pageSize=10;
   searchText=''

   Math(num:number)
   {
     return Math.ceil(num)
   } 
  PegiNext()
  {
      if(Math.ceil(this.total/this.pageSize)>this.pegiC)
      {       
          this.pegiA++;
          this.pegiB++;
          this.pegiC++;
  
      }
  }
  PegiPrev()
  {
    if(this.pegiA>1)
    {       
        this.pegiA--;
        this.pegiB--;
        this.pegiC--;

    }

  }

  PegiReset()
  {    
    this.pegiA=1;
    this.pegiB=2;
    this.pegiC=3;
    this.pageIndex=1;
    this.pageChange.emit({pageIndex:1,pageSize:this.pageSize})
  }
  
  SetPage(pageIndex:number,pageSize:number)
  {
     this.pageIndex=pageIndex;
     this.pageSize=pageSize;
     this.pageChange.emit({pageIndex:pageIndex,pageSize:pageSize})
  }

  Search()
  {
    this.searchChange.emit(this.searchText)
  }

 
}


