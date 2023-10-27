import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableGridComponent } from './Transactions/table-grid/table-grid.component';
import { MenuCategoryFormComponent } from './Masters/menu-category-form/menu-category-form.component';
import { MenuPanelComponent } from './transactions/menu-panel/menu-panel.component';
import { FinalBillComponent } from './prints/final-bill/final-bill.component';
import { AllBillsComponent } from './Transactions/all-bills/all-bills.component';
import { TableBillingComponent } from './Transactions/table-billing/table-billing.component';
import { KitchenOrderComponent } from './Prints/kitchen-order/kitchen-order.component';
import { MainDashboardComponent } from './Dashboards/main-dashboard/main-dashboard.component';
import { MenuFormComponent } from './Masters/menu-form/menu-form.component';
import { AllBillsPageComponent } from './Transactions/all-bills/all-bills-page/all-bills-page.component';


const routes: Routes = [
  { path:'' ,component: TableGridComponent },
  { path:'masters/menu-category' ,component: MenuCategoryFormComponent },
  { path:'masters/menu-form' ,component: MenuFormComponent },
  { path:'transaction/menu-panel' , component: MenuPanelComponent},
  { path:'print/final-bill/:id' , component: FinalBillComponent},
  { path:'print/kitchen-order/:orderId' , component: KitchenOrderComponent},  
  {   path:'transaction/all-bill' , 
      component: AllBillsComponent,
      children:[
                {path:':page-index/:page-size',  component: AllBillsPageComponent   }
               ]
  },
  { path:'transaction/menu-panel/:tableId/:TableName/:orderId' , component: MenuPanelComponent},
  { path:'tables' ,component: TableGridComponent },
  { path:'tables/change-table/:tableId/:currentOrderId' ,component: TableGridComponent },
  { path:'transaction/table-billing' ,component: TableBillingComponent },
  { path:'dashboard/main-dashboard' ,component: MainDashboardComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
