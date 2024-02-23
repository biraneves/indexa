import { Component, Input } from '@angular/core';

@Component({
  selector: 'bn-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @Input() name: string = '';
  @Input() phone: string = '';
}
