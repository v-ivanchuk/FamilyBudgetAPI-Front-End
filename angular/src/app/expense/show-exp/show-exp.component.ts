import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-exp',
  templateUrl: './show-exp.component.html',
  styleUrls: ['./show-exp.component.css']
})
export class ShowExpComponent implements OnInit {

  constructor(private service:SharedService) { }

  ExpenseList:any=[];

  ModalTitle:string="";
  ActivateAddEditExpComp:boolean=false;
  exp:any;

  ExpenseIdFilter:string="";
  ExpenseValueFilter:string="";
  ExpenseDescriptionFilter:string="";
  ExpenseDateExpenseFilter:string="";
  ExpenseMemberIDFilter:string="";
  ExpenseMemberNameFilter:string="";
  ExpenseListWithoutFilter:any=[];

  Page = 1;

  handlePageChange(event:any) {
    this.Page = event;
  }

  ngOnInit(): void {
    this.refreshExpList();
  }

  addClick(){
    this.exp={
      id:0,
      value:0,
      description:""
    }
    this.ModalTitle="Add Expense";
    this.ActivateAddEditExpComp=true;
  }

  closeClick(){
    this.ActivateAddEditExpComp=false;
    this.refreshExpList();
  }

  refreshExpList(){
    this.service.getExpList().subscribe(data=>{
      this.ExpenseList=data;
      this.ExpenseListWithoutFilter=data;
    });
  }

  editClick(item: any){
    this.exp=item;
    this.ModalTitle="Edit Expense";
    this.ActivateAddEditExpComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure and you still want to delete this expense?')){
      this.service.deleteExpense(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshExpList();
      })
    }
  }

  FilterFn(){
    var ExpenseIdFilter=this.ExpenseIdFilter;
    var ExpenseValueFilter=this.ExpenseValueFilter;
    var ExpenseDescriptionFilter=this.ExpenseDescriptionFilter;
    var ExpenseDateExpenseFilter=this.ExpenseDateExpenseFilter;
    var ExpenseMemberIDFilter=this.ExpenseMemberIDFilter;
    var ExpenseMemberNameFilter=this.ExpenseMemberNameFilter;

    this.ExpenseList = this.ExpenseListWithoutFilter.filter(function (el:any){
        return el.id.toString().toLowerCase().includes(
          ExpenseIdFilter.toString().trim().toLowerCase()
        )&&
        el.value.toString().toLowerCase().includes(
          ExpenseValueFilter.toString().trim().toLowerCase()
        )&&
        el.description.toString().toLowerCase().includes(
          ExpenseDescriptionFilter.toString().trim().toLowerCase()
        )&&
        el.expenseDate.toString().toLowerCase().includes(
          ExpenseDateExpenseFilter.toString().trim().toLowerCase()
        )&&
        el.member.id.toString().toLowerCase().includes(
          ExpenseMemberIDFilter.toString().trim().toLowerCase()
        )&&
        el.member.name.toString().toLowerCase().includes(
          ExpenseMemberNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.ExpenseList = this.ExpenseListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
