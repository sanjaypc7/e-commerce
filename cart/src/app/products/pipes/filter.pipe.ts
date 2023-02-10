import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts:[] ,searchKey:string,propName:string): any[] {
    if(!allproducts||searchKey==""||propName==""){
      return allproducts;
    }
     const result:any=[]; //new array

    allproducts.forEach((product:any)=>{
      if(product[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
       result.push(product);
      }
    })
    return result;
  }

}
