import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from 'src/app/Services/table.service';
import { ChangeTable } from 'src/app/interfaces/ChangeTable';
import { Table } from 'src/app/interfaces/Table';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.css']
})
export class TableGridComponent implements OnInit {

  tableId=0
  currentOrderId=0
  constructor(private tableService:TableService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }
  tables:Table[]=[]
  ngOnInit(): void {    
    this.tableId=this.activatedRoute.snapshot.params["tableId"]??0;
    this.currentOrderId=this.activatedRoute.snapshot.params["currentOrderId"]??0;
      this.tableService.getAllTable().subscribe((data)=>{
        this.tables=this.tableId>0? data.filter(x=>!x.IsOccupied):data;
      })
    
  }

  TableClick(tableId:number,Description:string,CurrentOrderId:number)
  {
    if(this.tableId>0)
      this.ChangeTable(this.tableId,tableId,this.currentOrderId);
    else
      this.router.navigate(['/transaction','menu-panel',tableId,Description,CurrentOrderId])
  }

  ChangeTable(fromTableId:number,toTableId:number,CurrentOrderId:number)
  {
      const changeTable:ChangeTable={
        FromTableID:fromTableId,
        ToTableID:toTableId,
        CurrentOrderId:CurrentOrderId
      }
      this.tableService.changeTable(changeTable).subscribe(()=>
        this.router.navigate(['/tables'])
      )   
      
  }

}
