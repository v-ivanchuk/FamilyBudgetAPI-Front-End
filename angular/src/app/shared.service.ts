import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:41312/";

  constructor(private http:HttpClient) { }

  
  getFamList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+"family");
  }

  addFamily(val:any){
    return this.http.post(this.APIUrl+'family', val);
  }
  
  updateFamily(val:any){
    return this.http.put(this.APIUrl+'family', val);
  }

  deleteFamily(val:any){
    return this.http.delete(this.APIUrl+'family/'+val);
  }

  getMemList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'member');
  }

  addMember(val:any){
    return this.http.post(this.APIUrl+'member', val);
  }
  
  updateMember(val:any){
    return this.http.put(this.APIUrl+'member', val);
  }

  deleteMember(val:any){
    return this.http.delete(this.APIUrl+'member/'+val);
  }

  getExpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'expense');
  }

  addExpense(val:any){
    return this.http.post(this.APIUrl+'expense', val);
  }
  
  updateExpense(val:any){
    return this.http.put(this.APIUrl+'expense', val);
  }

  deleteExpense(val:any){
    return this.http.delete(this.APIUrl+'expense/'+val);
  }
}
