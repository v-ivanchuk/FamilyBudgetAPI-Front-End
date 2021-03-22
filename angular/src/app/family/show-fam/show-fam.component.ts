import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-fam',
  templateUrl: './show-fam.component.html',
  styleUrls: ['./show-fam.component.css']
})
export class ShowFamComponent implements OnInit {

  constructor(private service:SharedService) { }

  FamilyList:any=[];

  ModalTitle:string="";
  ActivateAddEditFamComp:boolean=false;
  fam:any;

  FamilyIdFilter:string="";
  FamilyNameFilter:string="";
  FamilyDateCreatedFilter:string="";
  FamilyDateUpdatedFilter:string="";
  FamilyListWithoutFilter:any=[];

  Page = 1;

  handlePageChange(event:any) {
    this.Page = event;
  }

  ngOnInit(): void {
    this.refreshFamList();
  }

  addClick(){
    this.fam={
      id:0,
      name:""
    }
    this.ModalTitle="Add Family";
    this.ActivateAddEditFamComp=true;
  }

  closeClick(){
    this.ActivateAddEditFamComp=false;
    this.refreshFamList();
  }

  refreshFamList(){
    this.service.getFamList().subscribe(data=>{
      this.FamilyList=data;
      this.FamilyListWithoutFilter=data;
    });
  }

  editClick(item: any){
    this.fam=item;
    this.ModalTitle="Edit Family";
    this.ActivateAddEditFamComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure and you still want to delete this family?')){
      this.service.deleteFamily(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshFamList();
      })
    }
  }

  FilterFn(){
    var FamilyIdFilter=this.FamilyIdFilter;
    var FamilytNameFilter=this.FamilyNameFilter;
    var FamilytDateCreatedFilter=this.FamilyDateCreatedFilter;
    var FamilytDateUpdatedFilter=this.FamilyDateUpdatedFilter;

    this.FamilyList = this.FamilyListWithoutFilter.filter(function (el:any){
        return el.id.toString().toLowerCase().includes(
          FamilyIdFilter.toString().trim().toLowerCase()
        )&&
        el.name.toString().toLowerCase().includes(
          FamilytNameFilter.toString().trim().toLowerCase()
        )&&
        el.dateCreated.toString().toLowerCase().includes(
          FamilytDateCreatedFilter.toString().trim().toLowerCase()
        )&&
        el.dateUpdated.toString().toLowerCase().includes(
          FamilytDateUpdatedFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.FamilyList = this.FamilyListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}