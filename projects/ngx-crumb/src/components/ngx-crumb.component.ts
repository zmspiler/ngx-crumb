import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-crumb',
  imports: [],
  templateUrl: 'ngx-crumb.component.html',
})
export class NgxCrumbComponent {
  private readonly router = inject(Router);

  protected readonly currentUrl = this.router.url;
}
