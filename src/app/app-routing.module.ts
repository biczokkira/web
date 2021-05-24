import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllergyListComponent } from './components/allergy-list/allergy-list.component';
import { AddAllergyComponent } from './components/add-allergy/add-allergy.component';

const routes: Routes = [
  { path: '', redirectTo: 'allergies', pathMatch: 'full' },
  { path: 'allergies', component: AllergyListComponent },
  { path: 'add', component: AddAllergyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
