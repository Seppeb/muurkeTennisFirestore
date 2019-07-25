import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Sponsor} from '../sponsor.model';
import {SponsorService} from '../sponsor.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sponsor-add',
  templateUrl: './sponsor-add.component.html',
  styleUrls: ['./sponsor-add.component.sass']
})
export class SponsorAddComponent implements OnInit {
  @Input() public editSponsor;
  @Input() public participantId: string;
  sponsorForm: FormGroup;
  sponsor: Sponsor;
  editMode = false;

  constructor(
    private sponsorService: SponsorService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {

    if (this.editSponsor) {
      this.editMode = true;
    } else {
      this.editMode = false;
    }
    this.initForm();
  }

  private initForm() {
    let sponsorVoornaam = '';
    let sponsorAchternaam = '';
    let sponsorBoodschap = '';
    let sponsorHoeveelheid = 0;
    if (this.editMode) {
      const sponsor = this.editSponsor;
      sponsorVoornaam = sponsor.voornaam;
      sponsorAchternaam = sponsor.achternaam;
      sponsorBoodschap = sponsor.boodschap;
      sponsorHoeveelheid = sponsor.amount;
    }
    this.sponsorForm = new FormGroup({
      voornaam: new FormControl(sponsorVoornaam, Validators.required),
      achternaam: new FormControl(sponsorAchternaam, Validators.required),
      boodschap: new FormControl(sponsorBoodschap),
      amount: new FormControl(sponsorHoeveelheid, Validators.required),
    });
  }

  createSponsor() {
    this.sponsor = new Sponsor(
      this.sponsorForm.get('voornaam').value,
      this.sponsorForm.get('achternaam').value,
      this.sponsorForm.get('boodschap').value,
      this.sponsorForm.get('amount').value,
      this.participantId
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.createSponsor();
      this.sponsorService.updateSponsor(this.sponsor, this.editSponsor.id);
    } else {
      this.createSponsor();
      this.sponsorService.addSponsor(this.sponsor);
    }
    this.onCancel();
  }

  onCancel() {
    this.modalService.dismissAll();
  }

}
