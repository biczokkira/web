import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import AllergyIntoleranceModel from '../../shared/models/allergyintolerance.model';
import {AllergiesService} from '../../services/allergies.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-allergy-details',
  templateUrl: './allergy-details.component.html',
  styleUrls: ['./allergy-details.component.scss']
})
export class AllergyDetailsComponent implements OnInit, OnChanges, OnDestroy {

  @Input() allergy?: AllergyIntoleranceModel;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentAllergy: AllergyIntoleranceModel = {
    patient: '',
    code: ''
  };
  message = '';

  constructor(private allergiesService: AllergiesService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentAllergy = { ...this.allergy };
  }

  ngOnDestroy(): void {
    this.message = '';
  }

  updateAllergy(): void {
    const data = {
      patient: this.allergy.patient,
      code: this.allergy.code
    };

    if (this.currentAllergy) {
      this.allergiesService.update(this.currentAllergy.id, data)
        .then(() => this.message = 'The allergy was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteAllergy(): void {
    if (this.currentAllergy.id) {
      this.allergiesService.delete( this.currentAllergy.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The allergy was deleted successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
