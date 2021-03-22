import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-exp',
  templateUrl: './add-edit-exp.component.html',
  styleUrls: ['./add-edit-exp.component.css']
})
export class AddEditExpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() exp:any;
  id:number=0;
  value:number=0;
  description:string="";
  expenseDate:any;
  dateCreated:any;
  dateUpdated:any;
  memberId:any;

  MemberList:any=[];

  ngOnInit(): void {
    this.id=this.exp.id;
    this.value=this.exp.value;
    this.description=this.exp.description;
    this.expenseDate=this.exp.expenseDate;
    this.dateCreated=this.exp.dateCreated;
    this.dateUpdated=this.exp.dateUpdated;
    this.memberId=this.exp.memberId;
    this.refreshMemList();
  }

  refreshMemList(){
    this.service.getMemList().subscribe(data=>{
      this.MemberList=data;
    });
  }

  addExpense(){
    var val = {
                id:this.id,
                value:this.value,
                description:this.description,
                expenseDate:this.expenseDate,
                dateCreated:this.dateCreated,
                dateUpdated:this.dateUpdated,
                memberId:this.memberId
              };
    this.service.addExpense(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateExpense(){
    var val = {
                id:this.id,
                value:this.value,
                description:this.description,
                expenseDate:this.expenseDate,
                dateCreated:this.dateCreated,
                dateUpdated:this.dateUpdated,
                memberId:this.memberId
              };
    this.service.updateExpense(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}