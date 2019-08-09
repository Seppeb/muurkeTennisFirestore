import {Component, Input, OnInit} from '@angular/core';
import {Participant} from '../../participant.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ParticipantEditComponent} from '../../participant-edit/participant-edit.component';
import {ParticipantFireStoreService} from '../../ParticipantFireStore.service';
import {SponsorAddComponent} from '../../../sponsor/sponsor-add/sponsor-add.component';
import {SponsorService} from '../../../sponsor/sponsor.service';
import {Sponsor} from '../../../sponsor/sponsor.model';
import {AuthService} from '../../../admin/auth.service';

@Component({
  selector: 'app-participant-item',
  templateUrl: './participant-item.component.html',
  styleUrls: ['./participant-item.component.sass']
})
export class ParticipantItemComponent implements OnInit {
  @Input() participant: Participant;
  @Input() index: number;
  sponsors: Sponsor[] = [];
  public isCollapsed = true;
  public totalAmount: number;

  constructor(
    private modalService: NgbModal,
    private participantFireStore: ParticipantFireStoreService,
    private sponsorService: SponsorService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.fetchSponsors();
  }

  private fetchSponsors() {
    this.sponsorService.fetchSponsorsByParticipant(this.participant.id)
      .subscribe(sponsors => {
        this.sponsors = sponsors
          .map(e => {
            console.log(e.payload.doc.data());
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            } as Sponsor;
          });
      });
  }

  private calculateTotalAmount() {
    this.sponsors.map(bedrag => {
      console.log(bedrag);
    });
  }


  onEdit(participant: Participant) {
    const modalRef = this.modalService.open(ParticipantEditComponent);
    modalRef.componentInstance.editParticiant = participant;
  }

  onDelete(participantId: string) {
    if (window.confirm('Ben je zeker dat je de deelnemer wilt verwijderen?')) {
      this.participantFireStore.deleteParticiapant(participantId);
    }
  }

  onSponsor(participantId: string) {
    const modalRef = this.modalService.open(SponsorAddComponent);
    modalRef.componentInstance.participantId = participantId;
  }
}
