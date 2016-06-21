import { Component, Input } from '@angular/core';
import { Session } from '../shared/index';
import { AuthService } from '../../users/auth.service';
import { CollapsibleWellComponent } from '../../common/collapsible-well.component';


@Component({
  moduleId: module.id,
  selector: 'session-list',
  templateUrl: 'session-list.component.html',
  styles: ['collapsible-well h6 {margin-top:-5px; margin-bottom:10px }'],
  directives: [CollapsibleWellComponent]
})
export class SessionListComponent {
  @Input() sessions: Session[];

  constructor(private auth: AuthService) {  }
  

  
}
