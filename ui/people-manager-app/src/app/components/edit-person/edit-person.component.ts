import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from '../../person.model';
import { PersonService } from '../../services/person.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-person.component.html',
  styleUrl: './edit-person.component.css'
})
export class EditPersonComponent implements OnInit {
  person!: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.personService.getPerson(id)
        .subscribe(person => this.person = person);
    } else {
      console.error("ID is null or undefined");
    }
  }

  saveChanges(): void {
    if (this.person && this.person.id) {
      this.personService.editPerson(this.person.id, this.person)
        .subscribe(() => this.goBack());
    } else {
      console.error("Person array is empty or person ID is missing")
    }
  }

  goBack(): void {
    this.location.back();
  }
}
