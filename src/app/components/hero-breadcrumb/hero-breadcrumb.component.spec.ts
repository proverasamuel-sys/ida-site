import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBreadcrumbComponent } from './hero-breadcrumb.component';

describe('HeroBreadcrumbComponent', () => {
  let component: HeroBreadcrumbComponent;
  let fixture: ComponentFixture<HeroBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBreadcrumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
