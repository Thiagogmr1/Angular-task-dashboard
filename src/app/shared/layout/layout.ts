import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../theme/service';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet, 
    RouterLink, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class LayoutComponent {

  constructor(public theme: ThemeService) {}

  toggleTheme() {
    this.theme.toggleTheme();
  }
}
