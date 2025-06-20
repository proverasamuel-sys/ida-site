import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasAgricolasComponent } from './programas-agricolas.component';

describe('ProgramasAgricolasComponent', () => {
  let component: ProgramasAgricolasComponent;
  let fixture: ComponentFixture<ProgramasAgricolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramasAgricolasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramasAgricolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
