import {Component, Input, OnInit} from '@angular/core';
import {Participant} from '../../participant.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ParticipantEditComponent} from '../../participant-edit/participant-edit.component';
import {ParticipantFireStoreService} from '../../ParticipantFireStore.service';
import {ParticipantDetailComponent} from '../../participant-detail/participant-detail.component';
import {SponsorAddComponent} from '../../../sponsor/sponsor-add/sponsor-add.component';
import {SponsorService} from '../../../sponsor/sponsor.service';
import {Sponsor} from '../../../sponsor/sponsor.model';

@Component({
  selector: 'app-participant-item',
  templateUrl: './participant-item.component.html',
  styleUrls: ['./participant-item.component.sass']
})
export class ParticipantItemComponent implements OnInit {
  @Input() participant: Participant;
  @Input() index: number;
  sponsors: Sponsor[] = [];

  ngOnInit() {
  }

  constructor(
    private modalService: NgbModal,
    private participantFireStore: ParticipantFireStoreService,
    private sponsorService: SponsorService
  ) {
  }

  // totalAmount() {
  //   this.sponsorService.fetchSponsorsByParticipant(this.participant.id).subscribe(sponsors => {
  //     this.sponsors = sponsors;
  //   });
  // }

  onEdit(participant: Participant) {
    const modalRef = this.modalService.open(ParticipantEditComponent);
    modalRef.componentInstance.editParticiant = participant;
  }

  onDelete(participantId: string) {
    if (window.confirm('Ben je zeker dat je de deelnemer wilt verwijderen?')) {
      this.participantFireStore.deleteParticiapant(participantId);
    }
  }

  onDetail(participant: Participant) {
    const modalRef = this.modalService.open(ParticipantDetailComponent);
    modalRef.componentInstance.participant = participant;
  }

  onSponsor(participantId: string) {
    const modalRef = this.modalService.open(SponsorAddComponent);
    modalRef.componentInstance.participantId = participantId;
  }
}
