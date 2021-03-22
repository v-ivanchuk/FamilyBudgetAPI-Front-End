import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { ShowMemComponent } from './member/show-mem/show-mem.component';
import { AddEditMemComponent } from './member/add-edit-mem/add-edit-mem.component';
import { FamilyComponent } from './family/family.component';
import { AddEditFamComponent } from './family/add-edit-fam/add-edit-fam.component';
import { ShowFamComponent } from './family/show-fam/show-fam.component';
import { ExpenseComponent } from './expense/expense.component';
import { ShowExpComponent } from './expense/show-exp/show-exp.component';
import { AddEditExpComponent } from './expense/add-edit-exp/add-edit-exp.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    ShowMemComponent,
    AddEditMemComponent,
    FamilyComponent,
    AddEditFamComponent,
    ShowFamComponent,
    ExpenseComponent,
    AddEditExpComponent,
    ShowExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
