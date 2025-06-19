import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramSectionComponent } from './organigram-section.component';

describe('OrganigramSectionComponent', () => {
  let component: OrganigramSectionComponent;
  let fixture: ComponentFixture<OrganigramSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganigramSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganigramSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
