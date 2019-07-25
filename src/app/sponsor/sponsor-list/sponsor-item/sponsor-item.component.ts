import {Component, Input, OnInit} from '@angular/core';
import {Sponsor} from '../../sponsor.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ParticipantFireStoreService} from '../../../participant/ParticipantFireStore.service';
import {Participant} from '../../../participant/participant.model';

@Component({
  selector: 'app-sponsor-item',
  templateUrl: './sponsor-item.component.html',
  styleUrls: ['./sponsor-item.component.sass']
})
export class SponsorItemComponent implements OnInit {
  @Input() sponsor: Sponsor;
  @Input() index: number;
  participant;

  constructor(
    private modalService: NgbModal,
    private participantService: ParticipantFireStoreService
  ) {
  }

  ngOnInit() {
    this.participantService
      .fetchParticipantById(this.sponsor.ParticipantId)
      .subscribe(data => {
        this.participant = data.payload.data();
        console.log('Participant', this.participant);
        console.log('Sponsor:', this.sponsor);
        console.log('goed doel naam:', this.participant.GoedDoelNaam);
      });
  }
}
