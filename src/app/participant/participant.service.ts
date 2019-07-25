import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Participant} from './participant.model';
import {Observable, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  participantChanged = new Subject<Participant[]>();

  private participants: Participant[] = [];
  constructor(
    private http: HttpClient,
  ) {
  }

  setParticipants(participant: Participant[]) {
    this.participants = participant;
    this.participantChanged.next(this.participants.slice());
  }

  getParticipants() {
    return (this.participants.slice());
  }

  getParticipant(index: number) {
    return this.participants[index];
  }

  addParticipant(participant: Participant) {
    this.participants.push(participant);
    this.participantChanged.next(this.participants.slice());
  }

  updateParticipant(index: number, newParticipant: Participant) {
    this.participants[index] = newParticipant;
    this.participantChanged.next(this.participants.slice());
  }

  deleteParticipant(index: number) {
    this.participants.splice(index, 1);
    this.participantChanged.next(this.participants.slice());
    this.storeParticipant();
  }

  storeParticipant() {
    const participants = this.getParticipants();
    this.http
      .put(
        'https://muurketennis-2f7bd.firebaseio.com/participants.json',
        participants
      )
      .subscribe(response => {
          console.log(response);
        }
      );
  }

  // fetchParticipants() {
  //   return this.http
  //     .get<Participant[]>(
  //       'https://muurketennis-2f7bd.firebaseio.com/participants.json'
  //     )
  //     .pipe(
  //       map(participants => {
  //         return participants.map(participant => {
  //           return {
  //             ...participant,
  //           };
  //         });
  //       }),
  //       // tap(participants => {
  //       //   this.setParticipants(participants);
  //       // })
  //     );
  // }
}
