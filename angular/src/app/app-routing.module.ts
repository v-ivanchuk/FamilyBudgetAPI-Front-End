import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FamilyComponent} from './family/family.component'
import {MemberComponent} from './member/member.component'
import {ExpenseComponent} from './expense/expense.component'

const routes: Routes = [
{path:'family',component:FamilyComponent},
{path:'member',component:MemberComponent},
{path:'expense',component:ExpenseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
