import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaInscricaoComponent } from './programa-inscricao.component';

describe('ProgramaInscricaoComponent', () => {
  let component: ProgramaInscricaoComponent;
  let fixture: ComponentFixture<ProgramaInscricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaInscricaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramaInscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
