import {Component, OnInit} from '@angular/core';
import AllergyIntoleranceModel from '../../shared/models/allergyintolerance.model';
import {AllergiesService} from '../../services/allergies.service';
import {getPatientForm} from '../../shared/forms/patient.form';
import {Form, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-allergy',
  templateUrl: './add-allergy.component.html',
  styleUrls: ['./add-allergy.component.scss']
})
export class AddAllergyComponent implements OnInit {

  constructor(private allergiesService: AllergiesService) {
  }

  allergy: AllergyIntoleranceModel = new AllergyIntoleranceModel();
  submitted = false;

  ngOnInit(): void {
  }

  saveAllergy(): void {
    this.allergiesService.create(this.allergy).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newAllergy(): void {
    this.submitted = false;
    this.allergy = new AllergyIntoleranceModel();
  }

}
