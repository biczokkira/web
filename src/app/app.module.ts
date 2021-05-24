import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {OnHoverModule} from './shared/directives/onhover/onhover.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule} from '@angular/fire';

import {AllergyListComponent} from './components/allergy-list/allergy-list.component';
import { AddAllergyComponent } from './components/add-allergy/add-allergy.component';
import { AllergyDetailsComponent } from './components/allergy-details/allergy-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {UpModule} from './shared/pipes/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    AddAllergyComponent,
    AllergyDetailsComponent,
    AllergyListComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        BrowserAnimationsModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        OnHoverModule,
        MatProgressSpinnerModule,
        UpModule

    ],
  providers: [],
  exports: [
    AllergyDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
