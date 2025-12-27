import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-cards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services-cards.html', // your existing HTML filename
  styleUrls: ['./services-cards.css']   // your existing CSS filename
})
export class ServicesCardsComponent {}