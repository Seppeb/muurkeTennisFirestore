import {Injectable} from '@angular/core';
import {Sponsor} from './sponsor.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {flatMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  constructor(private afs: AngularFirestore) {
  }

  addSponsor(sponsor: Sponsor) {
    this.afs.collection('sponsor').add(Object.assign({}, sponsor));
  }

  updateSponsor(sponsor: Sponsor, sponsorId: string) {
    delete sponsor.id;
    this.afs.doc('sponsor/' + sponsorId).update(Object.assign({}, sponsor));
  }

  fetchSponsors() {
    return this.afs.collection('sponsor').snapshotChanges();
  }

  fetchSponsorsByParticipant(participantid: string) {
    return this.afs.collection<Sponsor>('sponsor', ref => ref.where('ParticipantId', '==', participantid))
      .snapshotChanges();
  }

  deleteSponsor(sponsorId: string) {
    this.afs.doc('sponsor/' + sponsorId).delete();
  }
}
