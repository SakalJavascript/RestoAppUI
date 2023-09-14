import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableGridComponent } from './Transactions/table-grid/table-grid.component';
import { MenuCategoryFormComponent } from './Masters/menu-category-form/menu-category-form.component';
import { MenuPanelComponent } from './transactions/menu-panel/menu-panel.component';
import { FinalBillComponent } from './prints/final-bill/final-bill.component';
import { AllBillsComponent } from './Transactions/all-bills/all-bills.component';


const routes: Routes = [
  { path:'' ,component: TableGridComponent },
  { path:'masters/menu-category' ,component: MenuCategoryFormComponent },
  { path:'transaction/menu-panel' , component: MenuPanelComponent},
  { path:'print/final-bill/:id' , component: FinalBillComponent},
  { path:'transaction/all-bill' , component: AllBillsComponent},
  { path:'transaction/menu-panel/:tableId/:TableName/:orderId' , component: MenuPanelComponent},
  { path:'tables' ,component: TableGridComponent },
  { path:'tables/change-table/:tableId/:currentOrderId' ,component: TableGridComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
