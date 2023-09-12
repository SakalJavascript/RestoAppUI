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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
