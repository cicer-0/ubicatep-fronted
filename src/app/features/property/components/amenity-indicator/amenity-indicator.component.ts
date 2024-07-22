import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amenity-indicator',
  standalone:true,
  templateUrl: './amenity-indicator.component.html',
  styleUrls: ['./amenity-indicator.component.scss']
})
export class AmenityIndicatorComponent {
  @Input() icon: string = '';
  @Input() tooltip: string = '';
}
