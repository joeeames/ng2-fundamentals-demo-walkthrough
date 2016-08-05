import { Component, Input, OnChanges } from '@angular/core';
import { Session, DurationPipe } from '../shared/index';
import { AuthService } from '../../users/auth.service';
import { CollapsibleWellComponent } from '../../common/collapsible-well.component';
import { UpvoteComponent } from './upvote.component';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: '/app/events/event-details/session-list.component.html',
  styles: ['collapsible-well h6 {margin-top:-5px; margin-bottom:10px }'],
  directives: [CollapsibleWellComponent, UpvoteComponent],
  providers: [VoterService],
  pipes: [DurationPipe]
})
export class SessionListComponent {
  @Input() sessions: Session[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;
  visibleSessions: Session[] = [];

  constructor(private auth: AuthService,
    private voterService: VoterService) {  }

  ngOnChanges() {
    if(this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  // using an immutable operation so as not to filter the source array
  filterSessions(filter) {
    if(filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }

  toggleVote(session: Session) {
    if(this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName)
    }
    if(this.sortBy === 'votes')
        this.visibleSessions.sort(sortByVotesDesc)
  }
    
  userHasVoted(session: Session) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }
}

function sortByNameAsc(s1: Session, s2: Session) {
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1: Session, s2: Session) {
  return s2.voters.length - s1.voters.length
}