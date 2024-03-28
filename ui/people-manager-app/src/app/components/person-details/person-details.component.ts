import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from '../../person.model';
import { PersonService } from '../../services/person.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent implements OnInit {
  person!: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getPerson(id)
      .subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.person && this.person.id) {
      this.personService.editPerson(this.person.id, this.person)
        .subscribe(() => this.goBack());
    }
  }
}
