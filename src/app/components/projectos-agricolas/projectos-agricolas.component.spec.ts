import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectosAgricolasComponent } from './projectos-agricolas.component';

describe('ProjectosAgricolasComponent', () => {
  let component: ProjectosAgricolasComponent;
  let fixture: ComponentFixture<ProjectosAgricolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectosAgricolasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectosAgricolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
