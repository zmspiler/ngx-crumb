import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  imports: [],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss',
})
export class NavLinkComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) url!: string;
}
