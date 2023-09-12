import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/Services/table.service';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.css']
})
export class TableGridComponent implements OnInit {

  constructor(private tableService:TableService) { }
  $tables=this.tableService.getAllTable();
  ngOnInit(): void {
  }

}
