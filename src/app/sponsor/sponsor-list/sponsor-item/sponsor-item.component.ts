import {Component, Input, OnInit} from '@angular/core';
import {Sponsor} from '../../sponsor.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ParticipantFireStoreService} from '../../../participant/ParticipantFireStore.service';
import {SponsorEditComponent} from '../../sponsor-edit/sponsor-edit.component';
import {SponsorAddComponent} from '../../sponsor-add/sponsor-add.component';
import {SponsorService} from '../../sponsor.service';

@Component({
  selector: 'app-sponsor-item',
  templateUrl: './sponsor-item.component.html',
  styleUrls: ['./sponsor-item.component.sass']
})
export class SponsorItemComponent implements OnInit {
  @Input() sponsor: Sponsor;
  @Input() index: number;
  @Input() participant;
  public isCollapsed = true;

  constructor(
    private modalService: NgbModal,
    private participantService: ParticipantFireStoreService,
    private sponsorService: SponsorService
  ) {
  }

  ngOnInit() {
    this.fetchParticipantById();
  }

  onEdit(sponsor: Sponsor) {
    const modalRef = this.modalService.open(SponsorAddComponent);
    modalRef.componentInstance.editSponsor = sponsor;
  }

  onDelete(sponsorId: string) {
    console.log(sponsorId);
    console.log(this.sponsor);
    if (window.confirm('Ben je zeker dat je de sponsor wilt verwijderen? ')) {
      this.sponsorService.deleteSponsor(sponsorId);
    }
  }

  async fetchParticipantById() {
    await this.participantService
      .fetchParticipantById(this.sponsor.ParticipantId)
      .subscribe(data => {
        this.participant = data.payload.data();
      });
  }
}
