import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = "api/people"
  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

    getPerson(id: number): Observable<Person> {
    return this.http.get<Person>('${this.apiUrl}/${id}');
  }

    addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

    editPerson(id: number, person: Person): Observable<any> {
    return this.http.put('${this.apiUrl}/${id}', person);
  }

    deletePerson(id: number): Observable<any> {
    return this.http.delete('${this.apiUrl}/${id}');
  }
}
