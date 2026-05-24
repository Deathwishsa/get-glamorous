import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BUSINESS } from '../../../common/constant/business';

@Component({
  selector: 'app-preview-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './preview-gallery.component.html',
  styleUrls: ['./preview-gallery.component.scss'],
})
export class PreviewGalleryComponent {
  galleryImages = BUSINESS.galleryPreview;
}
