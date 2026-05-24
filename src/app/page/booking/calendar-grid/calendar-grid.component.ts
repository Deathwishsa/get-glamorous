// =============================================================================
// CALENDAR GRID — page-scoped sub-component
// src/app/page/booking/calendar-grid/calendar-grid.component.ts
// =============================================================================

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayCellComponent } from '../day-cell/day-cell.component';

export type BookingStatus = 'available' | 'requested' | 'booked';

@Component({
  selector: 'app-calendar-grid',
  standalone: true,
  imports: [CommonModule, DayCellComponent],
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss'],
})
export class CalendarGridComponent {
  @Input() currentDate  : Date = new Date();
  @Input() availability : Record<string, BookingStatus> = {};
  @Output() dateSelected = new EventEmitter<Date>();
  @Output() monthChanged = new EventEmitter<Date>();

  readonly weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  get monthLabel(): string {
    return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  }

  get daysInMonth(): (Date | null)[] {
    const year  = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const totalDays      = new Date(year, month + 1, 0).getDate();

    const cells: (Date | null)[] = [];
    for (let i = 0; i < firstDayOfWeek; i++) cells.push(null);
    for (let d = 1; d <= totalDays; d++) cells.push(new Date(year, month, d));
    return cells;
  }

  getStatus(date: Date): BookingStatus {
    const key = date.toISOString().split('T')[0];
    return this.availability[key] ?? 'available';
  }

  selectDate(date: Date): void {
    this.dateSelected.emit(date);
  }

  prevMonth(): void {
    const d = new Date(this.currentDate);
    d.setMonth(d.getMonth() - 1);
    this.currentDate = d;
    this.monthChanged.emit(d);
  }

  nextMonth(): void {
    const d = new Date(this.currentDate);
    d.setMonth(d.getMonth() + 1);
    this.currentDate = d;
    this.monthChanged.emit(d);
  }
}
