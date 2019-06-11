import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCreditCardComponent } from './controllers/add-credit-card/add-credit-card.component';
import { ExistingCardsComponent } from './controllers/existing-cards/existing-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExistingCardsService } from './services/existing-cards/existing-cards.service';
import { AddCreditCardService } from './services/add-credit-card/add-credit-card.service';

@NgModule({
  declarations: [
    AppComponent,
    AddCreditCardComponent,
    ExistingCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
