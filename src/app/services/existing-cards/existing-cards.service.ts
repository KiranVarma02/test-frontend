import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCardDetails } from 'src/app/models/credit-card-details.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ExistingCardsService {

  private getCreditCardUrl = 'http://localhost:8080/creditCard/';

  constructor(
    private http: HttpClient
  ) { }

  getCreditCardDetails(): Observable<CreditCardDetails[]> {
    return this.http.get<CreditCardDetails[]>(this.getCreditCardUrl);
  }
}
