import { Component, OnInit } from '@angular/core';
import { AddCreditCardService } from 'src/app/services/add-credit-card/add-credit-card.service';
import { NewCreditCard } from 'src/app/models/new-credit-card.model';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.css']
})
export class AddCreditCardComponent implements OnInit {

  private addNewCreditCard: NewCreditCard = {
    name: null,
    cardNumber: null,
    cardLimit: null
  };
  private postError = false;
  private postErrorMessage = '';

  constructor(
    private addCreditCardService: AddCreditCardService,
    ) { }

  ngOnInit() {
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in on submit: ', form.valid);

    // if (form.valid) {
    this.addCreditCardService.addCreditCardDetails(this.addNewCreditCard).subscribe(
      data => console.log(data),
      error => console.log('error: ', error)
    );
    // } else {
    //   this.postError = true;
    //   this.postErrorMessage = 'post error';
    // }
  }

}
