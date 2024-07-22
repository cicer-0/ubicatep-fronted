import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmenityIndicatorComponent } from '../../components/amenity-indicator/amenity-indicator.component';
import { BackButtonComponent } from '../../components/back-button/back-button.component';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule, AmenityIndicatorComponent, BackButtonComponent],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent {
  property = {
    title: 'Arriendo1',
    address: '123 Disney Way, Willingmington, WV 24921',
    reviews: '4/5 Reseñas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 156,
    image:
      'https://images.unsplash.com/photo-1603111692119-c52e275031bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHw2fHxjYXNhfGVufDB8fHx8MTY5NjQ1MjE2NXww&ixlib=rb-4.0.3&q=80&w=1080',
    amenities: [
      { icon: 'bi bi-ev-station', tooltip: 'EV Charger' },
      { icon: 'bi bi-pool', tooltip: 'Pool' },
      { icon: 'bi bi-plug', tooltip: 'Extra Outlets' },
      { icon: 'bi bi-snow', tooltip: 'AC' },
      { icon: 'bi bi-paw', tooltip: 'Dog Friendly' },
      { icon: 'bi bi-washing-machine', tooltip: 'Washer' },
      { icon: 'bi bi-dryer', tooltip: 'Dryer' },
      { icon: 'bi bi-dumbbell', tooltip: 'Workout' },
      { icon: 'bi bi-moon-stars', tooltip: 'Night Life' },
      { icon: 'bi bi-theater', tooltip: 'HIP' },
      { icon: 'bi bi-sun', tooltip: 'Heater' },
    ],
  };

  payNow() {
    // Logic to proceed with payment
  }
}
