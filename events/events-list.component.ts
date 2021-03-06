import { Component, OnInit } from "@angular/core";
import { EventService } from './shared/event.service';
import { ToastrService } from "../common/ToastrService";

declare let toastr
@Component({
    
    template: `
    <div>
    <h1>upcoming angular events</h1>
    <hr/>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
   <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
   alert ("welcome3");
    </div>
</div>
    </div>`
})
export class EventsListComponent implements OnInit{
    

  events:any[]
  constructor(private toastr:ToastrService,private eventService:EventService){
    }
  ngOnInit(){
    this.events=this.eventService.getEvents()
  }
  
  handleThumbnailClick(eventName) {
   this.toastr.success(eventName);
  }
  
}