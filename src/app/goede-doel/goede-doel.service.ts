import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {GoedeDoel} from './goede-doel.model';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})
export class GoedeDoelService {
  goedeDoelChanged = new Subject<GoedeDoel[]>();

  private goedeDoelen: GoedeDoel[] = [];

  constructor(private afs: AngularFirestore) {

  }

  setGoedeDoelen(goedeDoelen: GoedeDoel[]) {
    this.goedeDoelen = goedeDoelen;
    this.goedeDoelChanged.next(this.goedeDoelen.slice());
  }

  getGoedeDoelen() {
    return (this.goedeDoelen.slice());
  }

  getGoedeDoel(index: number) {
    return this.goedeDoelen[index];
  }

  updateGoedeDoel(index: number, newGoedeDoel: GoedeDoel) {
    this.goedeDoelen[index] = newGoedeDoel;
    this.goedeDoelChanged.next(this.goedeDoelen.slice());
  }

  deleteGoedeDoel(index: number) {
    this.goedeDoelen.splice(index, 1);
    this.goedeDoelChanged.next(this.goedeDoelen.slice());
  }

  storeNewGoedeDoel(goedeDoel: GoedeDoel) {
    return this.afs.collection('goedDoel').add(Object.assign({}, goedeDoel));
  }
}
