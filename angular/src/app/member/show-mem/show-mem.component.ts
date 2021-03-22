import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-mem',
  templateUrl: './show-mem.component.html',
  styleUrls: ['./show-mem.component.css']
})
export class ShowMemComponent implements OnInit {

  constructor(private service:SharedService) { }

 MemberList:any=[];

 ModalTitle:string="";
 ActivateAddEditMemComp:boolean=false;
 mem:any;
 
 MemberIdFilter:string="";
 MemberNameFilter:string="";
 MemberSurnameFilter:string="";
 MemberEmailFilter:string="";
 MemberPhoneNumberFilter:string="";
 MemberAddressFilter:string="";
 MemberCityFilter:string="";
 MemberFamilyIDFilter:string="";
 MemberFamilyNameFilter:string="";
 MemberListWithoutFilter:any=[];

 Page = 1;

  handlePageChange(event:any) {
    this.Page = event;
  }

  ngOnInit(): void {
    this.refreshMemList();
  }

  addClick(){
    this.mem={
      id:0,
      name:"",
      surname:"",
      email:"",
      phoneNumber:"",
      address:"",
      city:""
    }
    this.ModalTitle="Add Member";
    this.ActivateAddEditMemComp=true;
  }

  closeClick(){
    this.ActivateAddEditMemComp=false;
    this.refreshMemList();
  }

  refreshMemList(){
    this.service.getMemList().subscribe(data=>{
      this.MemberList=data;
      this.MemberListWithoutFilter=data;
    });
  }

  editClick(item: any){
    this.mem=item;
    this.ModalTitle="Edit Member";
    this.ActivateAddEditMemComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure and you still want to delete this member?')){
      this.service.deleteMember(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshMemList();
      })
    }
  }

  FilterFn(){
    var MemberIdFilter=this.MemberIdFilter;
    var MemberNameFilter=this.MemberNameFilter;
    var MemberSurnameFilter=this.MemberSurnameFilter;
    var MemberEmailFilter=this.MemberEmailFilter;
    var MemberPhoneNumberFilter=this.MemberPhoneNumberFilter;
    var MemberAddressFilter=this.MemberAddressFilter;
    var MemberCityFilter=this.MemberCityFilter;
    var MemberFamilyIDFilter=this.MemberFamilyIDFilter;
    var MemberFamilyNameFilter=this.MemberFamilyNameFilter;

    this.MemberList = this.MemberListWithoutFilter.filter(function (el:any){
        return el.id.toString().toLowerCase().includes(
          MemberIdFilter.toString().trim().toLowerCase()
        )&&
        el.name.toString().toLowerCase().includes(
          MemberNameFilter.toString().trim().toLowerCase()
        )&&
        el.surname.toString().toLowerCase().includes(
          MemberSurnameFilter.toString().trim().toLowerCase()
        )&&
        el.email.toString().toLowerCase().includes(
          MemberEmailFilter.toString().trim().toLowerCase()
        )&&
        el.phoneNumber.toString().toLowerCase().includes(
          MemberPhoneNumberFilter.toString().trim().toLowerCase()
        )&&
        el.address.toString().toLowerCase().includes(
          MemberAddressFilter.toString().trim().toLowerCase()
        )&&
        el.city.toString().toLowerCase().includes(
          MemberCityFilter.toString().trim().toLowerCase()
        )&&
        el.family.id.toString().toLowerCase().includes(
          MemberFamilyIDFilter.toString().trim().toLowerCase()
        )&&
        el.family.name.toString().toLowerCase().includes(
          MemberFamilyNameFilter.toString().trim().toLowerCase()
         )
    });
  }

  sortResult(prop:any,asc:any){
    this.MemberList = this.MemberListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
