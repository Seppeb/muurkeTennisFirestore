import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Participant} from './participant.model';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ParticipantFireStoreService {
  private participants: Participant[] = [];
  participantChanges = new Subject<Participant[]>();

  constructor(private afs: AngularFirestore) {
  }

  setParticipants(participants: Participant[]) {
    this.participants = participants;
    this.participantChanges.next(this.participants.slice());
  }

  getParticipants() {
    return this.participants.slice();
  }

  getParticiapant(index: string) {
    return this.participants[index];
  }

  addParticipant(participant: Participant) {
    this.participants.push(participant);
    this.participantChanges.next(this.participants.slice());
  }

  updateParticipant(index: number, newParticipant: Participant) {
    this.participants[index] = newParticipant;
    this.participantChanges.next(this.participants.slice());
  }

  deleteParticipant(index: number) {
    this.participants.splice(index, 1);
    this.participantChanges.next(this.participants.slice());
  }

  // firebase actions
  fetchParticipants() {
    return this.afs.collection('participant').snapshotChanges();
  }

  fetchParticipantById(participantId: string) {
    return this.afs.collection('participant').doc(participantId).snapshotChanges();
  }

  storeNewParticipant(participant: Participant) {
    return this.afs.collection('participant').add(Object.assign({}, participant));
  }

  updateParticipantFirestore(participant: Participant, participantId: string) {
    delete participant.id;
    this.afs.doc('participant/' + participantId).update(Object.assign({}, participant));
  }

  deleteParticiapant(participantId: string) {
    this.afs.doc('participant/' + participantId).delete();
  }
}
