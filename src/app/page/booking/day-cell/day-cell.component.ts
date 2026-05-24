// =============================================================================
// DAY CELL — page-scoped sub-component
// src/app/page/booking/day-cell/day-cell.component.ts
// =============================================================================

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingStatus } from '../calendar-grid/calendar-grid.component';

@Component({
  selector: 'app-day-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day-cell.component.html',
  styleUrls: ['./day-cell.component.scss'],
})
export class DayCellComponent {
  @Input() date   : Date | null         = null;
  @Input() status : BookingStatus | null = null;
  @Output() dateClick = new EventEmitter<void>();

  get isToday(): boolean {
    if (!this.date) return false;
    return this.date.toDateString() === new Date().toDateString();
  }

  get isPast(): boolean {
    if (!this.date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.date < today;
  }

  onClick(): void {
    if (this.date && this.status !== 'booked' && !this.isPast) {
      this.dateClick.emit();
    }
  }
}
