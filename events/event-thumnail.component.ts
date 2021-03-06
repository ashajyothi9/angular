import{ Component,Input } from '@angular/core'

 @Component({
     selector:'event-thumbnail',
     template:`
<div class="well hoverwell thumbnail">
<h2>{{event?.name}}</h2>
<div>Date:{{event?.date}}</div>
alert("1");
<div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
Time: {{event?.time}}
<span *ngSwitchCase="'8:00 am'">(Early State)</span>
<span *ngSwitchCase="'10:00 am'">(Late State)</span>
<span *ngSwitchDefault>(Normal State)</span>
</div>
alert("2");
<div>Price: \${{event?.price}}</div>
<div *ngIf="event?.location">
<span>Location: {{event?.location?.address}}</span>
<span class="pad-left">{{event?.location?. city}},{{event?.location?. country}}</span>
</div>
alert("3");
<div *ngIf="event?.onlineUrl">Online URL:{{event?.onlineUrl}}
alert("welcome");
</div>
</div>
`,
styles:[`

.bold {font-weight:bold; }
.thumbnail {min-height:210px;}
.pad-left { margin-left: 10px;}
.well div {color:#bbb;} 
`]
})
export class EventThumbnailComponent {
    @Input() event:any

    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am')
        return {color:'#003300', 'font-weight':'bold'}
        return {}
    }
}