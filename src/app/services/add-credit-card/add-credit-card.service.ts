import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewCreditCard } from 'src/app/models/new-credit-card.model';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AddCreditCardService {

  private addCreditCardUrl = 'http://localhost:8080/creditCard/';

  constructor(
    private http: HttpClient
  ) { }

  addCreditCardDetails(newCreditCard: NewCreditCard): Observable<NewCreditCard> {
    return this.http.post<NewCreditCard>(this.addCreditCardUrl, newCreditCard);
  }
}
