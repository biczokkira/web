import { Component, OnInit } from '@angular/core';
import {AllergiesService} from '../../services/allergies.service';
import AllergyIntoleranceModel from '../../shared/models/allergyintolerance.model';
import {debounceTime, map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-allergy-list',
  templateUrl: './allergy-list.component.html',
  styleUrls: ['./allergy-list.component.scss']
})
export class AllergyListComponent implements OnInit {

  allergy?: AllergyIntoleranceModel[];
  currentAllergy?: AllergyIntoleranceModel;
  currentIndex = -1;
  title = 'Allergy';
  list: AngularFirestoreCollection<AllergyIntoleranceModel> = null;

  myControl = new FormControl();
  options: string[] = ['Alma', 'Mater', 'Vmi'];
  filteredOptions: Observable<string[]> | null = null;

  constructor(private allergiesService: AllergiesService) { }

  ngOnInit(): void {
    this.get();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map(value => this._filter(value))
      );
    this.retrieveAllergies();
  }

  get(): void {
    this.list = this.allergiesService.getAll();
  }

  refreshList(): void {
    this.currentAllergy = undefined;
    this.currentIndex = -1;
    this.retrieveAllergies();
  }

  retrieveAllergies(): void {
    this.allergiesService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.allergy = data;
    });
  }

  setActiveAllergy(allergy: AllergyIntoleranceModel, index: number): void {
    this.currentAllergy = allergy;
    this.currentIndex = index;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
