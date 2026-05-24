// =============================================================================
// MENU PAGE COMPONENT
// src/app/page/menu/menu.component.ts
// =============================================================================

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BUSINESS } from '../../common/constant/business';

type MenuTab = 'hair' | 'nails' | 'combos';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  business = BUSINESS;
  activeTab: MenuTab = 'hair';

  tabs: { key: MenuTab; label: string; icon: string }[] = [
    { key: 'hair',   label: 'Hair',   icon: 'fa-solid fa-scissors'      },
    { key: 'nails',  label: 'Nails',  icon: 'fa-solid fa-hand-sparkles' },
    { key: 'combos', label: 'Combos', icon: 'fa-solid fa-spa'           },
  ];

  get currentServices() {
    return this.business.menuServices[this.activeTab];
  }

  setTab(tab: MenuTab): void {
    this.activeTab = tab;
  }
}
