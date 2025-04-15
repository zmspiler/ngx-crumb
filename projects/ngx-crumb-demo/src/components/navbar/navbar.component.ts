import { Component, Input } from '@angular/core';
import { NavLinkComponent } from '../navigation/nav-link/nav-link.component';

@Component({
  selector: 'app-navbar',
  imports: [NavLinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input({ required: true }) text: string = '';
}
