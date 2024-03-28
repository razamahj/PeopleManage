import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../person.model';
import { PersonService } from '../../services/person.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent implements OnInit {
  newPerson: Person = {
    id: 0,
    title: '',
    firstName: '',
    surname: '',
    sex: '',
    dateOfBirth: new Date()
  };

  constructor(
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
  }

  addPerson(): void {
    this.newPerson.dateOfBirth = new Date(this.newPerson.dateOfBirth);

    if (!isNaN(this.newPerson.dateOfBirth.getTime())) {
      this.personService.addPerson(this.newPerson)
        .subscribe(() => {
          this.router.navigate(['/people']);
        });
    } else {
      console.error('Invalid date of birth');
    }
  }
}
