import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ParticipantFireStoreService} from '../ParticipantFireStore.service';
import {Participant} from '../participant.model';

@Component({
  selector: 'app-participant-edit',
  templateUrl: './participant-edit.component.html',
  styleUrls: ['./participant-edit.component.sass']
})
export class ParticipantEditComponent implements OnInit {
  @Input() public editParticiant;
  participantForm: FormGroup;
  participant: Participant;
  editMode = false;
  id: number;

  constructor(
    private particiapntFirestore: ParticipantFireStoreService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    console.log(this.editParticiant);
    if (this.editParticiant) {
      this.editMode = true;
      this.initForms();
    } else {
      this.editMode = false;
      this.initForms();
    }
  }

  createParticipant() {
    this.participant = new Participant(
      this.participantForm.get('voornaam').value,
      this.participantForm.get('achternaam').value,
      this.participantForm.get('omschrijving').value,
      this.participantForm.get('goedDoelnaam').value,
      this.participantForm.get('goedDoelomschrijving').value,
      this.participantForm.get('goedDoellink').value,
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.createParticipant();
      this.particiapntFirestore.updateParticipantFirestore(this.participant, this.editParticiant.id);
    } else {
      this.createParticipant();
      this.particiapntFirestore.storeNewParticipant(this.participant);
    }
    this.onCancel();
  }

  onCancel() {
    this.modalService.dismissAll();
  }

  private initForms() {
    let participantVoornaam = '';
    let participantAchternaam = '';
    let participantOmschrijving = '';
    let GoedeDoelNaam: '';
    let GoedeDoelLink: '';
    let GoedeDoelOmschrijving: '';

    if (this.editMode) {
      const participant = this.editParticiant;
      participantVoornaam = participant.Voornaam;
      participantOmschrijving = this.editParticiant.Omschrijving;
      participantAchternaam = this.editParticiant.Achternaam;
      GoedeDoelNaam = this.editParticiant.GoedDoelNaam;
      GoedeDoelOmschrijving = this.editParticiant.GoedDoelOmschrijving;
      GoedeDoelLink = this.editParticiant.GoedDoelLink;
    }
    this.participantForm = new FormGroup({
      voornaam: new FormControl(participantVoornaam, Validators.required),
      achternaam: new FormControl(participantAchternaam, Validators.required),
      omschrijving: new FormControl(participantOmschrijving),
      goedDoelnaam: new FormControl(GoedeDoelNaam, Validators.required),
      goedDoelomschrijving: new FormControl(GoedeDoelOmschrijving),
      goedDoellink: new FormControl(GoedeDoelLink, Validators.required)
    });
  }
}
