import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/Services/menu-service.service';

@Component({
  selector: 'app-menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.css']
})
export class MenuGridComponent implements OnInit {

  constructor(private menuService:MenuService) { }
  $menu= this.menuService.getMenu(1,10);
  ngOnInit(): void {
  }

}
