import { Component, Output } from '@angular/core';

@Component({
 selector: 'date-pipe',
 template: `<div>
   <p>{{today | date:'fullDate'}}</p>
   <p>{{today | date:'h:mm a'}}</p>
 </div>`
})

export class DatePipeComponent {
  today: number = Date.now();
}