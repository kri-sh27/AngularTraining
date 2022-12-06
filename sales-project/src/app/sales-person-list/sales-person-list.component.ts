import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {


  //create an arrray of objects

  salesPersonList:SalesPerson[]=[
    new SalesPerson("Anup","kumar","anump@gmail.com",10),
    new SalesPerson("Anup2","kumar2","anump2@gmail.com",210),
    new SalesPerson("Anup23","kumar23","anump23@gmail.com",3210),
    new SalesPerson("Anup234","kumar234","anump234@gmail.com",43210)
];
  constructor(){

  }
ngOnInit(){

}
}
