import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { BookingComponent } from './page/booking/booking.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'booking', component: BookingComponent },
  { path: '**', redirectTo: '' }
];