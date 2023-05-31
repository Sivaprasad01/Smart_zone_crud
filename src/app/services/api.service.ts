import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl:string = 'http://localhost:3000/contacts'
  
  // function - get all contacts

  getAllContacts():Observable<MyContact>{
    return this.http.get(this.baseUrl);
  }
  
  // api call for fetch particular contact details
  viewContact(contactId:any){
    return this.http.get(`${this.baseUrl}/${contactId}`)  //http://localhost:3000/contacts/1
  }

  //api call for fetch groupname
  getGroupName(groupId:any){
    return this.http.get('http://localhost:3000/group/'+groupId)
  }

  //function for fetch all groups from  http://localhost:3000/group
  getAllGroups(){
    return this.http.get('http://localhost:3000/group')
  }
  //function for addding new contact to server
  addContact(contactBody:any){
return this.http.post(this.baseUrl,contactBody)
  }
    //function for deleting contact from server
    deleteContact(contactId:any){
      return this.http.delete(`${this.baseUrl}/${contactId}`)
    }

    //function to update an existing contact
    updateContact(contactId:any,contactBody:any){
      return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
    }
}
