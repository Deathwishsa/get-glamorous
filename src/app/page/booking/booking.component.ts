// =============================================================================
// BOOKING PAGE COMPONENT
// src/app/page/booking/booking.component.ts
// =============================================================================

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BUSINESS } from '../../common/constant/business';
import { CalendarGridComponent, BookingStatus } from './calendar-grid/calendar-grid.component';

// Mock availability — replace with a real API call when backend is ready
const MOCK_AVAILABILITY: Record<string, BookingStatus> = (() => {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  return {
    [`${y}-${m}-05`]: 'booked',
    [`${y}-${m}-06`]: 'booked',
    [`${y}-${m}-12`]: 'requested',
    [`${y}-${m}-19`]: 'booked',
    [`${y}-${m}-20`]: 'requested',
    [`${y}-${m}-26`]: 'booked',
  };
})();

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
];

interface BookingForm {
  name        : string;
  email       : string;
  phone       : string;
  serviceType : string;
}

type BookingState = 'idle' | 'submitting' | 'success';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, CalendarGridComponent],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {

  business     = BUSINESS;
  availability = MOCK_AVAILABILITY;
  timeSlots    = TIME_SLOTS;

  currentDate   = new Date();
  selectedDate  : Date | null = null;
  selectedTime  = '';
  bookingState  : BookingState = 'idle';

  form: BookingForm = {
    name        : '',
    email       : '',
    phone       : '',
    serviceType : '',
  };

  getAvailability(date: Date): BookingStatus {
    const key = date.toISOString().split('T')[0];
    return this.availability[key] ?? 'available';
  }

  onDateSelected(date: Date): void {
    this.selectedDate = date;
    this.selectedTime = '';
  }

  selectTime(time: string): void {
    this.selectedTime = time;
  }

  clearSelection(): void {
    this.selectedDate = null;
    this.selectedTime = '';
  }

  get canSubmit(): boolean {
    return !!(
      this.selectedDate &&
      this.selectedTime &&
      this.form.name &&
      this.form.email &&
      this.form.serviceType
    );
  }

  requestAppointment(): void {
    if (!this.canSubmit || this.bookingState === 'submitting') return;
    this.bookingState = 'submitting';

    // Simulate async submission — replace with real API / EmailJS / FormSpree
    setTimeout(() => {
      this.bookingState = 'success';
    }, 1600);
  }

  resetBooking(): void {
    this.selectedDate = null;
    this.selectedTime = '';
    this.form = { name: '', email: '', phone: '', serviceType: '' };
    this.bookingState = 'idle';
  }
}
