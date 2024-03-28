import { Component, OnInit } from '@angular/core';
import { Person } from '../../person.model';
import { PersonService } from '../../services/person.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.personService.getPeople()
      .subscribe(people => this.people = people);
  }

  deletePerson(id: number): void {
    this.personService.deletePerson(id)
      .subscribe(() => {
        this.people = this.people.filter(p => p.id !== id);
        });
  }
}
