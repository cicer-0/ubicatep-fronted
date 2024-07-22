import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-card',
  standalone: true,
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {
  constructor(private router: Router){}
  @Input() property: any;

  viewPropertyDetails() {
    this.router.navigate(['/property']);

    console.log('Viewing details for property:', this.property);
  }
}
