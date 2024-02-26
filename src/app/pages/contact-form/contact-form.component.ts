import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { DividerComponent } from '../../components/divider/divider.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'bn-contact-form',
  standalone: true,
  imports: [
    ContainerComponent,
    DividerComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthday: new FormControl(''),
      social: new FormControl(''),
      obs: new FormControl(''),
    });
  }

  saveContact() {
    const newContact = this.contactForm.value;

    if (this.contactForm.valid) {
      this.contactService.saveContact(newContact);
    }

    this.contactForm.reset();
    this.router.navigateByUrl('/contacts-list');
  }

  cancel() {
    this.contactForm.reset();
    this.router.navigateByUrl('/contacts-list');
  }
}
