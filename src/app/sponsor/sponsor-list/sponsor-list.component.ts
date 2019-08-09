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
    this.getSponsors();
    this.getParticipants();
  }

  getSponsors() {
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
  }

  getParticipants() {
    this.subscriptionParticiants = this.participantFireStore.fetchParticipants()
      .subscribe(partis => {
        this.participants = partis
          .map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            } as Participant;
          });
        console.log(this.participants);
      });
  }

  addSponsor(participantId: string) {
    const modalRef = this.modalService.open(SponsorAddComponent);
    modalRef.componentInstance.participantId = participantId;
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
