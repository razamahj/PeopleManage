import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';


export const routes: Routes = [
  { path: '', redirectTo: '/person-list', pathMatch: 'full' },
  { path: 'person-list', component: PersonListComponent },
  { path: 'people/:id', component: PersonDetailsComponent },
  { path: 'people/:id/edit', component: EditPersonComponent },
  { path: 'people/add', component: AddPersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
