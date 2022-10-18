import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources: Observable<{
    totalResources:Resource[],
    filteredResources: Resource[]
  }>;

  constructor(
    private store:Store<{
      filteredList:{
        totalResources:Resource[],
        filteredResources: Resource[],
      }
    }>
  ) {
    
   }

  ngOnInit(): void {
    this.resources = this.store.select('filteredList');
    console.log(this.resources);
  }

}
