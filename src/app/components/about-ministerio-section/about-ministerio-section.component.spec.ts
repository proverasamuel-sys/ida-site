import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMinisterioSectionComponent } from './about-ministerio-section.component';

describe('AboutMinisterioSectionComponent', () => {
  let component: AboutMinisterioSectionComponent;
  let fixture: ComponentFixture<AboutMinisterioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMinisterioSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMinisterioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
