import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-mem',
  templateUrl: './add-edit-mem.component.html',
  styleUrls: ['./add-edit-mem.component.css']
})
export class AddEditMemComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() mem:any;
  id:number=0;
  name:string="";
  surname:string="";
  email:string="";
  phoneNumber:string="";
  address:string="";
  city:string="";
  dateCreated:any;
  dateUpdated:any;
  familyId:any;

  FamilyList:any=[];

  ngOnInit(): void {
    this.id=this.mem.id;
    this.name=this.mem.name;
    this.surname=this.mem.surname;
    this.email=this.mem.email;
    this.phoneNumber=this.mem.phoneNumber;
    this.address=this.mem.address;
    this.city=this.mem.city;
    this.dateCreated=this.mem.dateCreated;
    this.dateUpdated=this.mem.dateUpdated;
    this.familyId=this.mem.familyId;
    this.refreshFamList();
  }

  refreshFamList(){
    this.service.getFamList().subscribe(data=>{
      this.FamilyList=data;
    });
  }

  addMember(){
    var val = {
                id:this.id,
                name:this.name,
                surname:this.surname,
                email:this.email,
                phoneNumber:this.phoneNumber,
                address:this.address,
                city:this.city,
                dateCreated:this.dateCreated,
                dateUpdated:this.dateUpdated,
                familyId:this.familyId
              };
    this.service.addMember(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateMember(){
    var val = {
                id:this.id,
                name:this.name,
                surname:this.surname,
                email:this.email,
                phoneNumber:this.phoneNumber,
                address:this.address,
                city:this.city,
                dateCreated:this.dateCreated,
                dateUpdated:this.dateUpdated,
                familyId:this.familyId
              };
    this.service.updateMember(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}