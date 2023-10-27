import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-all-bills',
  templateUrl: './all-bills.component.html',
  styleUrls: ['./all-bills.component.css']
})
export class AllBillsComponent {

  constructor(private orderService:OrderService,private router:Router,private activatedRoute:ActivatedRoute) { }
  
  numbers:number[]=Array.from({length:10},(_,index)=>index+1);
   orders: any
   $total=this.orderService.getAllOrderCount();
   pegiA=1;
   pegiB=2;
   pegiC=3;
   pegiMax=0;
   pageSize=10;
   noOfPages=3
  


   Math(num:number)
   {
     return Math.ceil(num)
   } 
  PegiNext()
  {
    this.$total.subscribe((total)=>{   
      
      if(Math.ceil(total/this.pageSize)>this.pegiC)
      {       
          this.pegiA++;
          this.pegiB++;
          this.pegiC++;
  
      }
    })
   
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
    this.router.navigate(['/transaction/all-bill', 1, this.pageSize]);
  }
}
