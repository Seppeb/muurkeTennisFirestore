import {Component, OnDestroy, OnInit} from '@angular/core';
import {Participant} from '../participant.model';
import {Subscription} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ParticipantEditComponent} from '../participant-edit/participant-edit.component';
import {ParticipantFireStoreService} from '../ParticipantFireStore.service';
import {SponsorService} from '../../sponsor/sponsor.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit, OnDestroy {
  participants: Participant[];
  subscription: Subscription;

  constructor(private participantFireStore: ParticipantFireStoreService,
              private sponsorService: SponsorService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getParticiapants();
  }

  private getParticiapants() {
    this.subscription = this.participantFireStore.fetchParticipants()
      .subscribe(data => {
        this.participants = data
          .map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            } as Participant;
          });
      });
  }

  onNewParticipant() {
    this.modalService.open(ParticipantEditComponent);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
