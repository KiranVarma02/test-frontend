import { Component, OnInit } from '@angular/core';
import { ExistingCardsService } from 'src/app/services/existing-cards/existing-cards.service';
import { CreditCardDetails } from 'src/app/models/credit-card-details.model';

@Component({
  selector: 'app-existing-cards',
  templateUrl: './existing-cards.component.html',
  styleUrls: ['./existing-cards.component.css']
})
export class ExistingCardsComponent implements OnInit {

  private existingCreditCardDetails: CreditCardDetails[];

  constructor(
    private existingCardService: ExistingCardsService
  ) { }

  ngOnInit() {
    this.getCardDetails();
  }

  getCardDetails(): void {
    this.existingCardService.getCreditCardDetails().subscribe(data => this.existingCreditCardDetails = data);
  }

}
