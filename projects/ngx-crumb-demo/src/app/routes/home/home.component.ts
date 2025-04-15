import { Component } from '@angular/core';
import { NgxCrumbComponent } from 'ngx-crumb';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [NgxCrumbComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
