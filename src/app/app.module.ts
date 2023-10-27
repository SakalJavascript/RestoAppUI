import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableGridComponent } from './Transactions/table-grid/table-grid.component';
import { MenuCategoryFormComponent } from './Masters/menu-category-form/menu-category-form.component';
import { MenuCategoryGridComponent } from './Masters/menu-category-grid/menu-category-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MenuPanelComponent } from './transactions/menu-panel/menu-panel.component';
import { FinalBillComponent } from './prints/final-bill/final-bill.component';
import { ShowErrorMessageComponent } from './common/show-error-message/show-error-message.component';
import { AllBillsComponent } from './Transactions/all-bills/all-bills.component';
import { TableBillingComponent } from './Transactions/table-billing/table-billing.component';
import { KitchenOrderComponent } from './Prints/kitchen-order/kitchen-order.component';
import { MainDashboardComponent } from './Dashboards/main-dashboard/main-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import this module
import { MatNativeDateModule } from '@angular/material/core'; // Import MatNativeDateModule
import { CommonModule, DatePipe } from '@angular/common';
import { MenuFormComponent } from './Masters/menu-form/menu-form.component';
import { AllBillsPageComponent } from './Transactions/all-bills/all-bills-page/all-bills-page.component';
import { ModalComponent } from './Common/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,    
    TableGridComponent,   
    MenuCategoryFormComponent,
    MenuCategoryGridComponent,
    MenuPanelComponent,
    FinalBillComponent,
    ShowErrorMessageComponent,
    AllBillsComponent,
    TableBillingComponent,
    KitchenOrderComponent,
    MainDashboardComponent,
    MenuFormComponent,
    AllBillsPageComponent,
    ModalComponent,
       
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,  
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    CommonModule,
    
  ],
  providers: [   DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
