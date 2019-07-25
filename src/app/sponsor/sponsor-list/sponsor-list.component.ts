import {Component, OnDestroy, OnInit} from '@angular/core';
import {ParticipantFireStoreService} from '../../participant/ParticipantFireStore.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SponsorService} from '../sponsor.service';
import {Sponsor} from '../sponsor.model';
import {Subscription} from 'rxjs';
import {Participant} from '../../participant/participant.model';
import {SponsorAddComponent} from '../sponsor-add/sponsor-add.component';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list-component.css']
})
export class SponsorListComponent implements OnInit, OnDestroy {
  sponsors: Sponsor[];
  subscription: Subscription;
  subscriptionParticiants: Subscription;
  participants: Participant[];

  constructor(
    private participantFireStore: ParticipantFireStoreService,
    private modalService: NgbModal,
    private sponsorService: SponsorService
  ) {
  }

  ngOnInit() {
    this.subscription = this.sponsorService.fetchSponsors()
      .subscribe(sponsors => {
        this.sponsors = sponsors
          .map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            } as Sponsor;
          });
      });
    this.subscriptionParticiants = this.participantFireStore.fetchParticipants()
      .subscribe(partis => {
        this.participants = partis
          .map(e => {
            return {
              ...e.payload.doc.data()
            } as Participant;
          });
        console.log(this.participants);
      });
  }

  addSponsor(participantId: string) {
    console.log(participantId);
    // parrticipant id nog uit select krijgen en meegeven aan addsponsor.
    // const modalref = this.modalService.open(SponsorAddComponent);
    // modalref.componentInstance.participantId = participantId;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParticiants) {
      this.subscriptionParticiants.unsubscribe();
    }
  }

}
