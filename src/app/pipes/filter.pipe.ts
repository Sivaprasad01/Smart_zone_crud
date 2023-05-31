import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //transform output

  //allContacts - array, searchKey - kripesh, propName - name  
  transform(allContacts: any=[], searchKey: string,propName:string): any[] {
    const result:any=[];
    if(!allContacts||searchKey==''||propName==''){
      return allContacts;
    }
    //searching
    allContacts.forEach((contact:any)=>{
      if(contact[propName].trim().toLowerCase().startsWith(searchKey.toLocaleLowerCase())){
        result.push(contact)
      }
    })
    return result;
  }

}
