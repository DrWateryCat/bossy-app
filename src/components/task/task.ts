import { Component, Input } from '@angular/core';

/**
 * Generated class for the TaskComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'task',
  templateUrl: 'task.html'
})
export class TaskComponent {
  @Input() title;
  @Input() desc;
  public id: string;

  constructor() {
  }

}
