import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../theme/service';
import { AfterViewInit } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    RouterModule
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class LayoutComponent implements AfterViewInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  isMobile = window.innerWidth <= 768;

  constructor(public theme: ThemeService) { } // 👈 FALTAVA ISSO

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  ngAfterViewInit() {
    if (!this.isMobile) {
      this.sidenav.open();
    }
  }

  closeIfMobile() {
    if (this.isMobile) {
      this.sidenav.close();
    }
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }
}