import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-fam',
  templateUrl: './add-edit-fam.component.html',
  styleUrls: ['./add-edit-fam.component.css']
})
export class AddEditFamComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() fam:any;
  id:number=0;
  name:string="";
  dateCreated:any;
  dateUpdated:any;

  ngOnInit(): void {
    this.id=this.fam.id;
    this.name=this.fam.name;
    this.dateCreated=this.fam.dateCreated;
    this.dateUpdated=this.fam.dateUpdated;
  }

  addFamily(){
    var val = {
                id:this.id,
                name:this.name,
                dateCreated:this.dateCreated,
                dateUpdated:this.dateUpdated
              };
    this.service.addFamily(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateFamily(){
    var val = {
                id:this.id,
                name:this.name,
                dateCreated:this.dateCreated,
                dateUpdated:this.dateUpdated
              };
    this.service.updateFamily(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
