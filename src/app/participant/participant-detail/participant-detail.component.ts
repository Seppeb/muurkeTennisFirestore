import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SponsorAddComponent} from '../../sponsor/sponsor-add/sponsor-add.component';

@Component({
  selector: 'app-participant-detail',
  templateUrl: './participant-detail.component.html',
  styleUrls: ['./participant-detail.component.sass']
})
export class ParticipantDetailComponent implements OnInit {

  @Input() public participant;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    console.log(this.participant);
  }

  onCancel() {
    this.modalService.dismissAll();
  }

  onSponsor(participantId: string) {
    const modalRef = this.modalService.open(SponsorAddComponent);
    modalRef.componentInstance.participantId = participantId;
  }
}
