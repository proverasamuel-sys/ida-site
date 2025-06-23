import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticasDeProducaoComponent } from './estatisticas-de-producao.component';

describe('EstatisticasDeProducaoComponent', () => {
  let component: EstatisticasDeProducaoComponent;
  let fixture: ComponentFixture<EstatisticasDeProducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstatisticasDeProducaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstatisticasDeProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
