import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-nested-child',
  templateUrl: './nested-child.component.html',
  styleUrls: ['./nested-child.component.css']
})
export class NestedChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customers: Customer[] = [
    {customerNo: 1, name: 'Bob Ross', address: 'Some place', city: 'london', country: 'England'},
    {customerNo: 2, name: 'Jimmy Bob', address: 'Somewhere', city: 'manchester', country: 'England'},
    {customerNo: 3, name: 'Bobby Bob', address: 'Any Street', city: 'Edinburgh', country: 'Scotland'},
    {customerNo: 4, name: 'Robert Bobby', address: 'Anywhere', city: 'Belfast', country: 'Northern Ireland'},
    {customerNo: 5, name: 'Bob Roberts', address: 'Over there', city: 'Dublin', country: 'Ireland'},

  ]
}
