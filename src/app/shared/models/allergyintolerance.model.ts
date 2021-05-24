import {DatePipe} from '@angular/common';
import firebase from 'firebase';

export enum AllergyClinicalStatus {
  _active = 'active',
  _inactive = 'inactive',
  _resolved = 'resolved'
}

export enum AllergyVerificationStatus {
  _unconfirmed = 'unconfirmed',
  _confirmed = 'confirmed',
  _refuted = 'refuted',
  _enteredInError = 'entered-in-error'
}

export enum AllergyType {
  _allergy = 'allergy',
  _intolerance = 'intolerance'
}

export enum AllergyCategory {
  _food = 'food',
  _medication = 'medication',
  _environment = 'environment',
  _biologic = 'biologic'
}

export enum AllergyCriticality {
  _low = 'low',
  _high = 'high',
  _unableToAssess = 'unable-to-assess'
}

export default class AllergyIntoleranceModel{
  id?: string | null;
  identifier?: string[];
  clinicalStatus?: AllergyClinicalStatus;
  verificationStatus?: AllergyVerificationStatus;
  type?: AllergyType;
  category?: AllergyCategory[];
  criticality?: AllergyCriticality;
  code?: string;
  patient: string;
  encounter?: string;
  onset?: number;
  recordedDate?: Date;
  recorder?: string;
  asserter?: string;
  lastOccurrence?: DatePipe;
  note?: string[];
  reaction?: Reaction[];
}

export enum ReactionSeverity {
  _mild = 'mild',
  _moderate = 'moderate',
  _severe = 'severe'
}

export class Reaction{
  substance?: string;
  manifestation: string[];
  description?: string;
  onset?: Date;
  severity?: ReactionSeverity;
  exposureRoute?: string;
  note?: string[];
}
