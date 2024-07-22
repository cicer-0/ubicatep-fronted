import { Component } from '@angular/core';

@Component({
  selector: 'app-back-button',
  standalone:true,
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
  goBack() {
    window.history.back();
  }
}
