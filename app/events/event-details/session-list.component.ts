import { Component, Input } from '@angular/core';
import { Session } from '../shared/index';
import { AuthService } from '../../users/auth.service';


@Component({
  moduleId: module.id,
  selector: 'session-list',
  templateUrl: 'session-list.component.html',
  styles: ['collapsible-well h6 {margin-top:-5px; margin-bottom:10px }'],
})
export class SessionListComponent {
  @Input() sessions: Session[];

  constructor(private auth: AuthService) {  }
  

  
}
