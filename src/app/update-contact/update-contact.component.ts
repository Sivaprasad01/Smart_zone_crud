import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/model/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent {

  contactId:string='';
  contact:MyContact={}

  constructor(private activatedRoute: ActivatedRoute,private api:ApiService,private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
   console.log(data.Id);//id - Id=3
   this.contactId=data.Id;
   //call a api for getting contact details
   this.api.viewContact(this.contactId).subscribe((data:any)=>{
    console.log(data);//particular contact details
    this.contact=data

   })

})
  }
updateContact(){
this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
this.route.navigateByUrl('')

})
}
}

