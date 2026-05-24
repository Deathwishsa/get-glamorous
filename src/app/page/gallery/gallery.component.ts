// =============================================================================
// GALLERY PAGE COMPONENT
// src/app/page/gallery/gallery.component.ts
// =============================================================================

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUSINESS, GalleryItem } from '../../common/constant/business';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {

  business = BUSINESS;
  activeFilter: string = 'All';
  selectedIndex: number | null = null;

  get filteredItems(): GalleryItem[] {
    if (this.activeFilter === 'All') return this.business.galleryItems;
    return this.business.galleryItems.filter(item => item.category === this.activeFilter);
  }

  get selectedItem(): GalleryItem | null {
    return this.selectedIndex !== null ? this.filteredItems[this.selectedIndex] : null;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.selectedIndex = null;
  }

  openLightbox(index: number): void {
    this.selectedIndex = index;
  }

  closeLightbox(): void {
    this.selectedIndex = null;
  }

  next(): void {
    if (this.selectedIndex === null) return;
    this.selectedIndex = (this.selectedIndex + 1) % this.filteredItems.length;
  }

  prev(): void {
    if (this.selectedIndex === null) return;
    this.selectedIndex = (this.selectedIndex - 1 + this.filteredItems.length) % this.filteredItems.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.selectedIndex === null) return;
    if (event.key === 'Escape')     this.closeLightbox();
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft')  this.prev();
  }
}
