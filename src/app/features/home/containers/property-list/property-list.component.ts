import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../../components/property-card/property-card.component';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, PropertyCardComponent],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent {
  properties = [
    {
      title: 'ARRIENDO 1',
      description: 'Descripcion.......',
      reviews: '4/5',
      image: 'https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sample-app-property-finder-834ebu/assets/jyeiyll24v90/pixasquare-4ojhpgKpS68-unsplash.jpg'
    },
    {
      title: 'ARRIENDO 2',
      description: 'Descripcion.......',
      reviews: '5/5',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994'
    },
    {
      title: 'ARRIENDO 3',
      description: 'Descripcion.......',
      reviews: '3/5',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be'
    },
    {
      title: 'ARRIENDO 4',
      description: 'Descripcion.......',
      reviews: '4.5/5',
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9c8a40d'
    },
    {
      title: 'ARRIENDO 5',
      description: 'Descripcion.......',
      reviews: '4/5',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2'
    },
    {
      title: 'ARRIENDO 6',
      description: 'Descripcion.......',
      reviews: '4/5',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994'
    },
    {
      title: 'ARRIENDO 7',
      description: 'Descripcion.......',
      reviews: '5/5',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be'
    },
    {
      title: 'ARRIENDO 8',
      description: 'Descripcion.......',
      reviews: '3/5',
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9c8a40d'
    },
    {
      title: 'ARRIENDO 9',
      description: 'Descripcion.......',
      reviews: '4.5/5',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2'
    },
    {
      title: 'ARRIENDO 10',
      description: 'Descripcion.......',
      reviews: '4/5',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994'
    }
  ];

}
