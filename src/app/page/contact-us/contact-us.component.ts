// =============================================================================
// CONTACT PAGE COMPONENT
// src/app/page/contact-us/contact-us.component.ts
// =============================================================================

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BUSINESS } from '../../common/constant/business';

interface ContactForm {
  name        : string;
  email       : string;
  phone       : string;
  serviceType : string;
  date        : string;
  message     : string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {

  business = BUSINESS;

  form: ContactForm = {
    name        : '',
    email       : '',
    phone       : '',
    serviceType : '',
    date        : '',
    message     : '',
  };

  formStatus: FormStatus = 'idle';

  get minDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  contactCards = [
    {
      icon  : 'fa-solid fa-phone',
      label : 'Call or WhatsApp',
      value : BUSINESS.phone,
      href  : `tel:${BUSINESS.phone}`,
    },
    {
      icon  : 'fa-solid fa-envelope',
      label : 'Email Us',
      value : BUSINESS.email,
      href  : `mailto:${BUSINESS.email}`,
    },
    {
      icon  : 'fa-solid fa-location-dot',
      label : 'Find Us',
      value : BUSINESS.address,
      href  : null,
    },
    {
      icon  : 'fa-solid fa-clock',
      label : 'Hours',
      value : BUSINESS.businessHours,
      href  : null,
    },
  ];

  onSubmit(): void {
    if (this.formStatus === 'submitting') return;
    this.formStatus = 'submitting';
    // Simulate async submission — replace with real API / EmailJS / FormSpree
    setTimeout(() => {
      this.formStatus = 'success';
    }, 1800);
  }

  resetForm(): void {
    this.form = {
      name        : '',
      email       : '',
      phone       : '',
      serviceType : '',
      date        : '',
      message     : '',
    };
    this.formStatus = 'idle';
  }
}
