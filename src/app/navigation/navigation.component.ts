import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Resource } from '../models/resource.model';
import *  as ResourceFilterActions from "../store/filter-resource-list.actions";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  typeId = 5;
  qbankId = 4;

  constructor(
    private store:Store<{
      filteredList:{
        totalResources:Resource[],
        filteredResources: Resource[],
      }
    }>
  ) { }

  ngOnInit(): void {

  }

  filterById(typeId:number) {
    this.typeId = typeId;
    this.store.dispatch(new ResourceFilterActions.FilterByType(typeId));
  }

  filterByQbankAndTypeID(typeId:number,qbankId:number) {
    this.typeId = typeId;
    this.qbankId = qbankId;
    this.store.dispatch(new ResourceFilterActions.FilterByQbank(typeId,qbankId));
  }


  filterByStatus(statusID:number) {
    this.store.select('filteredList').subscribe((data) => console.log(data));
      this.store.dispatch(new ResourceFilterActions.FilterByStatus(statusID,this.typeId,this.qbankId));
  }

}
