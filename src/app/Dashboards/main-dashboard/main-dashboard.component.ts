import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { CatWiseTotal } from 'src/app/interfaces/CatWiseTotal';
import { DatePipe } from '@angular/common';
import { OrderTypeWiseCount } from 'src/app/interfaces/OrderTypeWiseCount';
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  selectedStartDate = new Date();
  selectedEndDate = new Date();
  
  $CatWiseTotal:Observable<CatWiseTotal[]> | undefined ;
  $OrderTypeWiseCount:Observable<OrderTypeWiseCount[]> | undefined ;
  constructor(private dashboardSerive:DashboardService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getData();
  }

  getData()
  {
    const startDate=this.datePipe.transform(this.selectedStartDate, 'dd/MM/yyyy');
    const endDate=this.datePipe.transform(this.selectedEndDate, 'dd/MM/yyyy');
    this.$CatWiseTotal=this.dashboardSerive.getCatWiseTotal(startDate!,endDate!);
    this.$OrderTypeWiseCount=this.dashboardSerive.GetOrdeTypeWiseCount(startDate!,endDate!);
  }


    dateStartChanged(event: any): void {      
      this.selectedStartDate = event.value;   
      this.getData()   
    }
    dateEndChanged(event: any): void {      
      this.selectedEndDate = event.value;  
      this.getData()      
    }
}
