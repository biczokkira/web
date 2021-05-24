import { Injectable } from '@angular/core';
import AllergyIntoleranceModel from '../shared/models/allergyintolerance.model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AllergiesService {

  private dbPath = '/allergies';

  tutorialsRef: AngularFirestoreCollection<AllergyIntoleranceModel>;

  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<AllergyIntoleranceModel> {
    return this.tutorialsRef;
  }

  create(tutorial: AllergyIntoleranceModel): any {
    return this.tutorialsRef.add({ ...tutorial});
  }

  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).set(data);
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
}
