import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCrumbComponent } from './ngx-crumb.component';

describe('NgxCrumbComponent', () => {
  let component: NgxCrumbComponent;
  let fixture: ComponentFixture<NgxCrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCrumbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
