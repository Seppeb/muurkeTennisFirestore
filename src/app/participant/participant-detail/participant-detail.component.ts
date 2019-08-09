import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SponsorAddComponent} from '../../sponsor/sponsor-add/sponsor-add.component';
import {Sponsor} from '../../sponsor/sponsor.model';
import {SponsorService} from '../../sponsor/sponsor.service';

@Component({
  selector: 'app-participant-detail',
  templateUrl: './participant-detail.component.html',
  styleUrls: ['./participant-detail.component.sass']
})
export class ParticipantDetailComponent implements OnInit {

  @Input() public participant;
  sponsors: Sponsor[];

  constructor(
    private modalService: NgbModal,
    private sponsorService: SponsorService
  ) {
  }

  ngOnInit() {
    this.sponsorService.fetchSponsorsByParticipant(this.participant.id)
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

  onCancel() {
    this.modalService.dismissAll();
  }

  onSponsor(participantId: string) {
    const modalRef = this.modalService.open(SponsorAddComponent);
    modalRef.componentInstance.participantId = participantId;
  }
}
